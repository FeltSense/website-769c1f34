'use client';

import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      // Replace with your actual form endpoint
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
        }),
      });
      setStatus('success');
      e.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to get started? Contact us today and let's discuss how we can help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="text-gray-900">hello@velocityfitness.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <div className="text-gray-900">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="text-gray-900">San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
              <Send className="w-5 h-5" />
            </button>
            {status === 'success' && (
              <p className="text-green-600 text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center">Failed to send. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}