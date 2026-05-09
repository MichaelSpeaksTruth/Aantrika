"use client";

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Breathable Hybrid Layers',
    description: 'A biodegradable upper layer meets a soft cotton inner layer for comfort that feels clean and grounded.'
  },
  {
    title: 'Chemical-free Calm',
    description: 'Free from dyes, fragrances, and synthetic finishes—kept gentle for sensitive skin and daily use.'
  },
  {
    title: 'Reusable Ecosystem',
    description: 'Built to last multiple cycles, designed for easy washing and trust in every fold.'
  },
  {
    title: 'Intuitive Fit',
    description: 'A sculpted silhouette with secure fastenings, crafted to move with your body rather than against it.'
  }
];

export function FeatureGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {features.map((feature, index) => (
        <motion.article
          key={feature.title}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="surface-card min-w-0 border border-soil/10 bg-white/95 p-8 shadow-paper shadow-soil/10"
        >
          <div className="mb-4 inline-flex rounded-full border border-rose/20 bg-petal/70 px-4 py-2 text-xs uppercase tracking-[0.18em] text-soil/70">
            {`Feature ${index + 1}`}
          </div>
          <h3 className="break-words font-sans text-2xl font-semibold leading-tight text-ink tracking-[-0.02em]">{feature.title}</h3>
          <p className="mt-4 break-words text-sm leading-7 text-soil/80">{feature.description}</p>
        </motion.article>
      ))}
    </div>
  );
}
