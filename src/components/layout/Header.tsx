
import React from 'react';
import { Calendar } from 'lucide-react';

const Header = () => {
  return (
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
  );
};

export default Header;
