"use client";

import { motion } from "framer-motion";
import { timelineData } from '@/lib/data';
import { LinkedinIcon, Mail } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
});

const contactLinkClass = "flex items-center gap-3 px-5 py-3 bg-widget border border-border rounded-xl text-subtle hover:text-foreground hover:border-muted transition-all group";

export default function About() {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro */}
        <motion.section className="mb-16" {...fadeUp(0)}>
          <SectionLabel>Introduction</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Hello, I&apos;m Gabin 👋
          </h1>
          <p className="text-xl text-subtle leading-relaxed">
            I&apos;m a master&apos;s student passionate about Data Science on a work-study as a BPM Developer.
          </p>
        </motion.section>

        {/* Contact */}
        <motion.section className="mb-16" {...fadeUp(0.12)}>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="text-2xl font-bold text-foreground mb-6">Get in touch</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="mailto:gabin.hemm@gmail.com" className={contactLinkClass}>
              <Mail size={17} className="text-accent shrink-0" />
              <span className="text-sm">gabin.hemm@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/gabin-hemmerle"
              target="_blank"
              rel="noopener noreferrer"
              className={contactLinkClass}
            >
              <LinkedinIcon size={17} className="text-accent shrink-0" />
              <span className="text-sm">linkedin.com/in/gabin-hemmerle</span>
            </a>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section {...fadeUp(0.24)}>
          <SectionLabel>Background</SectionLabel>
          <h2 className="text-2xl font-bold text-foreground mb-12">This is my background</h2>

          <div className="relative">
            {/* Animated dot at top */}
            <div className="relative mb-4">
              <div className="absolute left-1/2 -top-10 -translate-x-1/2">
                <div className="absolute w-4 h-4 rounded-full bg-accent/30 animate-ping -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute w-4 h-4 rounded-full bg-accent/20 animate-ping delay-500 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute w-4 h-4 rounded-full bg-accent/50 animate-pulse -translate-x-1/2 -translate-y-1/2 z-10"></div>
                <div className="absolute w-2 h-2 rounded-full bg-accent -translate-x-1/2 -translate-y-1/2 z-20"></div>
              </div>
            </div>

            {/* Center line */}
            <div className="absolute left-1/2 -top-8 bottom-0 w-0.5 bg-[#2a2a2a] -translate-x-1/2" />

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.id}
                  id={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="relative"
                >
                  <div className="absolute left-1/2 top-6 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent z-10 ring-4 ring-accent/30" />

                  <div className="bg-widget border border-border rounded-xl p-6 hover:border-muted transition-all duration-300 group">
                    <p className="text-[11px] text-muted uppercase tracking-widest mb-2">
                      {item.dateRange}
                    </p>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      {item.title}
                    </h3>
                    <p className="text-dim text-sm mb-3">
                      {item.company}{item.location && `, ${item.location}`}
                    </p>
                    {item.description && (
                      <p className="text-subtle text-sm mb-3 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                    {item.bullets && (
                      <ul className="space-y-1.5 mb-4">
                        {item.bullets.map((bullet, idx) => (
                          <li key={idx} className="text-sm flex items-start text-subtle">
                            <span className="text-accent mr-2 mt-0.5 shrink-0">›</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.tags && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {item.tags.split(', ').map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 bg-accent/8 text-accent border border-accent/20 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
