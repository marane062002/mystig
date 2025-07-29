import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-[10s] ease-out"
        style={{
          backgroundImage: 'url(https://marrakechtourcompany.com/wp-content/uploads/2022/08/Best-Moroccan-Travel-Agency-1.png?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-bronze/10 to-warm-gold/10"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-soft-gold rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-warm-gold rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-bronze rounded-full animate-float opacity-40" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-8 max-w-6xl mx-auto">
        <div className={`transition-all duration-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-light mb-8 tracking-wider leading-none">
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.5s' }}>Mystig</span>
            <span className="inline-block animate-fade-in-up text-soft-gold" style={{ animationDelay: '0.8s' }}>Travel</span>
          </h1>
          
          {/* Subtitle */}
          <div className="relative mb-12">
            <p className="text-xl md:text-2xl lg:text-3xl font-serif font-light tracking-wide opacity-90 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              Voyages d'exception à travers le Maroc
            </p>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-soft-gold to-transparent animate-shimmer"></div>
          </div>

          {/* Decorative Line */}
          <div className="flex items-center justify-center space-x-4 mb-16 animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-soft-gold"></div>
            <div className="w-2 h-2 bg-soft-gold rounded-full animate-glow"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-soft-gold"></div>
          </div>

          {/* Call to Action */}
          <div className="animate-fade-in-up" style={{ animationDelay: '2s' }}>
            <button className="group relative px-12 py-4 bg-transparent border-2 border-soft-gold text-soft-gold hover:bg-soft-gold hover:text-bronze transition-all duration-700 font-sans font-light tracking-widest text-sm uppercase overflow-hidden">
              <span className="relative z-10">Découvrir</span>
              <div className="absolute inset-0 bg-soft-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-white/80">
          <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} className="animate-pulse" />
        </div>
      </div>

      {/* Side Navigation Dots */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4">
        {[0, 1, 2, 3].map((dot, index) => (
          <div
            key={dot}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === 0 ? 'bg-soft-gold scale-125' : 'bg-white/40 hover:bg-white/60'
            }`}
            style={{ animationDelay: `${index * 200}ms` }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;