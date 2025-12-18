import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Pricing />
      <Team />
      <Testimonials />
      <Features />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}