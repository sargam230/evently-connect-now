
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">About Evently</h2>
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
            <p className="text-lg text-muted-foreground">
              Evently helps students stay updated with college events. No more last-minute posters or missed announcements — just clear info and easy RSVPs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
