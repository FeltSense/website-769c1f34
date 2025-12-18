import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10"
        style={{
          backgroundImage: 'url(/images/generated/hero-hero-1766097362732.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Austin's premier boutique HIIT and cycling studio delivering high-intensity workouts that transform bodies and mindsets
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-slide-up">
          Expert-led HIIT and cycling classes
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Link
            href="#contact"
            className="px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-all flex items-center justify-center gap-2"
          >
            Book Your Free Class
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#features"
            className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
          >
            View Class Schedule
          </Link>
        </div>
      </div>
    </section>
  );
}