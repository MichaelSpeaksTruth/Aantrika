import Image from 'next/image';
import { SectionHeading } from './SectionHeading';
import galleryImage1 from '../img_asset_aantrika/WhatsApp Image 2026-05-06 at 10.25.20 PM.jpeg';
import galleryImage2 from '../img_asset_aantrika/WhatsApp Image 2026-05-06 at 10.25.23 PM.jpeg';
import galleryImage3 from '../img_asset_aantrika/WhatsApp Image 2026-05-06 at 10.25.24 PM.jpeg';
import galleryImage4 from '../img_asset_aantrika/WhatsApp Image 2026-05-06 at 10.25.27 PM.jpeg';

const galleryImages = [
  {
    src: galleryImage1,
    alt: 'Aantrika reusable pad set in soft, textured packaging',
  },
  {
    src: galleryImage2,
    alt: 'Floral cloth pads arranged on woven natural fiber mat',
  },
  {
    src: galleryImage3,
    alt: 'Premium sustainable pad kit with branded pink packaging',
  },
  {
    src: galleryImage4,
    alt: 'Textile pads layered with cotton and botanical styling',
  },
];

export function ProductGallery() {
  return (
    <section className="px-6 pb-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Visual story"
          title="See the textures and care behind every piece."
          caption="Bring product photography into the brand experience with clean, high-contrast imagery that feels premium, authentic, and soft to the touch."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group min-w-0 overflow-hidden rounded-[32px] border border-soil/10 bg-white/95 shadow-paper shadow-soil/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_75px_-35px_rgba(45,55,72,0.35)]"
            >
              <div className="relative h-72 w-full sm:h-80">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
