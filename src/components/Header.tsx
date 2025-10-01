import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
              Gym Referral Booster
            </h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={scrollToTop}
              className={`font-medium ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-primary-500 transition-colors`}
            >
              Home
            </button>
            <a 
              href="#pricing" 
              className={`font-medium ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-primary-500 transition-colors`}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className={`font-medium ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-primary-500 transition-colors`}
            >
              FAQ
            </a>
          </div>
          
          <div className="hidden md:block">
            <a 
              href="https://whop.com/gym-referral-booster/gym-referral-booster/?utm_source=store_page"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 right-0 p-4">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={scrollToTop}
              className="text-gray-700 font-medium py-2 hover:text-primary-500 text-left"
            >
              Home
            </button>
            <a 
              href="#pricing" 
              className="text-gray-700 font-medium py-2 hover:text-primary-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 font-medium py-2 hover:text-primary-500"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="https://whop.com/gym-referral-booster/gym-referral-booster/?utm_source=store_page"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-6 rounded-full text-center"
              onClick={() => setIsMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
