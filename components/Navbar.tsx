"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/navigation';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="pt-8 flex justify-between items-baseline">
      <Link href="/portfolio" className="font-bold">
        Gabin Hemmerle
      </Link>

      <nav className="flex items-center gap-5">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href || pathname.startsWith(href + '/');
          return (
            <Link
              key={href}
              href={href}
              className={`hover:text-accent ${isActive ? 'underline underline-offset-4' : 'text-dim'}`}
            >
              {label}
            </Link>
          );
        })}
        <ThemeToggle />
      </nav>
    </header>
  );
}
