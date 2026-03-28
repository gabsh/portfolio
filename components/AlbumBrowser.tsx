"use client";

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import PhotoCard from '@/components/PhotoCard';
import { albums, Album } from '@/lib/data';

export default function AlbumBrowser() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  return (
    <>
      <div className="mb-16">
        {selectedAlbum ? (
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
            <div className="flex justify-center md:justify-start">
              <button
                onClick={() => setSelectedAlbum(null)}
                className="text-dim hover:text-foreground transition-colors uppercase tracking-widest text-sm font-semibold flex"
              >
                ← Back to Albums
              </button>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">{selectedAlbum.title}</h1>
            </div>
            <div className="hidden md:block"></div>
          </div>
        ) : (
          <div>
            <p className="text-accent text-xs uppercase tracking-[0.3em] font-semibold mb-4">Visual</p>
            <h1 className="text-5xl font-bold text-foreground mb-4">Photography</h1>
            <p className="text-xl text-dim">Choose an album to view photos.</p>
          </div>
        )}
      </div>

      {!selectedAlbum ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {albums.map((album) => (
            <div
              key={album.id}
              onClick={() => setSelectedAlbum(album)}
              className="group cursor-pointer flex flex-col items-center relative mt-4"
            >
              <div className="relative w-[90%] max-w-[350px] aspect-square flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2">
                <svg viewBox="0 0 24 24" className="absolute inset-0 w-full h-full text-[#DE9C55] fill-current z-0 transition-colors duration-500 group-hover:text-[#C88C4D]">
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v15A1.5 1.5 0 0 0 2.5 21h19a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 21.5 6h-10l-2-3H2.5Z" />
                </svg>

                {album.photos[2] && (
                  <div className="absolute w-[71%] left-[10%] top-[32%] z-10 bg-gray-500 p-[1px] shadow-md rounded-sm origin-bottom transition-all duration-500 ease-out translate-x-7 -translate-y-4 group-hover:rotate-[8deg] group-hover:-translate-y-12 group-hover:translate-x-6">
                    <Image src={album.photos[2].image as StaticImageData} alt="Preview 3" quality={30} className="object-cover" />
                  </div>
                )}

                {album.photos[1] && (
                  <div className="absolute w-[71%] left-[10%] top-[32%] z-10 bg-gray-500 p-[1px] shadow-md rounded-sm origin-bottom transition-all duration-500 ease-out translate-x-3.5 -translate-y-2 group-hover:rotate-[5deg] group-hover:-translate-y-8 group-hover:translate-x-4">
                    <Image src={album.photos[1].image as StaticImageData} alt="Preview 2" quality={30} className="object-cover" />
                  </div>
                )}

                {album.photos[0] && (
                  <div className="absolute w-[71%] left-[10%] top-[32%] z-10 bg-gray-500 p-[1px] shadow-xl rounded-sm origin-bottom transition-all duration-500 ease-out translate-x-0 translate-y-0 group-hover:rotate-[2deg] group-hover:-translate-y-4 group-hover:translate-x-2">
                    <Image src={album.photos[0].image as StaticImageData} alt="Preview 1" quality={30} className="object-cover" />
                  </div>
                )}

                <svg viewBox="0 0 24 24" className="absolute inset-0 w-full h-full text-[#F6BE66] fill-current z-20 drop-shadow-[0_-4px_6px_rgba(0,0,0,0.5)] transition-colors duration-500 group-hover:text-[#DDAB5C]">
                  <path d="M1 10.5A1.5 1.5 0 0 1 2.5 9h19A1.5 1.5 0 0 1 23 10.5v9A1.5 1.5 0 0 1 21.5 21h-19A1.5 1.5 0 0 1 1 19.5v-9Z" />
                </svg>
              </div>

              <div className="mt-6 text-center">
                <h2 className="text-2xl font-bold text-subtle tracking-wide group-hover:text-foreground transition-colors">{album.title}</h2>
                <p className="text-[12px] uppercase tracking-[0.2em] text-muted mt-2 font-semibold">
                  {album.photos.length} photos
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 md:gap-5 space-y-6 md:space-y-10">
          {selectedAlbum.photos.map((photo, index) => (
            <div key={index} className="break-inside-avoid">
              <PhotoCard {...photo} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
