"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-mono text-sm text-foreground">
            <span className="text-accent">~/</span>gabin
          </Link>

          <div className="flex gap-6 font-mono text-sm">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || pathname.startsWith(href + '/');
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative py-2 transition-colors duration-200 ${
                    isActive ? 'text-foreground' : 'text-dim hover:text-foreground'
                  }`}
                >
                  {isActive && <span className="text-muted">./</span>}
                  {label.toLowerCase()}
                  {isActive && (
                    <span className="absolute left-0 -bottom-px h-px w-full bg-foreground" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
