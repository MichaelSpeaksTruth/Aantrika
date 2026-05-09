"use client";

import { motion } from 'framer-motion';
import { CTAButtons } from './CTAButtons';

const highlights = [
  '100% biodegradable upper layer',
  'Soft & reusable inner cotton layer',
  'Rash-free & chemical-free',
  'Designed by women, for women'
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 blur-3xl">
        <div className="absolute left-[-10%] top-10 h-56 w-56 rounded-full bg-rose/15" />
        <div className="absolute right-0 top-24 h-48 w-48 rounded-full bg-blush/20" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="min-w-0 flex-1"
        >
          <div className="mb-8 max-w-xl rounded-[32px] border border-soil/10 bg-petal/80 px-6 py-4 text-xs uppercase tracking-[0.18em] text-soil/70 shadow-paper shadow-soil/8 sm:px-8">
            Editorial eco-luxury for menstrual wellness
          </div>
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex border-l-4 border-rose pl-5 text-sm uppercase tracking-[0.18em] text-soil/80">
              Sustainable comfort for every cycle
            </p>
            <h1 className="break-words font-sans text-[3rem] leading-[0.95] text-ink sm:text-6xl lg:text-7xl tracking-[-0.04em]">
              A premium movement for menstrual care that feels like a second skin.
            </h1>
            <p className="mt-8 max-w-2xl break-words text-base leading-7 text-soil/82 sm:text-lg tracking-[-0.01em]">
              Aantrika brings eco-friendly, biodegradable, and reusable menstrual pads that care for you and the planet with soft material, thoughtful design, and modern feminine strength.
            </p>
          </div>
          <div className="mt-10">
            <CTAButtons />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="surface-card border border-soil/10 bg-white/95 p-5 shadow-paper shadow-soil/8">
                <p className="text-sm font-semibold text-soil">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-1"
        >
          <div className="relative mx-auto max-w-xl rounded-[42px] border border-soil/10 bg-petal/90 p-8 shadow-soft">
            <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-rose/15 blur-2xl" />
            <div className="absolute right-8 top-24 h-24 w-24 rounded-full bg-dustyRose/20 blur-2xl" />
            <div className="surface-card relative overflow-hidden rounded-[34px] border border-soil/10 bg-white p-8 shadow-paper shadow-soil/10">
              <div className="space-y-6">
                <div className="h-3 w-28 rounded-full bg-blush/90" />
                <div className="h-4 w-20 rounded-full bg-rose/40" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[30px] bg-rose/90 p-6 text-ink shadow-paper shadow-rose/20">
                    <p className="text-sm uppercase tracking-[0.24em] text-soil/70">Hybrid composition</p>
                    <p className="mt-4 text-lg font-semibold">Reusable + Biodegradable</p>
                  </div>
                  <div className="rounded-[30px] bg-blush p-6 text-ink shadow-paper shadow-soil/10">
                    <p className="text-sm uppercase tracking-[0.24em] text-soil/60">Care-first design</p>
                    <p className="mt-4 text-lg font-semibold">Comfort that honors every curve</p>
                  </div>
                </div>
                <div className="min-h-[12rem] rounded-[30px] bg-[radial-gradient(circle_at_top_left,rgba(97,104,82,0.18),transparent_40%),linear-gradient(180deg,rgba(247,243,238,1),rgba(232,222,209,1))] p-6 text-soil shadow-paper shadow-soil/10">
                  <p className="mb-4 text-sm uppercase tracking-[0.2em] text-soil/60">Material story</p>
                  <div className="grid gap-3">
                    <p className="break-words text-base leading-7">Top layer: biodegradable cotton blend with a soft textured hand.</p>
                    <p className="break-words text-base leading-7">Core: absorbent plant fiber mesh designed for breathability and chemical-free care.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
