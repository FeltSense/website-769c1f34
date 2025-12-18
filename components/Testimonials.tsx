import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    image: '/images/testimonials/testimonial-transformations-0-1766097353171.jpg',
    quote: 'Working with Velocity Fitness has been transformative for our business. Their expertise and dedication are unmatched.',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, Innovate Inc',
    image: '/images/testimonials/testimonial-transformations-1-1766097353586.jpg',
    quote: 'The quality of service we received exceeded all our expectations. Highly recommend to anyone looking for excellence.',
  },
  {
    name: 'Emily Davis',
    role: 'Director, Growth Labs',
    image: '/images/testimonials/testimonial-transformations-2-1766097354055.jpg',
    quote: 'Professional, reliable, and results-driven. Velocity Fitness delivered exactly what we needed and more.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}