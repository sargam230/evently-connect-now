
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
          <h2 className="text-3xl font-bold text-foreground mb-4">Upcoming Events</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover amazing tech events happening on campus. Don't miss out on the learning opportunities!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event) => (
            <Card 
              key={event.id} 
              className="bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 group cursor-pointer border-border"
            >
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                  {event.name}
                </CardTitle>
                <CardDescription className="flex items-center space-x-4 text-sm">
                  <span className="flex items-center text-primary">
                    <Calendar className="w-4 h-4 mr-1" />
                    {event.date}
                  </span>
                  <span className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    {event.venue}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {event.description}
                </p>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 hover:scale-105"
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
