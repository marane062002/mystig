import React, { useState, useEffect } from 'react';
import { Menu, X, Search, MapPin, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Expériences', href: '#experiences' },
    { name: 'À Propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-champagne/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-8xl mx-auto px-8 lg:px-12">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-3xl lg:text-4xl font-display font-light text-bronze tracking-wider relative">
                <span className="relative z-10">MystigTravel</span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-warm-gold to-soft-gold transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-bronze hover:text-warm-gold transition-all duration-500 font-sans font-light tracking-wide text-sm uppercase group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-warm-gold to-soft-gold transition-all duration-500 group-hover:w-full"></span>
                </a>
              ))}
              
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-3 rounded-full bg-bronze/10 hover:bg-bronze/20 text-bronze hover:text-warm-gold transition-all duration-500 hover:scale-110"
              >
                <Search size={18} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-bronze p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-700 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-white/95 backdrop-blur-md border-t border-champagne/30 px-8 py-6 space-y-6">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-bronze hover:text-warm-gold transition-all duration-500 font-sans font-light tracking-wide text-sm uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsSearchOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-3 text-bronze hover:text-warm-gold transition-all duration-500"
              >
                <Search size={18} />
                <span className="font-sans font-light tracking-wide text-sm uppercase">Rechercher</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      <div className={`fixed inset-0 z-60 transition-all duration-700 ${
        isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsSearchOpen(false)}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-8">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center space-x-4 mb-6">
              <Search className="text-bronze" size={24} />
              <input
                type="text"
                placeholder="Rechercher des destinations, expériences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-xl font-serif text-bronze placeholder-bronze/60 focus:outline-none"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 hover:bg-bronze/10 rounded-full transition-colors duration-300"
              >
                <X className="text-bronze" size={20} />
              </button>
            </div>
            
            {/* Search Suggestions */}
            <div className="space-y-3">
              {['Marrakech', 'Sahara Desert', 'Chefchaouen', 'Fès Medina'].map((suggestion, index) => (
                <div
                  key={suggestion}
                  className="flex items-center space-x-3 p-3 hover:bg-champagne/50 rounded-lg cursor-pointer transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <MapPin className="text-bronze/60" size={16} />
                  <span className="font-sans text-bronze">{suggestion}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;