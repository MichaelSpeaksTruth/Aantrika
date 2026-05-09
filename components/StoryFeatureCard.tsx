'use client';

import { motion } from 'framer-motion';

interface StoryFeatureCardProps {
  title: string;
  description: string;
  delay?: number;
}

export function StoryFeatureCard({ title, description, delay = 0 }: StoryFeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className="overflow-hidden rounded-[34px] border border-soil/12 bg-white/92 p-7 shadow-paper shadow-soil/10"
    >
      <p className="text-xs uppercase tracking-[0.28em] text-rose/70">{title}</p>
      <p className="mt-4 text-sm leading-7 text-soil/85">{description}</p>
    </motion.article>
  );
}
