import React, { useEffect, useRef, useState } from 'react';

const IntroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 bg-gradient-to-b from-cream to-pearl relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-bronze rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-warm-gold rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-8 lg:px-12 text-center relative z-10">
        <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Quote Mark */}
          <div className="mb-12">
            <span className="text-8xl font-display text-bronze/20 leading-none">"</span>
          </div>

          {/* Main Text */}
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-bronze leading-relaxed mb-16 tracking-wide">
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Au cœur des dunes de Merzouga,
            </span>
            <br />
            <span className="inline-block animate-fade-in-up text-warm-gold" style={{ animationDelay: '0.6s' }}>
              sous les étoiles du Sahara,
            </span>
            <br />
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              nous vous invitons à découvrir
            </span>
            <br />
            <span className="inline-block animate-fade-in-up font-medium" style={{ animationDelay: '1.2s' }}>
              l'âme authentique du Maroc.
            </span>
          </p>

          {/* Decorative Elements */}
          <div className="flex items-center justify-center space-x-8 mb-16 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-bronze to-transparent"></div>
            <div className="w-3 h-3 bg-bronze rounded-full animate-glow"></div>
            <div className="w-24 h-px bg-gradient-to-l from-transparent via-bronze to-transparent"></div>
          </div>

          {/* Secondary Text */}
          <p className="text-lg md:text-xl font-sans font-light text-bronze/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
            Chaque voyage est une odyssée sensorielle, tissée de rencontres humaines, 
            de paysages sublimes et de traditions séculaires.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;