
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Evently</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-600">
              Evently helps students stay updated with college events. No more last-minute posters or missed announcements — just clear info and easy RSVPs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
