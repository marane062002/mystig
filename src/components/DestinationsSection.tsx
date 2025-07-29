import React, { useEffect, useRef, useState } from 'react';

const DestinationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const destinations = [
    {
      image: 'https://images.pexels.com/photos/3889851/pexels-photo-3889851.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Merzouga',
      description: 'Portes du Sahara'
    },
    {
      image: 'https://images.pexels.com/photos/3889854/pexels-photo-3889854.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Atlas',
      description: 'Montagnes majestueuses'
    },
    {
      image: 'https://images.pexels.com/photos/17829451/pexels-photo-17829451/free-photo-of-essaouira-morocco.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Essaouira',
      description: 'Côte atlantique'
    },
    {
      image: 'https://images.pexels.com/photos/3889856/pexels-photo-3889856.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Chefchaouen',
      description: 'Perle bleue'
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
    <section id="destinations" ref={sectionRef} className="py-32 lg:py-40 bg-gradient-to-b from-pearl to-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-72 h-72 bg-warm-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-bronze rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-8xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-bronze mb-8 tracking-wider">
            Destinations
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-bronze to-transparent mx-auto mb-8"></div>
          <p className="text-xl font-serif font-light text-bronze/80 max-w-2xl mx-auto">
            Découvrez les joyaux cachés du royaume chérifien
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-3xl mb-8">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-bronze/70 via-transparent to-transparent transition-opacity duration-700 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                {/* Hover Content */}
                <div className={`absolute bottom-6 left-6 text-white transition-all duration-700 ${
                  hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <h4 className="text-xl font-display font-light mb-1">{destination.title}</h4>
                  <p className="text-sm font-serif opacity-90">{destination.description}</p>
                </div>

                {/* Corner Element */}
                <div className={`absolute top-4 right-4 w-2 h-2 bg-soft-gold rounded-full transition-all duration-700 ${
                  hoveredIndex === index ? 'scale-150 animate-glow' : 'scale-100'
                }`}></div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-display font-light text-bronze mb-2 group-hover:text-warm-gold transition-colors duration-500 tracking-wide">
                  {destination.title}
                </h3>
                <p className="text-bronze/70 font-serif font-light text-sm tracking-wide">
                  {destination.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;