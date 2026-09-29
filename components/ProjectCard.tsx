import Image from 'next/image';
import { Github, Globe } from 'lucide-react';
import { btn } from '@/lib/styles';

interface ProjectCardProps {
  name: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
  image?: string;
  tags: string[];
}

export default function ProjectCard({ name, description, githubLink, liveLink, image, tags }: ProjectCardProps) {
  return (
    <article className="border border-border bg-widget">
      {image && (
        <div className="relative h-44 w-full border-b border-border">
          <Image src={image} alt={name} fill sizes="(min-width: 672px) 672px, 100vw" className="object-cover" />
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" aria-label={`${name} website`} className="absolute inset-0" />
          )}
        </div>
      )}

      <div className="p-5">
        <h3 className="font-bold mb-1">{name}</h3>
        <p className="mb-2">{description}</p>
        <p className="text-sm text-dim mb-2">{tags.join(', ')}</p>
        <div className="flex gap-3 mt-4">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className={btn}>
              <Github size={20} /> GitHub
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className={btn}>
              <Globe size={20} /> Site
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
