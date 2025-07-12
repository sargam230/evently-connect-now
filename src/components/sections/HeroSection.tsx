
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
          Evently
        </h1>
        <p className="text-2xl text-gray-700 mb-4 font-medium">
          Never miss a college event again.
        </p>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          One place for all tech, cultural, and fun events on campus.
        </p>
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
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
