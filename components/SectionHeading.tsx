interface SectionHeadingProps {
  title: string;
  caption: string;
  eyebrow?: string;
}

export function SectionHeading({ title, caption, eyebrow }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? (
        <p className="text-sm uppercase tracking-[0.24em] text-soil/60">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-4xl font-semibold leading-[1.02] text-ink tracking-[-0.02em] sm:text-5xl">{title}</h2>
      <p className="text-base leading-8 text-soil/80 sm:text-lg tracking-[-0.01em]">{caption}</p>
    </div>
  );
}
