import React from 'react';
import Hero from '../Homepage/Hero';
import About from '../Homepage/About';
import FeaturedProducts from '../Homepage/featured';
import LuxuryElevatorSection from '../Homepage/LuxuryElevatorSection';
import StairLiftsSection from '../Homepage/StairLiftsSection';
import HomeLiftsPricing from '../Homepage/HomeLiftsPricing';
import TestimonialsSection from '../Homepage/TestimonialsSection';
import VideoTestimonials from '../Homepage/VideoTestimonials ';
import EliteElevatorsFooter from '../Homepage/EliteElevatorsFooter ';

const Homepage = () => {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedProducts />
      <LuxuryElevatorSection />
      <StairLiftsSection />
      <HomeLiftsPricing />
      <TestimonialsSection />
      <VideoTestimonials />
    </div>
  )
}

export default Homepage
