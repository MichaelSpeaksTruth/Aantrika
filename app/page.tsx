import { HeroSection } from '../components/HeroSection';
import { CampaignPopup } from '../components/CampaignStorySection';
import { FeatureGrid } from '../components/FeatureGrid';
import { SectionHeading } from '../components/SectionHeading';
import { ProductGallery } from '../components/ProductGallery';
import { CTAButtons } from '../components/CTAButtons';

const values = [
  { label: 'Women-led craft', description: 'Built from lived experience and deep cycle care.' },
  { label: 'Planet-first materials', description: 'Earth-friendly fabrics and biodegradable finishes.' },
  { label: 'Intentional comfort', description: 'Thoughtful thickness, breathability, and fluid security.' },
  { label: 'Community education', description: 'Workshops and campus initiatives to shift stigma.' }
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-cotton text-soil">
      <HeroSection />

      <CampaignPopup />

      <section className="px-6 pb-14 sm:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_minmax(320px,0.9fr)] lg:items-end">
          <div className="min-w-0 space-y-7">
            <SectionHeading
              eyebrow="About Aantrika"
              title="Rooted in a founder story that blends craft, empathy, and quiet power."
              caption="Aantrika grew from a belief that menstrual care can feel premium, sustainable, and deeply personal without compromise."
            />
            <div className="grid gap-6 sm:grid-cols-2">
              <article className="section-panel min-w-0 p-7">
                <p className="text-sm uppercase tracking-[0.18em] text-soil/65">Founder story</p>
                <p className="mt-4 break-words text-sm leading-7 text-soil/82">
                  A designer and care advocate created Aantrika after years of listening to cycles, stories, and the desire for a pad that felt luxurious, nourishing, and responsible.
                </p>
              </article>
              <article className="section-panel min-w-0 p-7">
                <p className="text-sm uppercase tracking-[0.18em] text-soil/65">Name meaning</p>
                <p className="mt-4 break-words text-sm leading-7 text-soil/82">
                  Aantrika means the promise of renewal. It is a reminder that comfort, confidence, and sustainability can exist together in every month.
                </p>
              </article>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.label} className="surface-card min-w-0 p-7">
                  <p className="text-sm uppercase tracking-[0.16em] text-soil/60">{value.label}</p>
                  <p className="mt-4 break-words text-sm leading-7 text-soil/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[36px] border border-soil/10 bg-rose/10 p-9 shadow-paper shadow-soil/10">
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-petal/70 blur-2xl" />
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-soil/12 bg-white/90 px-5 py-3 text-sm uppercase tracking-[0.18em] text-soil/80">
                Mission / Vision
              </div>
              <div className="space-y-4">
                <p className="text-xl font-semibold text-ink">Mission</p>
                <p className="text-sm leading-7 text-soil/82">
                  To create menstrual essentials that are kind to skin, gentle on nature, and designed to elevate everyday ritual.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-xl font-semibold text-ink">Vision</p>
                <p className="text-sm leading-7 text-soil/82">
                  A future where conscious cycle care is normalized, celebrated, and available through thoughtful, beautiful design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_0.8fr] lg:items-start">
          <div className="min-w-0 space-y-7">
            <SectionHeading
              eyebrow="Product narrative"
              title="A reusable hybrid pad that rewrites what sustainable feminine care can look like."
              caption="Our pads combine soft textile structure, precise layering, and premium materials to feel secure, breathable, and beautifully intentional."
            />
            <div className="grid gap-6 rounded-[36px] border border-soil/10 bg-white/90 p-7 shadow-paper shadow-soil/10">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="min-w-0 rounded-[28px] bg-sand/90 p-6">
                  <h3 className="break-words text-lg font-semibold text-ink">Material breakdown</h3>
                  <p className="mt-3 break-words text-sm leading-7 text-soil/82">The soft reusable inner layer cushions, absorbs, and keeps the experience temperature balanced.</p>
                </div>
                <div className="min-w-0 rounded-[28px] bg-rose/10 p-6">
                  <h3 className="break-words text-lg font-semibold text-ink tracking-[-0.02em]">Design details</h3>
                  <p className="mt-3 break-words text-sm leading-7 text-soil/82">Curved wings, precision quilting, and discreet fasteners that move with your body.</p>
                </div>
              </div>
              <div className="min-w-0 rounded-[32px] border border-soil/10 bg-cotton/95 p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-soil/70">Pricing callout</p>
                <p className="mt-4 break-words text-2xl font-semibold text-ink tracking-[-0.02em]">A premium kit starting with mindful affordability.</p>
                <p className="mt-3 break-words max-w-xl text-sm leading-7 text-soil/82">A sustainable set that pays back in value over time, with reusable pads crafted to last across cycles and reduce waste.</p>
              </div>
            </div>
          </div>
          <div className="space-y-7">
            <FeatureGrid />
            <div className="rounded-[36px] border border-soil/10 bg-moss/95 p-8 text-white shadow-paper shadow-moss/15">
              <p className="text-sm uppercase tracking-[0.18em] text-sand/80">Interactive essence</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">Tactile care, reimagined.</h3>
              <p className="mt-5 text-sm leading-7 text-sand/90">Experience a pad that feels soft at the surface, strong in performance, and invisible in daily rituals.</p>
            </div>
          </div>
        </div>
      </section>

      <ProductGallery />

      <section className="px-6 pb-20 sm:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_0.9fr] lg:items-start">
          <div className="section-panel relative overflow-hidden p-10">
            <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-terracotta/15 blur-2xl" />
            <SectionHeading
              eyebrow="Sustainability"
              title="Less waste, more impact—designed to shift the conversation around period products."
              caption="Every piece is calibrated to reduce disposable pad waste, lower chemical exposure, and invite a more considered cycle routine."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[30px] bg-white/95 p-6 shadow-paper shadow-soil/8">
                <p className="text-5xl font-semibold text-moss">80%</p>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-soil/70">Less waste per year</p>
              </div>
              <div className="rounded-[30px] bg-white/95 p-6 shadow-paper shadow-soil/8">
                <p className="text-5xl font-semibold text-terracotta">1200+</p>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-soil/70">Disposable pads replaced</p>
              </div>
            </div>
          </div>
          <div className="section-panel rounded-[36px] border border-soil/10 bg-sand/90 p-10 shadow-paper shadow-soil/10">
            <div className="inline-flex rounded-full border border-soil/15 bg-white/75 px-4 py-2 text-xs uppercase tracking-[0.28em] text-soil/70">
              Organic metaphors
            </div>
            <div className="mt-8 space-y-6 text-soil/85">
              <p className="text-base leading-8">
                The sustainable story is told through material gestures: soft cotton, warm clay tones, and grounded green notes that feel honest and elegant.
              </p>
              <p className="text-base leading-8">
                Every visual element is curated to support the experience of renewal, comfort, and the quiet luxury of mindful daily rituals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
            <div className="rounded-[36px] border border-soil/10 bg-white/95 p-10 shadow-paper shadow-soil/10">
              <SectionHeading
                eyebrow="Community"
                title="Workshop rituals and campus roots shaped with care."
                caption="Our story begins in shared spaces where education, craft, and women’s leadership came together to build a better cycle care community."
              />
              <div className="mt-8 space-y-5 text-base leading-8 text-soil/85">
                <p>
                  From early campus workshops to thoughtful online gatherings, Aantrika is rooted in stories and support. We design products that feel warm, inviting, and rooted in human connection.
                </p>
                <p>
                  Every pad is part of a wider movement: conscious cycles, circular practice, and a creative table where women’s experience guides every detail.
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-flow-col sm:auto-cols-max sm:items-center">
                <div className="rounded-[32px] border border-soil/10 bg-petal/85 px-6 py-4 text-sm font-semibold text-ink shadow-paper shadow-soil/10">
                  Join the movement
                </div>
                <a
                  href="/story"
                  className="inline-flex items-center justify-center rounded-[28px] border border-soil/10 bg-white px-6 py-4 text-sm font-semibold text-soil shadow-paper shadow-soil/10 transition hover:-translate-y-0.5"
                >
                  Read our story
                </a>
              </div>
            </div>
            <div className="relative rounded-[36px] bg-terracotta/10 p-10 shadow-paper shadow-[0_24px_60px_rgba(201,124,93,0.12)]">
              <div className="absolute inset-x-0 top-0 h-20 rounded-b-[42px] bg-moss/10" />
              <div className="relative space-y-6">
                <div className="inline-flex rounded-full bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.28em] text-soil/70">
                  Campus origins
                </div>
                <div className="rounded-[32px] bg-white/90 p-8 shadow-paper shadow-soil/5">
                  <p className="font-semibold text-ink">Workshop story</p>
                  <p className="mt-4 text-base leading-7 text-soil/85">
                    Sessions with young women and makers sparked a product philosophy that values ritual, comfort, and education equally.
                  </p>
                </div>
                <div className="rounded-[32px] bg-moss/95 p-8 text-white shadow-paper shadow-moss/15">
                  <p className="font-semibold">Human-centered rhythm</p>
                  <p className="mt-4 text-base leading-7 text-sage/90">
                    Every detail is considered from the perspective of lived experience, not just function.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
