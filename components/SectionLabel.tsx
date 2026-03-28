export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-accent text-xs uppercase tracking-[0.3em] font-semibold mb-4">
      {children}
    </p>
  );
}
