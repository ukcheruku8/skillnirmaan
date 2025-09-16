import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ShikshaFlow</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-orange-500 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-orange-500 transition-colors">How it Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition-colors">Reviews</a>
            <button className="text-gray-700 hover:text-orange-500 transition-colors">Login</button>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105">
              Start Free Trial
            </button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Features</a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-orange-500">How it Works</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Pricing</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Reviews</a>
              <button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500">Login</button>
              <button className="block w-full text-left px-3 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg mt-2">
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;