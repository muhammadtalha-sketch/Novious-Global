import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import '../styles/Header.css';

export default function Header({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

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
          <style>{`
            .header-logo-image {
              max-width: 200px;
              height: 60px;
              object-fit: contain;
            }
          `}</style>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav">
          <button
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>
          <button
            className={`nav-link ${currentPage === 'products' ? 'active' : ''}`}
            onClick={() => handleNavClick('products')}
          >
            Products
          </button>
          <button
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
          <button
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>
        </nav>

        {/* Right Section */}
        <div className="header-actions">
          <button className="search-btn" onClick={() => setSearchOpen(!searchOpen)}>
            <Search size={20} />
          </button>
          <button className="cta-btn">Get Quote</button>
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
          />
          <Search size={20} className="search-icon" />
        </div>
      )}

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="mobile-nav">
          <button
            className="mobile-nav-link"
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>
          <button
            className="mobile-nav-link"
            onClick={() => handleNavClick('products')}
          >
            Products
          </button>
          <button
            className="mobile-nav-link"
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
          <button
            className="mobile-nav-link"
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>
          <button className="mobile-cta-btn">Get Quote</button>
        </nav>
      )}
    </header>
  );
}
