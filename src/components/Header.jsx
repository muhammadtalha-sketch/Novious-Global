import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/Header.css';

const WHATSAPP_LINK = 'https://wa.me/923077433743?text=Hi%2C%20I%20would%20like%20to%20get%20a%20quote.';

export default function Header({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Products', page: 'products' },
    { label: 'Services', page: 'services' },
    { label: 'Project Services', page: 'project-base' },
    { label: 'Business Strategy', page: 'business-strategy' },
    { label: 'About', page: 'about' },
    // { label: 'Blog', page: 'blog' }, // temporarily hidden — re-enable when blog is ready
    { label: 'Contact', page: 'contact' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo" onClick={() => handleNavClick('home')}>
          <img
            src="/images/logo.png"
            alt="Novious Global Logo"
            className="header-logo-image"
            onError={(e) => {
              console.error('Logo failed to load from:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav">
          {navLinks.map((link) => (
            <button
              key={link.page}
              className={`nav-link ${currentPage === link.page ? 'active' : ''}`}
              onClick={() => handleNavClick(link.page)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Section */}
        <div className="header-actions">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            Get Quote
          </a>
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <button
              key={link.page}
              className="mobile-nav-link"
              onClick={() => handleNavClick(link.page)}
            >
              {link.label}
            </button>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-cta-btn"
          >
            Get Quote
          </a>
        </nav>
      )}
    </header>
  );
}
