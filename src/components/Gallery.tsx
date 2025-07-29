import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    {
      url: 'https://images.pexels.com/photos/3889856/pexels-photo-3889856.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop',
      title: 'Chefchaouen',
      subtitle: 'La perle bleue'
    },
    {
      url: 'https://images.pexels.com/photos/3889847/pexels-photo-3889847.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop',
      title: 'Marrakech',
      subtitle: 'Ville impériale'
    },
    {
      url: 'https://images.pexels.com/photos/17829451/pexels-photo-17829451/free-photo-of-essaouira-morocco.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop',
      title: 'Essaouira',
      subtitle: 'Cité des vents'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="py-32 lg:py-40 bg-ivory relative overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-bronze mb-8 tracking-wider">
          Destinations
        </h2>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-bronze to-transparent mx-auto"></div>
      </div>

      <div className="max-w-8xl mx-auto px-8 lg:px-12">
        <div className="relative">
          {/* Main Gallery */}
          <div className="relative h-[70vh] rounded-3xl overflow-hidden group">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Image Info */}
                <div className="absolute bottom-16 left-16 text-white">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-4 tracking-wide">
                    {image.title}
                  </h3>
                  <p className="text-xl md:text-2xl font-serif font-light opacity-90 tracking-wide">
                    {image.subtitle}
                  </p>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100 hover:scale-110"
            >
              <ChevronLeft size={24} className="mx-auto" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100 hover:scale-110"
            >
              <ChevronRight size={24} className="mx-auto" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-12 space-x-6">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`relative w-24 h-16 rounded-lg overflow-hidden transition-all duration-500 ${
                  index === currentIndex 
                    ? 'ring-4 ring-bronze scale-110' 
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-bronze/20"></div>
                )}
              </button>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? 'w-12 bg-bronze' 
                    : 'w-3 bg-bronze/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;