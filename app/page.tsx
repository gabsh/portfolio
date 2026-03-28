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
          className="flex gap-3 mt-8"
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
                className="px-6 py-3 border border-white/20 text-white/80 text-sm font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-200"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
