"use client";

import { motion } from "framer-motion";
import AlbumBrowser from '@/components/AlbumBrowser';

export default function Photography() {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <AlbumBrowser />
        </motion.div>
      </div>
    </main>
  );
}
