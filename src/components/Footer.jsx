import { Mail, Phone, MapPin, MessageCircle, Share2, Heart } from 'lucide-react';
import '../styles/Footer.css';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <img
                src="/images/logo.png"
                alt="Novious Global Logo"
                className="footer-logo-image"
              />
            </div>
            <p className="footer-description">
              Your trusted sourcing partner from China. We connect international buyers with reliable manufacturers.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" title="Share">
                <Share2 size={20} />
              </a>
              <a href="#" className="social-icon" title="Follow">
                <Heart size={20} />
              </a>
              <a href="#" className="social-icon" title="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => onNavigate('home')}>Home</button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')}>Products</button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')}>About Us</button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')}>Contact</button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Product Sourcing</a></li>
              <li><a href="#services">Quality Control</a></li>
              <li><a href="#services">Global Shipping</a></li>
              <li><a href="#services">FBA Solutions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-items">
              <div className="contact-item">
                <MapPin size={18} />
                <div>
                  <p className="contact-label">Head Office</p>
                  <p className="contact-value">Lotus Tower, No. 159 Tianzhou Road, Shanghai 200032, China</p>
                </div>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value"><a href="mailto:info@noviousglobal.com">info@noviousglobal.com</a></p>
                </div>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <div>
                  <p className="contact-label">Phone</p>
                  <p className="contact-value"><a href="tel:+8615618483542">+86 15618483542</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear} Novious Global Co. Ltd. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <span>•</span>
              <a href="#terms">Terms of Service</a>
              <span>•</span>
              <a href="#compliance">Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
