import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import Gallery from './components/Gallery';
import ImageTextSection from './components/ImageTextSection';
import ExperiencesGrid from './components/ExperiencesGrid';
import MapSection from './components/MapSection';
import DestinationsSection from './components/DestinationsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ivory font-sans">
      <Navbar />
      <Hero />
      <IntroSection />
      <Gallery />
      <ImageTextSection />
      <ExperiencesGrid />
      <MapSection />
      <DestinationsSection />
      <Footer />
    </div>
  );
}

export default App;