'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function MLPBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // ── Renderer ──────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x0d0d0d, 1)
    container.appendChild(renderer.domElement)

    // ── Scene ─────────────────────────────────────────────────────────────
    const scene = new THREE.Scene()

    // ── Camera ────────────────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      500
    )
    const BASE_CAM = new THREE.Vector3(20, 10, 8) //x = distance from MLP, y = height, z = depth offset
    const BASE_LOOK = new THREE.Vector3(10, -5, 0) //x = center of MLP, y = look height, z = look depth
    camera.position.copy(BASE_CAM)
    camera.lookAt(BASE_LOOK)

    // ── Diamond sprite texture ────────────────────────────────────────────
    const spriteCanvas = document.createElement('canvas')
    spriteCanvas.width = 32
    spriteCanvas.height = 32
    const sctx = spriteCanvas.getContext('2d')!
    sctx.fillStyle = '#ffffff'
    sctx.beginPath()
    sctx.moveTo(16, 2)
    sctx.lineTo(30, 16)
    sctx.lineTo(16, 30)
    sctx.lineTo(2, 16)
    sctx.closePath()
    sctx.fill()
    const spriteTexture = new THREE.CanvasTexture(spriteCanvas)

    // ── MLP Layer Definition ──────────────────────────────────────────────
    const layerSizes = [8, 10, 14, 10, 4]
    const layerSpacing = 8
    const totalWidth = (layerSizes.length - 1) * layerSpacing
    const MLP_OFFSET_X = 10
    const startX = -totalWidth / 2 + MLP_OFFSET_X

    // Colors per layer: green → orange → red gradient
    const layerColors: [number, number, number][] = [
      [0.56, 0.98, 0.76],  // #8FFBC2 green
      [0.70, 0.80, 0.50],  // green-orange
      [0.90, 0.56, 0.16],  // #E69029 orange
      [0.85, 0.38, 0.20],  // orange-red
      [0.79, 0.21, 0.22],  // #CB3539 red
    ]

    // Build node positions for each layer
    interface NodeInfo {
      x: number
      y: number
      z: number
      color: [number, number, number]
      // fast bob
      bobAmp: number
      bobFreq: number
      bobPhase: number
      // slow breath (second sinusoid)
      breathAmp: number
      breathFreq: number
      breathPhase: number
      // spatial drift X/Z
      driftAmpX: number
      driftFreqX: number
      driftPhaseX: number
      driftAmpZ: number
      driftFreqZ: number
      driftPhaseZ: number
    }

    const nodes: NodeInfo[] = []

    for (let li = 0; li < layerSizes.length; li++) {
      const count = layerSizes[li]
      const x = startX + li * layerSpacing
      const col = layerColors[li]

      for (let ni = 0; ni < count; ni++) {
        const angle = (ni / count) * Math.PI * 2 + (li * 0.3)
        const radius = 3 + (count / 14) * 5
        const y = Math.sin(angle) * radius + 2
        const z = Math.cos(angle) * radius * 0.6

        nodes.push({
          x, y, z,
          color: col,
          bobAmp:       0.05 + Math.random() * 0.12,
          bobFreq:      0.40 + Math.random() * 0.60,
          bobPhase:     Math.random() * Math.PI * 2,
          breathAmp:    0.07 + Math.random() * 0.10,
          breathFreq:   0.08 + Math.random() * 0.12,
          breathPhase:  Math.random() * Math.PI * 2,
          driftAmpX:    0.03 + Math.random() * 0.06,
          driftFreqX:   0.05 + Math.random() * 0.08,
          driftPhaseX:  Math.random() * Math.PI * 2,
          driftAmpZ:    0.03 + Math.random() * 0.06,
          driftFreqZ:   0.05 + Math.random() * 0.08,
          driftPhaseZ:  Math.random() * Math.PI * 2,
        })
      }
    }

    // ── Node particles ────────────────────────────────────────────────────
    const nodeCount = nodes.length
    const nodePositions = new Float32Array(nodeCount * 3)
    const nodeColors = new Float32Array(nodeCount * 3)
    const nodeBaseY = new Float32Array(nodeCount)

    for (let i = 0; i < nodeCount; i++) {
      const n = nodes[i]
      const idx = i * 3
      nodePositions[idx]     = n.x
      nodePositions[idx + 1] = n.y
      nodePositions[idx + 2] = n.z
      nodeBaseY[i] = n.y
      nodeColors[idx]     = n.color[0]
      nodeColors[idx + 1] = n.color[1]
      nodeColors[idx + 2] = n.color[2]
    }

    const nodeGeo = new THREE.BufferGeometry()
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3))
    nodeGeo.setAttribute('color',    new THREE.BufferAttribute(nodeColors, 3))

    const nodeMat = new THREE.PointsMaterial({
      vertexColors: true,
      size: 0.7,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.95,
      map: spriteTexture,
      alphaMap: spriteTexture,
      alphaTest: 0.01,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    scene.add(new THREE.Points(nodeGeo, nodeMat))

    // ── Connections between adjacent layers ────────────────────────────────
    // Pre-build a mapping: connSrcDst[i] = [srcNodeIdx, dstNodeIdx]
    interface ConnInfo {
      srcIdx: number
      dstIdx: number
    }
    const connInfos: ConnInfo[] = []
    const connectionVerts: number[] = []
    const connectionColors: number[] = []

    let offset = 0
    for (let li = 0; li < layerSizes.length - 1; li++) {
      const currentLayerStart = offset
      const currentLayerEnd   = offset + layerSizes[li]
      const nextLayerStart    = currentLayerEnd
      const nextLayerEnd      = nextLayerStart + layerSizes[li + 1]

      for (let a = currentLayerStart; a < currentLayerEnd; a++) {
        for (let b = nextLayerStart; b < nextLayerEnd; b++) {
          connInfos.push({ srcIdx: a, dstIdx: b })
          const na = nodes[a]
          const nb = nodes[b]
          connectionVerts.push(na.x, na.y, na.z)
          connectionVerts.push(nb.x, nb.y, nb.z)
          const mixR = (na.color[0] + nb.color[0]) * 0.5
          const mixG = (na.color[1] + nb.color[1]) * 0.5
          const mixB = (na.color[2] + nb.color[2]) * 0.5
          connectionColors.push(mixR, mixG, mixB)
          connectionColors.push(mixR, mixG, mixB)
        }
      }
      offset += layerSizes[li]
    }

    const connGeo = new THREE.BufferGeometry()
    connGeo.setAttribute('position', new THREE.Float32BufferAttribute(connectionVerts, 3))
    connGeo.setAttribute('color',    new THREE.Float32BufferAttribute(connectionColors, 3))

    const connMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    scene.add(new THREE.LineSegments(connGeo, connMat))

    // ── Mouse Parallax ────────────────────────────────────────────────────
    const mouseTarget  = { x: 0, y: 0 }
    const mouseCurrent = { x: 0, y: 0 }
    const onMouseMove = (e: MouseEvent) => {
      mouseTarget.x = (e.clientX / window.innerWidth  - 0.5) * 1
      mouseTarget.y = (e.clientY / window.innerHeight - 0.5) * -0.5
    }
    window.addEventListener('mousemove', onMouseMove)

    const onResize = () => {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', onResize)

    // ── Animation Loop ────────────────────────────────────────────────────
    const clock = new THREE.Clock()
    let animId: number

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      // 1. Update node positions (bob + breath + spatial drift)
      const nPos = nodeGeo.attributes.position.array as Float32Array
      for (let i = 0; i < nodeCount; i++) {
        const n = nodes[i]
        nPos[i * 3]     = n.x + n.driftAmpX * Math.sin(t * n.driftFreqX + n.driftPhaseX)
        nPos[i * 3 + 1] = nodeBaseY[i]
                          + n.bobAmp    * Math.sin(t * n.bobFreq    + n.bobPhase)
                          + n.breathAmp * Math.sin(t * n.breathFreq + n.breathPhase)
        nPos[i * 3 + 2] = n.z + n.driftAmpZ * Math.sin(t * n.driftFreqZ + n.driftPhaseZ)
      }
      nodeGeo.attributes.position.needsUpdate = true

      // 2. Update connection positions
      const cPos = connGeo.attributes.position.array as Float32Array
      let ci = 0
      for (const conn of connInfos) {
        const a = conn.srcIdx
        const b = conn.dstIdx
        cPos[ci]     = nPos[a * 3];     cPos[ci + 1] = nPos[a * 3 + 1]; cPos[ci + 2] = nPos[a * 3 + 2]
        cPos[ci + 3] = nPos[b * 3];     cPos[ci + 4] = nPos[b * 3 + 1]; cPos[ci + 5] = nPos[b * 3 + 2]
        ci += 6
      }
      connGeo.attributes.position.needsUpdate = true

      // 3. Camera parallax
      mouseCurrent.x += (mouseTarget.x - mouseCurrent.x) * 0.06
      mouseCurrent.y += (mouseTarget.y - mouseCurrent.y) * 0.06
      camera.position.set(
        BASE_CAM.x + mouseCurrent.x,
        BASE_CAM.y + mouseCurrent.y,
        BASE_CAM.z
      )
      camera.lookAt(
        BASE_LOOK.x + mouseCurrent.x * 0.2,
        BASE_LOOK.y + mouseCurrent.y * 0.15,
        BASE_LOOK.z
      )

      renderer.render(scene, camera)
    }
    animate()

    // ── Cleanup ───────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      nodeGeo.dispose()
      nodeMat.dispose()
      connGeo.dispose()
      connMat.dispose()
      spriteTexture.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
}
