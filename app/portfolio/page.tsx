"use client";

import { motion } from "framer-motion";
import ProjectCard from '@/components/ProjectCard';
import SectionLabel from '@/components/SectionLabel';
import { projects, profile, skillGroups } from '@/lib/data';
import { LinkedinIcon, Mail, Github } from "lucide-react";

const contactLinkClass = "flex items-center gap-3 px-5 py-3 bg-widget border border-border rounded-xl text-subtle hover:text-foreground hover:border-muted transition-all group";

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
          <p className="text-xl text-dim max-w-xl mb-2">
            A selection of projects showcasing my skills and experience.
          </p>
        </motion.div>

        {/* Profile */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <p className="text-accent text-sm font-medium mb-4">{profile.role}</p>
          <p className="text-subtle leading-relaxed mb-6 max-w-4xl">{profile.intro}</p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a href={`mailto:${profile.contacts.email}`} className={contactLinkClass}>
              <Mail size={17} className="text-accent shrink-0" />
              <span className="text-sm">{profile.contacts.email}</span>
            </a>
            <a href={profile.contacts.linkedin} target="_blank" rel="noopener noreferrer" className={contactLinkClass}>
              <LinkedinIcon size={17} className="text-accent shrink-0" />
              <span className="text-sm">linkedin.com/in/gabin-hemmerle</span>
            </a>
            <a href={profile.contacts.github} target="_blank" rel="noopener noreferrer" className={contactLinkClass}>
              <Github size={17} className="text-accent shrink-0" />
              <span className="text-sm">github.com/gabsh</span>
            </a>
          </div>

          <div className="space-y-4">
            {skillGroups.map((group) => (
              <div key={group.category} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                <p className="text-xs uppercase tracking-widest text-muted w-44 shrink-0">{group.category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-0.5 bg-accent/8 text-accent border border-accent/20 rounded-full text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <SectionLabel>Projects</SectionLabel>
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
