import { Sparkles, Zap, Shield, Star } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Expert-led HIIT and cycling classes',
    description: 'We deliver exceptional quality in everything we do, ensuring your complete satisfaction.',
  },
  {
    icon: Zap,
    title: 'Real-time class booking and availability',
    description: 'Quick turnaround times without compromising on quality or attention to detail.',
  },
  {
    icon: Shield,
    title: 'Certified instructors with proven results',
    description: 'Your trusted partner for all your fitness needs, backed by years of experience.',
  },
  {
    icon: Star,
    title: 'Customer First',
    description: 'We put our customers at the center of everything we do, ensuring your success.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Velocity Fitness
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes us the preferred choice for fitness solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}