import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';

const headingFont = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Velocity Fitness | Austin's premier boutique HIIT and cycling studio delivering high-intensity workouts that transform bodies and mindsets',
  description: 'Austin's premier boutique HIIT and cycling studio delivering high-intensity workouts that transform bodies and mindsets. Expert-led HIIT and cycling classes. Real-time class booking and availability.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}