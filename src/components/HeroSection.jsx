import { ArrowRight } from 'lucide-react';
import '../styles/HeroSection.css';

export default function HeroSection({ onNavigate }) {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Your Trusted Sourcing Partner From China
          </h1>
          <p className="hero-subtitle">
            We simplify global sourcing. Find reliable suppliers, ensure perfect quality, and deliver to your doorstep with complete peace of mind.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => onNavigate('products')}>
              Explore Products
              <ArrowRight size={18} />
            </button>
            <button className="btn btn-secondary">
              Schedule Consultation
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">
            <div className="graphic-item item-1">
              <img src="https://via.placeholder.com/300x300?text=Quality+Assured" alt="Quality Assurance" />
            </div>
            <div className="graphic-item item-2">
              <img src="https://via.placeholder.com/300x300?text=Global+Shipping" alt="Global Shipping" />
            </div>
            <div className="graphic-item item-3">
              <img src="https://via.placeholder.com/300x300?text=Supplier+Network" alt="Supplier Network" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="hero-badges">
        <div className="badge">
          <span className="badge-icon">✓</span>
          <span>500+ Suppliers Verified</span>
        </div>
        <div className="badge">
          <span className="badge-icon">⚡</span>
          <span>7-14 Days Average Delivery</span>
        </div>
        <div className="badge">
          <span className="badge-icon">🌍</span>
          <span>Global Reach, Local Expertise</span>
        </div>
      </div>
    </section>
  );
}
