
import React from 'react';
import { Calendar } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-primary">
              Evently
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-6">
              <a href="#events" className="text-muted-foreground hover:text-primary transition-colors">Events</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
