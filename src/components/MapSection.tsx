import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="py-32 lg:py-40 bg-gradient-to-b from-champagne to-pearl relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-16 w-96 h-96 bg-bronze rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-warm-gold rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-8xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Map Placeholder */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-bronze/10 to-warm-gold/10 rounded-3xl p-16 h-96 flex items-center justify-center backdrop-blur-sm border border-bronze/20">
              <div className="text-center text-bronze">
                <MapPin size={64} className="mx-auto mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-3xl font-display font-light mb-4 tracking-wide">Sale</h3>
                <p className="font-serif font-light text-lg opacity-80">Cœur du Maroc</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-soft-gold/30 rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-bronze/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-bronze mb-8 tracking-wider leading-tight">
                Contact
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-bronze to-warm-gold mb-12"></div>
            </div>
            
            <div className="space-y-10">
              {[
                { icon: MapPin, title: 'Adresse', content: 'Sala-Al-Jadida, Sale\nMaroc' },
                { icon: Phone, title: 'Téléphone', content: '+212 5 24 XX XX XX' },
                { icon: Mail, title: 'Email', content: 'contact@mystigtravel.ma' },
                { icon: Clock, title: 'Horaires', content: '9h - 18h\nLun - Sam' }
              ].map((item, index) => (
                <div 
                  key={item.title}
                  className="flex items-start space-x-6 group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-12 h-12 bg-bronze/10 rounded-full flex items-center justify-center group-hover:bg-bronze/20 transition-colors duration-500">
                    <item.icon className="text-bronze group-hover:text-warm-gold transition-colors duration-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-bronze mb-2 tracking-wide uppercase text-sm">
                      {item.title}
                    </h4>
                    <p className="text-bronze/80 font-serif font-light leading-relaxed whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="group mt-16 px-12 py-4 bg-bronze text-white hover:bg-warm-gold transition-all duration-700 font-sans font-light tracking-widest text-sm uppercase rounded-full">
              <span className="relative z-10">Nous contacter</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;