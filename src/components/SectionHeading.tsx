export function SectionHeading({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="font-mono text-sm text-accent">{eyebrow}</p>
      <h2 id={id} className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {children ? <p className="mt-4 text-muted leading-relaxed">{children}</p> : null}
    </div>
  );
}
