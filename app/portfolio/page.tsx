"use client";

import { motion } from "framer-motion";
import ProjectCard from '@/components/ProjectCard';
import SectionLabel from '@/components/SectionLabel';
import { projects, profile, skillGroups } from '@/lib/data';
import { LinkedinIcon, Mail, Github } from "lucide-react";

const contactRows = [
  { icon: Mail, label: 'mail', value: 'gabin.hemm@gmail.com', href: `mailto:${profile.contacts.email}` },
  { icon: LinkedinIcon, label: 'linkedin', value: 'linkedin.com/in/gabin-hemmerle', href: profile.contacts.linkedin },
  { icon: Github, label: 'github', value: 'github.com/gabsh', href: profile.contacts.github },
];

export default function Portfolio() {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <SectionLabel tone="neutral">work</SectionLabel>
          <h1 className="text-5xl font-bold text-foreground mb-4 leading-tight">Portfolio</h1>
          <p className="text-xl text-dim max-w-xl mb-2">
            A selection of projects showcasing my skills and experience.
          </p>
        </motion.div>

        {/* Profile — laid out as a terminal readout instead of a card row */}
        <section className="mb-16 border border-border rounded-sm bg-widget overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-black/20">
            <span className="w-2.5 h-2.5 rounded-full bg-border" />
            <span className="w-2.5 h-2.5 rounded-full bg-border" />
            <span className="w-2.5 h-2.5 rounded-full bg-border" />
            <span className="font-mono text-[11px] text-muted ml-2">whoami.sh</span>
          </div>

          <div className="p-6 sm:p-8">
            <p className="font-mono text-foreground text-sm mb-4">{profile.role}</p>
            <p className="text-subtle leading-relaxed mb-8 max-w-4xl">{profile.intro}</p>

            <div className="font-mono text-sm space-y-1.5 mb-8">
              {contactRows.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label === 'mail' ? undefined : '_blank'}
                  rel={label === 'mail' ? undefined : 'noopener noreferrer'}
                  className="flex items-center gap-2 text-dim hover:text-foreground transition-colors group w-fit"
                >
                  <span className="text-muted">$</span>
                  <Icon size={14} className="text-foreground shrink-0" />
                  <span className="text-muted w-16 shrink-0">{label}</span>
                  <span className="group-hover:underline underline-offset-4">{value}</span>
                </a>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-border">
              {skillGroups.map((group) => (
                <div key={group.category} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                  <p className="font-mono text-xs text-muted w-36 shrink-0">{group.category.toLowerCase()}</p>
                  <p className="font-mono text-xs text-subtle leading-relaxed">
                    {group.items.map((item) => `#${item}`).join('  ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionLabel tone="neutral">projects</SectionLabel>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
          <div className="border border-dashed border-border rounded-sm h-full min-h-[200px] flex items-center justify-center">
            <p className="font-mono text-sm text-muted">
              next --project<span className="animate-pulse">_</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
