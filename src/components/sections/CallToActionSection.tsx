
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-16 px-4 bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Get Involved?</h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Don't let amazing opportunities pass you by. RSVP to upcoming events and stay connected with your campus community.
        </p>
        <Button 
          className="bg-background text-foreground hover:bg-background/90 px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
          onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View All Events
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;
