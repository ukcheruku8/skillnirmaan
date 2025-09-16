import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">ShikshaFlow</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering Indian educators to build successful online education businesses with cutting-edge technology and unwavering support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">System Status</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Video Tutorials</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Community Forum</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@shikshaflow.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9876 543 210</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>WeWork Galaxy, 43, Residency Rd, Shanthala Nagar, Bangalore 560025</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Business Hours</h4>
              <p className="text-sm text-gray-400">
                Monday - Friday: 9:00 AM - 7:00 PM IST<br />
                Saturday: 10:00 AM - 5:00 PM IST
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ShikshaFlow Technologies Pvt Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-orange-500 transition-colors">GST Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;