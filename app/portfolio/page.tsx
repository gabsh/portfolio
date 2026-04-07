"use client";

import { motion } from "framer-motion";
import ProjectCard from '@/components/ProjectCard';
import SectionLabel from '@/components/SectionLabel';
import { projects } from '@/lib/data';

export default function Portfolio() {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <SectionLabel>Work</SectionLabel>
          <h1 className="text-5xl font-bold text-foreground mb-4 leading-tight">Portfolio</h1>
          <p className="text-xl text-dim max-w-xl">
            A selection of projects showcasing my skills and experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: projects.length * 0.08 }}
            className="border border-dashed border-border rounded-xl h-full min-h-[280px] flex items-center justify-center"
          >
            <p className="text-muted text-sm uppercase tracking-widest">
              Projects coming soon
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
