export default function SectionLabel({ children, tone = 'accent' }: { children: React.ReactNode; tone?: 'accent' | 'neutral' }) {
  return (
    <p className={`font-mono text-sm mb-4 flex items-center gap-2 ${tone === 'accent' ? 'text-accent' : 'text-foreground'}`}>
      <span className="text-muted">{'//'}</span>
      {children}
    </p>
  );
}
