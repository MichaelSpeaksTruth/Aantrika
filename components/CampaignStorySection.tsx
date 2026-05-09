"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import campaignImage from '../img_asset_aantrika/pop.jpeg';

export function CampaignPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 3000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(255,248,246,0.92)] px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setVisible(false)}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,222,220,0.24),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(217,154,174,0.14),transparent_20%)]" />
          <motion.div
            className="relative z-10 w-full max-w-5xl max-h-[95vh] overflow-y-auto overflow-x-hidden rounded-[32px] sm:rounded-[40px] border border-rose/10 bg-[#fff6f4] p-5 shadow-[0_24px_80px_rgba(62,50,44,0.1)] sm:p-8"
            initial={{ y: 36, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVisible(false)}
              className="absolute right-3 top-3 sm:right-5 sm:top-5 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-soil/10 bg-white text-soil shadow-paper shadow-soil/10 transition hover:bg-petal/90"
              aria-label="Close campaign popup"
            >
              ✕
            </button>

            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_65%)]" />
            <div className="grid gap-6 lg:grid-cols-[0.95fr_0.85fr] lg:items-center">
              <div className="space-y-5 lg:pr-6">
                <div className="inline-flex rounded-full border border-rose/20 bg-petal/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-rose/80">
                  Thoughtfully curated
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
                    Self care that cares back.
                  </h2>
                  <p className="max-w-xl text-sm leading-7 text-soil/82 sm:text-base">
                    Eco-friendly essentials designed for comfort, softness, and conscious living — thoughtfully made for you and the planet.
                  </p>
                </div>
                <div className="rounded-[30px] border border-soil/10 bg-white/95 p-5 shadow-paper shadow-soil/8">
                  <p className="text-sm font-semibold text-ink">Gentle on you. Better for Earth.</p>
                  <p className="mt-3 text-sm leading-7 text-soil/82">
                    Reusable cloth pads, sustainable gifting, and comforting essentials crafted with care, intention, and feminine warmth.
                  </p>
                </div>
                <div className="grid gap-3 sm:auto-cols-max sm:grid-flow-col sm:items-center">
                  <a
                    href="/shop"
                    className="inline-flex min-w-[14rem] items-center justify-center rounded-[28px] bg-rose px-6 py-4 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(217,154,174,0.18)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#d9708a]"
                  >
                    Explore the collection
                  </a>
                  <a
                    href="/story"
                    className="inline-flex min-w-[12rem] items-center justify-center rounded-[28px] border border-soil/10 bg-white px-6 py-4 text-sm font-semibold text-soil shadow-paper shadow-soil/10 transition duration-300 ease-out hover:-translate-y-0.5"
                  >
                    Our story
                  </a>
                </div>
              </div>

              <div className="relative lg:mt-6">
                <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-rose/15 blur-3xl" />
                <div className="absolute right-6 bottom-10 h-20 w-20 rounded-full bg-sand/80 blur-3xl" />
                <div className="overflow-hidden rounded-[34px] border border-soil/10 bg-[#fff5f3] shadow-paper shadow-soil/10">
                  <div className="relative h-[12rem] sm:h-[28rem] overflow-hidden rounded-[24px] sm:rounded-[30px] bg-[radial-gradient(circle_at_top_left,rgba(246,209,221,0.38),transparent_35%),linear-gradient(180deg,rgba(255,249,247,0.96),rgba(255,245,244,0.96))]">
                    <Image
                      src={campaignImage}
                      alt="Aantrika campaign collage"
                      className="object-contain transition-transform duration-700 hover:scale-105"
                      fill
                      sizes="(max-width: 1024px) 100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
