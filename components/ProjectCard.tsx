import Image from 'next/image';

interface ProjectCardProps {
  name: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
  image: string;
  tags: string[];
}

const btnClass = "flex-1 text-center px-4 py-2 bg-white/10 text-foreground rounded-lg hover:bg-white/15 border border-border transition-all font-medium";

export default function ProjectCard({ name, description, githubLink, liveLink, image, tags }: ProjectCardProps) {
  return (
    <div className="bg-widget border border-border rounded-xl overflow-hidden hover:border-muted transition-all duration-300 group">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-3">{name}</h3>
        <p className="text-subtle mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-accent/8 text-accent border border-accent/20 rounded-full text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className={btnClass}>
              GitHub
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className={btnClass}>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
