import React, { useEffect, useRef, useState } from 'react';

const ImageTextSection = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    {
      image: 'https://images.pexels.com/photos/3889851/pexels-photo-3889851.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Désert Mystique',
      text: 'Une expérience transcendante au cœur du Sahara.'
    },
    {
      image: 'https://images.pexels.com/photos/7031603/pexels-photo-7031603.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Rituels Ancestraux',
      text: 'Traditions millénaires et bien-être authentique.'
    }
  ];

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...prev, index]);
          }
        },
        { threshold: 0.3 }
      );
    });

    sectionRefs.current.forEach((ref, index) => {
      if (ref && observers[index]) {
        observers[index]!.observe(ref);
      }
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && sectionRefs.current[index]) {
          observer.unobserve(sectionRefs.current[index]!);
        }
      });
    };
  }, []);

  return (
    <section className="py-32 lg:py-40 bg-gradient-to-b from-pearl to-champagne relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-10 w-72 h-72 bg-bronze rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-warm-gold rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-8xl mx-auto px-8 lg:px-12 relative z-10">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={el => sectionRefs.current[index] = el}
            className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32 lg:mb-48 ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}
          >
            {/* Image */}
            <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative group`}>
              <div className={`relative overflow-hidden rounded-3xl transition-all duration-1500 ${
                visibleSections.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}>
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-[60vh] object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bronze/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              
              {/* Floating Element */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-soft-gold/20 rounded-full animate-float"></div>
            </div>

            {/* Text */}
            <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} space-y-8`}>
              <div className={`transition-all duration-1500 delay-300 ${
                visibleSections.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-bronze mb-8 tracking-wide leading-tight">
                  {section.title}
                </h3>
                
                <div className="w-24 h-px bg-gradient-to-r from-bronze to-warm-gold mb-8"></div>
                
                <p className="text-xl md:text-2xl font-serif font-light text-bronze/80 leading-relaxed tracking-wide">
                  {section.text}
                </p>

                <button className="group mt-12 px-8 py-3 border border-bronze text-bronze hover:bg-bronze hover:text-white transition-all duration-700 font-sans font-light tracking-widest text-sm uppercase">
                  <span className="relative z-10">En savoir plus</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageTextSection;