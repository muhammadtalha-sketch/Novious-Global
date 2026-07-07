import { ArrowRight } from "lucide-react";
import "../styles/HeroSection.css";

export default function HeroSection({ onNavigate }) {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-tagline">Product-Based Services</p>
          <h1 className="hero-title">
            Your Trusted Sourcing Partner in China
          </h1>
          <p className="hero-subtitle">
            We simplify global sourcing. Find reliable suppliers, ensure perfect
            quality, and deliver to your doorstep with complete peace of mind.
          </p>
          <p className="hero-intro">
            Novious Global is based in Shanghai, China. We provide end-to-end
            sourcing solutions for global buyers and connect them with verified
            Chinese manufacturers. Our diverse team of international and Chinese
            experts — with over 10 years of experience — brings strong
            communication skills, local market knowledge, and cross-cultural
            business understanding to ensure smooth and reliable sourcing. We
            offer one-stop sourcing solutions for startups, e-commerce sellers,
            retail chains, wholesalers, and B2B companies. With a strong and
            trusted network of manufacturers across China, we simplify the
            entire sourcing process, from product discovery and supplier
            selection to quality control and final delivery, providing complete
            peace of mind.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => onNavigate("contact")}
            >
              Get Started Today
              <ArrowRight size={18} />
            </button>
            <button
              className="btn btn-secondary btn-schedule"
              onClick={() => onNavigate("contact")}
            >
              Schedule Consultation
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">
            <div className="graphic-item item-1">
              <img
                src="/images/Quality-Assurance.jpg"
                alt="Quality Assurance"
              />
            </div>
            <div className="graphic-item item-2">
              <img src="/images/Global-Shipping.jpg" alt="Global Shipping" />
            </div>
            <div className="graphic-item item-3">
              <img src="/images/Supplier-Network.jpg" alt="Supplier Network" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="hero-badges">
        <div className="badge">
          <span className="badge-icon">✓</span>
          <span>150+ Verified Suppliers</span>
        </div>
        <div className="badge">
          <span className="badge-icon">⚡</span>
          <span>10+ Years of Experience</span>
        </div>
        <div className="badge">
          <span className="badge-icon">🌍</span>
          <span>50+ Local Partners in China</span>
        </div>
      </div>
    </section>
  );
}
