import '../styles/HomePage.css';
import HeroSection from '../components/HeroSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import ValuePropsSection from '../components/ValuePropsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import ServicesSection from '../components/ServicesSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import RealWorkSection from '../components/RealWorkSection';
import FeaturedProductsSection from '../components/FeaturedProductsSection';
import PartnersSection from '../components/PartnersSection';
import CTASection from '../components/CTASection';

export default function HomePage({ onNavigate }) {
  return (
    <div className="home-page">
      <HeroSection onNavigate={onNavigate} />
      <WhatWeDoSection />
      <ValuePropsSection />
      <HowItWorksSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <RealWorkSection />
      <FeaturedProductsSection onNavigate={onNavigate} />
      <PartnersSection />
      <CTASection onNavigate={onNavigate} />
    </div>
  );
}
