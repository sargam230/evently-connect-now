
import React from 'react';
import { Quote } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from '@/data/events';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from fellow students who've discovered amazing events through Evently.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Quote className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 mb-3 italic">
                      {testimonial.text}
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      — {testimonial.author}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
