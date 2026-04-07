import { LinkedinIcon, Github } from "lucide-react";

const techs = [
  { name: "Next.js", href: "https://nextjs.org" },
  { name: "TypeScript", href: "https://www.typescriptlang.org" },
  { name: "Tailwind CSS", href: "https://tailwindcss.com" },
  { name: "Bun", href: "https://bun.sh" },
  { name: "Three.js", href: "https://threejs.org" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-sm text-muted font-medium">Built with</span>
            <div className="flex items-center gap-3">
              {techs.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted hover:text-foreground transition-colors"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/gabin-hemmerle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dim hover:text-foreground transition-colors"
            >
              <LinkedinIcon size={26} />
            </a>
            <a
              href="https://github.com/gabsh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dim hover:text-foreground transition-colors"
            >
              <Github size={26} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
