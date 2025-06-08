import React from 'react';
import Hero from '../Homepage/Hero';
import About from '../Homepage/About';
import FeaturedProducts from '../Homepage/featured';
import StairLiftsSection from '../Homepage/StairLiftsSection';
import HomeLiftsPricing from '../Homepage/HomeLiftsPricing';
import TestimonialsSection from '../Homepage/TestimonialsSection';
import VideoTestimonials from '../Homepage/VideoTestimonials ';
import ElevatorCardsSection from '../Homepage/ElevatorCardsSection';

const Homepage = () => {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedProducts />
      <ElevatorCardsSection />
      <StairLiftsSection />
      <HomeLiftsPricing />
      <TestimonialsSection />
      <VideoTestimonials />
    </div>
  )
}

export default Homepage
