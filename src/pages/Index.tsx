import React, { useState } from 'react';
import { Calendar, MapPin, Users, Mail, Phone, MessageSquare, ArrowRight, CheckCircle, Star, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const events = [
    {
      id: 1,
      name: "She Codes – Women in Tech Meetup",
      date: "July 15, 2025",
      venue: "Seminar Hall",
      description: "Join us for an inspiring meetup celebrating women in technology. Network with fellow female developers, share experiences, and learn from industry leaders.",
      rsvpLink: "https://forms.gle/aM7LkwMpkJ5sGXK1A"
    },
    {
      id: 2,
      name: "GDG 101 – What, Why & How",
      date: "August 20, 2025",
      venue: "Auditorium",
      description: "Get introduced to Google Developer Groups and learn about the community, opportunities, and how to get involved in the tech ecosystem.",
      rsvpLink: "https://forms.gle/aM7LkwMpkJ5sGXK1A"
    },
    {
      id: 3,
      name: "Gemini Jam – Build with AI",
      date: "September 18, 2025",
      venue: "Lab 3",
      description: "Hands-on workshop to build exciting AI applications using Google's Gemini AI. Bring your creativity and let's code together!",
      rsvpLink: "https://forms.gle/aM7LkwMpkJ5sGXK1A"
    },
    {
      id: 4,
      name: "Firebase in 1 Hour",
      date: "October 12, 2025",
      venue: "CSE Lab 1",
      description: "Crash course on Firebase - learn to build and deploy web applications with real-time database, authentication, and hosting in just one hour.",
      rsvpLink: "https://forms.gle/aM7LkwMpkJ5sGXK1A"
    },
    {
      id: 5,
      name: "Hack with Heart – Mini Ideathon",
      date: "November 9, 2025",
      venue: "Innovation Hub",
      description: "A mini ideathon focused on solving real-world problems with technology. Bring your passion for social impact and innovative ideas.",
      rsvpLink: "https://forms.gle/aM7LkwMpkJ5sGXK1A"
    }
  ];

  const testimonials = [
    {
      id: 1,
      text: "Finally, I don't miss events anymore!",
      author: "Sarah M."
    },
    {
      id: 2,
      text: "Found my first hackathon through Evently.",
      author: "Alex K."
    },
    {
      id: 3,
      text: "Super clean design and easy to use.",
      author: "Priya R."
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit your feedback.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Feedback submitted!",
      description: "Thank you for your feedback. We'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-blue-600">
                Evently
              </h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#events" className="text-gray-600 hover:text-blue-600">Events</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* About Section */}
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

      {/* Upcoming Events Section */}
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

      {/* Testimonials Section */}
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

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Involved?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't let amazing opportunities pass you by. RSVP to upcoming events and stay connected with your campus community.
          </p>
          <Button 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium"
            onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View All Events
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">Get in touch with us for any inquiries or support!</p>
            </div>
            
            <div className="flex justify-center">
              {/* Contact Info */}
              <div className="space-y-6 max-w-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Get in Touch</h3>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">arorasargam23@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 123456789</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instagram</h4>
                    <p className="text-gray-600">@gdg.scriet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Evently</h3>
          </div>
          <p className="text-gray-400 mb-4">Never miss a college event again.</p>
          <p className="text-gray-500 text-sm">
            © 2025 Evently. Made with ❤️ for college students.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
