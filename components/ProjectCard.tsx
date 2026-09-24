import Image from 'next/image';
import { Github, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
  image?: string;
  tags: string[];
}

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function ProjectCard({ name, description, githubLink, liveLink, image, tags }: ProjectCardProps) {
  return (
    <div className="bg-widget border border-border rounded-sm overflow-hidden hover:border-muted transition-colors duration-300 group">
      {/* fake editor titlebar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-black/20">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-border" />
          <span className="w-2.5 h-2.5 rounded-full bg-border" />
          <span className="w-2.5 h-2.5 rounded-full bg-border" />
        </div>
        <span className="font-mono text-[11px] text-muted">{slugify(name)}.tsx</span>
      </div>

      {image && (
        <div className="relative h-44 w-full overflow-hidden border-b border-border">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-subtle text-sm leading-relaxed mb-4">{description}</p>

        <p className="font-mono text-xs text-subtle mb-5 leading-relaxed">
          {tags.map((tag) => `#${tag}`).join('  ')}
        </p>

        <div className="flex items-center gap-5 font-mono text-xs">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-dim hover:text-foreground transition-colors"
            >
              <Github size={14} /> source
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-dim hover:text-foreground transition-colors"
            >
              live <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
