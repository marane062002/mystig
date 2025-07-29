import React, { useEffect, useRef, useState } from 'react';

const ExperiencesGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      image: 'https://images.pexels.com/photos/3889851/pexels-photo-3889851.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Sahara',
      description: 'Nuits étoilées'
    },
    {
      image: 'https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Gastronomie',
      description: 'Saveurs authentiques'
    },
    {
      image: 'https://images.pexels.com/photos/7031603/pexels-photo-7031603.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Bien-être',
      description: 'Rituels traditionnels'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
    <section id="experiences" ref={sectionRef} className="py-32 lg:py-40 bg-ivory relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-80 h-80 bg-warm-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-bronze rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-8xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-bronze mb-8 tracking-wider">
            Expériences
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-bronze to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-3xl mb-8">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-bronze/60 via-transparent to-transparent transition-opacity duration-700 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                {/* Hover Content */}
                <div className={`absolute bottom-8 left-8 text-white transition-all duration-700 ${
                  hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <h4 className="text-2xl font-display font-light mb-2">{experience.title}</h4>
                  <p className="font-serif opacity-90">{experience.description}</p>
                </div>

                {/* Floating Element */}
                <div className={`absolute top-6 right-6 w-3 h-3 bg-soft-gold rounded-full transition-all duration-700 ${
                  hoveredIndex === index ? 'scale-150 animate-glow' : 'scale-100'
                }`}></div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-display font-light text-bronze mb-3 group-hover:text-warm-gold transition-colors duration-500 tracking-wide">
                  {experience.title}
                </h3>
                <p className="text-bronze/70 font-serif font-light tracking-wide">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesGrid;