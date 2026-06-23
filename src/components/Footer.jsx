import { Mail, Phone, MapPin } from 'lucide-react';
import '../styles/Footer.css';

const WHATSAPP_LINK = 'https://wa.me/923077433743';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'YouTube', href: 'https://www.youtube.com/@NoviousGlobal', abbr: 'YT' },
    { label: 'Instagram', href: 'https://www.instagram.com/chinasourcing_?igsh=OHN0NXdpNGxpcTBq&utm_source=qr', abbr: 'IG' },
    { label: 'Facebook', href: 'https://www.facebook.com/noviousglobalsourcingchina', abbr: 'FB' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@novious.global.china', abbr: 'TT' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/novious-global-sourcing-from-china/', abbr: 'LI' }
  ];

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
              Your trusted sourcing partner in China. We connect international buyers with verified manufacturers for seamless, end-to-end sourcing.
            </p>
            <div className="social-links">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="social-icon"
                  title={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  {s.abbr}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                className="social-icon whatsapp-icon"
                title="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                WA
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => onNavigate('home')}>Home</button></li>
              <li><button onClick={() => onNavigate('products')}>Products</button></li>
              <li><button onClick={() => onNavigate('services')}>Services</button></li>
              <li><button onClick={() => onNavigate('project-base')}>Project Services</button></li>
              <li><button onClick={() => onNavigate('business-strategy')}>Business Strategy</button></li>
              <li><button onClick={() => onNavigate('about')}>About Us</button></li>
              {/* <li><button onClick={() => onNavigate('blog')}>Blog</button></li> */}
              <li><button onClick={() => onNavigate('contact')}>Contact</button></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><button onClick={() => onNavigate('services')}>Product Sourcing</button></li>
              <li><button onClick={() => onNavigate('services')}>Quality Control</button></li>
              <li><button onClick={() => onNavigate('services')}>Global Shipping</button></li>
              <li><button onClick={() => onNavigate('services')}>FBA Solutions</button></li>
              <li><button onClick={() => onNavigate('services')}>Amazon FBA</button></li>
              <li><button onClick={() => onNavigate('project-base')}>Project-Based Solutions</button></li>
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
                  <p className="contact-value">Lotus Tower, No. 150 Tianzhou Road, Shanghai 200032, China</p>
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
              <div className="contact-item">
                <Phone size={18} />
                <div>
                  <p className="contact-label">WhatsApp</p>
                  <p className="contact-value"><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">+923077433743</a></p>
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
