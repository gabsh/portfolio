"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { navLinks } from "@/lib/navigation";

const MLPBackground = dynamic(() => import("@/components/MLPBackground"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0d0d0d]">
      <MLPBackground />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-start justify-end min-h-screen px-[6vw] pb-[15vh] gap-3">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white/40 text-[clamp(1.1rem,2.5vw,2rem)] font-normal tracking-[-0.01em]"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-white text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-none tracking-[-0.025em]"
        >
          Gabin Hemmerle
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex gap-4 mt-10"
        >
          {navLinks.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
            >
              <Link
                href={item.href}
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-white/25 text-white/70 text-sm font-medium tracking-wide hover:border-white/60 hover:text-white transition-all duration-300"
              >
                {item.label}
                <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
                {i === 1 && (
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400/70" />
                    <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
                  </span>
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
