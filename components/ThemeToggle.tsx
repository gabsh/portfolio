"use client";

import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    if (next === 'light') root.dataset.theme = 'light';
    else delete root.dataset.theme;
    try {
      localStorage.setItem('theme', next);
    } catch {}
  };

  return (
    <button onClick={toggle} aria-label="Toggle theme" className="text-dim hover:text-accent">
      <Sun size={18} className="light:hidden" />
      <Moon size={18} className="hidden light:block" />
    </button>
  );
}
