
import React from 'react';
import { Calendar } from 'lucide-react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
