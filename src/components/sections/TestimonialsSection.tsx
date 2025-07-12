
import React from 'react';
import { Quote } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from '@/data/events';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">What Students Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from fellow students who've discovered amazing events through Evently.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-102 group cursor-pointer border-border"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="text-muted-foreground mb-3 italic group-hover:text-foreground transition-colors">
                      {testimonial.text}
                    </p>
                    <p className="text-sm font-medium text-foreground">
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
