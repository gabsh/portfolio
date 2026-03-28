"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-[#0d0d0d]/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-base font-semibold text-foreground tracking-tight">
            Gabin Hemmerle
          </Link>

          <div className="flex gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || pathname.startsWith(href + '/');
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-accent bg-accent/8'
                      : 'text-dim hover:text-foreground hover:bg-foreground/5'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
