import Link from 'next/link';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfect for getting started',
    features: ['Core features', 'Email support', '5 projects', 'Basic analytics'],
    popular: false,
  },
  {
    name: 'Professional',
    price: '79',
    description: 'Best for growing businesses',
    features: ['All Starter features', 'Priority support', 'Unlimited projects', 'Advanced analytics', 'Custom integrations'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '199',
    description: 'For large organizations',
    features: ['All Pro features', 'Dedicated support', 'Custom solutions', 'SLA guarantee', 'On-boarding'],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((tier, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg border-2 ${
                tier.popular ? 'border-primary-500 relative' : 'border-transparent'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-500 text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
              <p className="text-gray-600 mb-6">{tier.description}</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">${tier.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className={`block w-full py-3 text-center rounded-lg font-semibold transition-colors ${
                  tier.popular
                    ? 'bg-primary-500 text-white hover:bg-primary-600'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}