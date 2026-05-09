import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800']
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Aantrika — Sustainable Comfort for Every Cycle',
  description: 'A premium movement for sustainable feminine care with reusable biodegradable menstrual pads.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="flex min-h-screen flex-col">
        <div className="flex-1">{children}</div>
        <footer className="border-t border-soil/10 py-8 text-center text-sm text-soil/60">
          <p>© 2025–2026 Aantrika. Designed & Developed with purpose and care. All Rights Reserved. ®</p>
        </footer>
      </body>
    </html>
  );
}
