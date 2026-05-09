interface SectionHeadingProps {
  title: string;
  caption: string;
  eyebrow?: string;
}

export function SectionHeading({ title, caption, eyebrow }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? (
        <p className="text-sm uppercase tracking-[0.24em] text-soil/70">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-4xl leading-[1.02] text-ink sm:text-5xl">{title}</h2>
      <p className="text-base leading-8 text-soil/85 sm:text-lg">{caption}</p>
    </div>
  );
}
