import { ArrowRight, Phone, Mail } from 'lucide-react';
import '../styles/CTASection.css';

export default function CTASection({ onNavigate }) {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2>Ready to Find Your Perfect Suppliers?</h2>
          <p>
            Let us handle the complexity of global sourcing. We'll find you reliable manufacturers, ensure quality, and deliver on time.
          </p>

          <div className="cta-buttons">
            <button
              className="btn btn-primary btn-large"
              onClick={() => onNavigate('contact')}
            >
              Get Started Today
              <ArrowRight size={20} />
            </button>
            <button className="btn btn-outline btn-large">
              <Phone size={20} />
              +86 15618483542
            </button>
          </div>
        </div>

        <div className="cta-features">
          <div className="feature">
            <div className="feature-icon">✓</div>
            <div>
              <h4>Free Consultation</h4>
              <p>No obligation</p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">⚡</div>
            <div>
              <h4>Fast Response</h4>
              <p>Within 24 hours</p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">🔒</div>
            <div>
              <h4>Confidential</h4>
              <p>Your data is safe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
