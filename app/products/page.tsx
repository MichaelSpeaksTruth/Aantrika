import Image from 'next/image';
import Link from 'next/link';
import pad1 from '../../img_asset_aantrika/WhatsApp Image 2026-05-06 at 10.25.20 PM.jpeg';
import pad2 from '../../img_asset_aantrika/WhatsApp Image 2026-05-06 at 10.25.21 PM.jpeg';
import pad3 from '../../img_asset_aantrika/WhatsApp Image 2026-05-06 at 10.25.22 PM.jpeg';
import pad4 from '../../img_asset_aantrika/WhatsApp Image 2026-05-06 at 10.25.23 PM.jpeg';

const productItems = [
  {
    title: 'Aantrika Reusable Pads',
    description: 'Soft, breathable, and designed for everyday comfort with sustainable materials.',
    image: pad1,
  },
  {
    title: 'Everyday Comfort Set',
    description: 'A curated pack built for daily wear and gentle protection on the move.',
    image: pad2,
  },
  {
    title: 'Travel Essentials',
    description: 'Compact, lightweight pads designed for active days and easy care.',
    image: pad3,
  },
  {
    title: 'Premium Night Care',
    description: 'Extra coverage and soft layers for overnight confidence.',
    image: pad4,
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-cotton min-h-screen px-6 py-10 text-soil sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="rounded-[36px] border border-soil/10 bg-white/95 p-8 shadow-paper shadow-soil/10 sm:p-12">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-soil/60">Our pads</p>
            <h1 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">Explore the Aantrika pad collection</h1>
            <p className="max-w-3xl text-base leading-8 text-soil/80">
              Discover reusable pads designed for comfort, sustainability and everyday confidence. Each style is crafted for gentle support and easy care.
            </p>
          </div>
          <Link href="/shop" className="mt-8 inline-flex rounded-[26px] bg-soil px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-cotton transition hover:bg-soil/90">
            Request a pack
          </Link>
        </section>

        <section className="grid gap-8 xl:grid-cols-2">
          {productItems.map((product) => (
            <article key={product.title} className="overflow-hidden rounded-[32px] border border-soil/10 bg-white shadow-paper shadow-soil/10">
              <div className="relative h-80 sm:h-[28rem]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 p-8">
                <h2 className="text-2xl font-semibold text-ink">{product.title}</h2>
                <p className="text-base leading-7 text-soil/80">{product.description}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-5 rounded-[32px] border border-soil/10 bg-white/95 p-8 shadow-paper shadow-soil/10 sm:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-ink">Sustainable care</h3>
            <p className="text-sm leading-7 text-soil/80">Reusable pads reduce waste while staying soft and simple to wash.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-ink">Comfort-first design</h3>
            <p className="text-sm leading-7 text-soil/80">Each pad is engineered for a secure fit and breathable comfort throughout the day.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-ink">Everyday confidence</h3>
            <p className="text-sm leading-7 text-soil/80">Designed to match modern routines with gentle protection and easy upkeep.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
