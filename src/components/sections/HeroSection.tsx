
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
          Evently
        </h1>
        <p className="text-2xl text-foreground mb-4 font-medium">
          Never miss a college event again.
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          One place for all tech, cultural, and fun events on campus.
        </p>
        <Button 
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
          onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore Events
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
