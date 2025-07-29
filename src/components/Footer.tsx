import React from 'react';
import { Instagram, Facebook, Twitter, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Expériences', href: '#experiences' },
    { name: 'À Propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-b from-cream to-ivory py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-80 h-80 bg-bronze rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-warm-gold rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-8xl mx-auto px-8 lg:px-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-display font-light text-bronze tracking-wider">
              MystigTravel
            </h2>
            <p className="text-bronze/80 font-serif font-light leading-relaxed text-lg max-w-md">
              Votre partenaire de voyage de luxe au Maroc. Découvrez l'authenticité 
              et l'élégance à travers des expériences sur mesure.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="group w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center text-bronze hover:bg-bronze hover:text-white transition-all duration-500 hover:scale-110"
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans font-medium text-bronze mb-8 tracking-widest uppercase text-sm">Navigation</h3>
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center text-bronze/70 hover:text-bronze transition-colors duration-500 font-serif font-light text-lg"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                    <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-sans font-medium text-bronze mb-8 tracking-widest uppercase text-sm">Newsletter</h3>
            <p className="text-bronze/70 font-serif font-light mb-6 leading-relaxed">
              Recevez nos inspirations voyage et offres exclusives
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="w-full px-6 py-4 border border-bronze/20 rounded-full focus:outline-none focus:border-bronze bg-white/50 backdrop-blur-sm font-serif placeholder-bronze/50 transition-all duration-300"
              />
              <button className="group w-full px-6 py-4 bg-bronze text-white rounded-full hover:bg-warm-gold transition-all duration-500 font-sans font-light tracking-widest text-sm uppercase">
                <span className="flex items-center justify-center">
                  S'abonner
                  <Mail size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-bronze/30 to-transparent mb-12"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-bronze/60 font-serif font-light">
          <p className="mb-4 md:mb-0">© 2024 MystigTravel. Tous droits réservés.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-bronze transition-colors duration-300">
              Mentions légales
            </a>
            <a href="#" className="hover:text-bronze transition-colors duration-300">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;