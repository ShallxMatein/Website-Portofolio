export default function SectionLabel({ n, children }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
      {n} — {children}
    </p>
  );
}
