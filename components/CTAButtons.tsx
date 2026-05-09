import Link from 'next/link';

interface CTAButtonsProps {
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
  secondaryHref?: string;
}

export function CTAButtons({
  primaryLabel = 'Shop Now',
  secondaryLabel = 'Explore Our Pads',
  primaryHref = '/shop',
  secondaryHref = '/products'
}: CTAButtonsProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <Link
        href={primaryHref}
        className="inline-flex items-center justify-center rounded-[26px] border border-transparent bg-soil px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-cotton shadow-paper shadow-soil/10 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-soft"
      >
        {primaryLabel}
      </Link>
      <Link
        href={secondaryHref}
        className="inline-flex items-center justify-center rounded-[26px] border border-solid border-soil/15 bg-white/90 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-soil shadow-paper shadow-soil/5 hover:-translate-y-1"
      >
        {secondaryLabel}
      </Link>
    </div>
  );
}
