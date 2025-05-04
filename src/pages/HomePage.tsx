import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PortfolioSection from '../components/home/PortfolioSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutSection from '../components/home/AboutSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactCTA from '../components/home/ContactCTA';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
};

export default HomePage;