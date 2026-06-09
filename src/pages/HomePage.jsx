import { ArrowRight, CheckCircle, TrendingUp, Zap, Award, Globe } from 'lucide-react';
import '../styles/HomePage.css';
import HeroSection from '../components/HeroSection';
import ValuePropsSection from '../components/ValuePropsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import FeaturedProductsSection from '../components/FeaturedProductsSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

export default function HomePage({ onNavigate }) {
  return (
    <div className="home-page">
      <HeroSection onNavigate={onNavigate} />
      <ValuePropsSection />
      <HowItWorksSection />
      <FeaturedProductsSection onNavigate={onNavigate} />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection onNavigate={onNavigate} />
    </div>
  );
}
