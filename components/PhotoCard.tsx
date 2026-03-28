"use client";

import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

interface PhotoSettings {
  focal?: string;
  aperture?: string;
  shutter?: string;
  iso?: string;
}

interface PhotoCardProps {
  name: string;
  image: StaticImageData;
  settings?: PhotoSettings;
}

export default function PhotoCard({ name, image, settings }: PhotoCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const meta = [settings?.focal, settings?.aperture, settings?.shutter, settings?.iso].filter(Boolean);

  return (
    <>
      <div className="w-full relative">
        {meta.length > 0 && (
          <p className="text-[10px] md:text-sm tracking-[0.25em] uppercase text-muted font-semibold mb-3 text-center">
            {meta.join(' | ')}
          </p>
        )}

        <div
          className="shadow-md hover:shadow-lg transition-shadow duration-200 group cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={image}
            alt={name}
            quality={60}
            placeholder="blur"
            className="w-full h-auto transition-all duration-300 group-hover:brightness-110"
          />
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 p-2 text-white/40 hover:text-white z-[10000] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative flex items-center justify-center w-full h-full max-w-[95vw] max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={image}
              alt={name}
              quality={100}
              className="max-w-full max-h-full object-contain shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
              style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '150vh' }}
            />
          </div>
        </div>
      )}
    </>
  );
}
