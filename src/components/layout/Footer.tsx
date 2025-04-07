
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">EduExcel</h3>
            <p className="mb-6 text-gray-300">
              Empowering students to achieve academic excellence through personalized coaching and innovative teaching methodologies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Courses & Plans</Link>
              </li>
              <li>
                <Link to="/results" className="text-gray-300 hover:text-white transition-colors">Results & Achievements</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses?category=engineering" className="text-gray-300 hover:text-white transition-colors">JEE Preparation</Link>
              </li>
              <li>
                <Link to="/courses?category=medical" className="text-gray-300 hover:text-white transition-colors">NEET Coaching</Link>
              </li>
              <li>
                <Link to="/courses?category=foundation" className="text-gray-300 hover:text-white transition-colors">Foundation Courses</Link>
              </li>
              <li>
                <Link to="/courses?category=online" className="text-gray-300 hover:text-white transition-colors">Online Programs</Link>
              </li>
              <li>
                <Link to="/courses?category=crash" className="text-gray-300 hover:text-white transition-colors">Crash Courses</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-brand-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">123 Education Street, Academic City, 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-brand-500 flex-shrink-0" size={18} />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                  +123 456 7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-brand-500 flex-shrink-0" size={18} />
                <a href="mailto:info@eduexcel.com" className="text-gray-300 hover:text-white transition-colors">
                  info@eduexcel.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2025 EduExcel. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
