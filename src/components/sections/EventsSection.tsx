
import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { events } from '@/data/events';

const EventsSection = () => {
  return (
    <section id="events" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover amazing tech events happening on campus. Don't miss out on the learning opportunities!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event) => (
            <Card key={event.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  {event.name}
                </CardTitle>
                <CardDescription className="flex items-center space-x-4 text-sm">
                  <span className="flex items-center text-blue-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    {event.date}
                  </span>
                  <span className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {event.venue}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {event.description}
                </p>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.open(event.rsvpLink, '_blank')}
                >
                  <Users className="w-4 h-4 mr-2" />
                  RSVP Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
