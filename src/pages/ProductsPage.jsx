import { useState, useRef } from 'react';
import { Filter, Grid, List, Search, MessageCircle, ShieldCheck, Layers, ScanSearch, BadgeDollarSign, Truck, Headset } from 'lucide-react';
import '../styles/ProductsPage.css';
import PRODUCTS from '../data/products';

const WHATSAPP_LINK = 'https://wa.me/8615618483542?text=Hi%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20product.';

export default function ProductsPage({ onSelectProduct }) {
  const [view, setView] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchTerm, setSearchTerm] = useState('');
  const productsMainRef = useRef(null);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    // On mobile the category list stacks ABOVE the products, so tapping a
    // category would otherwise leave results below the fold. Jump to the
    // products area so they appear immediately without manual scrolling.
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      requestAnimationFrame(() => {
        productsMainRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  };

  const categories = [
    'All Products',
    ...new Set(PRODUCTS.map(p => p.category))
  ];

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const trustPoints = [
    { icon: ShieldCheck, label: 'Verified Manufacturers' },
    { icon: Layers, label: 'OEM & ODM Solutions' },
    { icon: ScanSearch, label: 'Quality Inspection' },
    { icon: BadgeDollarSign, label: 'Competitive Pricing' },
    { icon: Truck, label: 'Worldwide Shipping' },
    { icon: Headset, label: 'Dedicated Support' }
  ];

  return (
    <div className="products-page">
      {/* Header */}
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Browse our extensive catalog of verified products from trusted Chinese manufacturers. Contact us to request a quote.</p>
        <div className="products-badges">
          <span className="products-feature-badge">Customizable</span>
          <span className="products-feature-badge">OEM/ODM Available</span>
          <span className="products-feature-badge">1 by 1 Quality Inspection</span>
        </div>
      </div>

      {/* MOQ Notice */}
      <div className="moq-notice">
        <p>We source products for any order size. However, some of the products require a Minimum Order Quantity (MOQ). Contact us to confirm details for your specific product.</p>
      </div>

      {/* Why Buy From Us Trust Panel */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', padding: 'var(--spacing-lg)' }}>
        <div className="why-buy-panel">
          <div className="why-buy-grid">
            {trustPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <div key={index} className="why-buy-item">
                  <div className="why-buy-icon">
                    <IconComponent size={22} />
                  </div>
                  <span>{point.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Container with Breadcrumb */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', paddingLeft: 'var(--spacing-lg)', paddingRight: 'var(--spacing-lg)', overflow: 'hidden' }}>
        <nav className="breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>Products</span>
          {selectedCategory && selectedCategory !== 'All Products' && (
            <>
              <span>/</span>
              <span>{selectedCategory}</span>
            </>
          )}
        </nav>
      </div>

      <div className="products-container">
        {/* Sidebar */}
        <aside className="products-sidebar">
          <div className="filter-section">
            <h3><Filter size={20} /> Filters</h3>
            <div className="search-box">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="filter-section">
            <h3>Categories</h3>
            <div className="category-list">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => handleCategorySelect(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Request Quote CTA */}
          <div className="sidebar-cta">
            <p>Looking for a specific product?</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-wa-btn"
            >
              <MessageCircle size={16} />
              Request a Quote
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="products-main" ref={productsMainRef}>
          {/* View Controls */}
          <div className="view-controls">
            <p className="result-count">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
            <div className="view-buttons">
              <button
                className={`view-btn ${view === 'grid' ? 'active' : ''}`}
                onClick={() => setView('grid')}
              >
                <Grid size={18} />
              </button>
              <button
                className={`view-btn ${view === 'list' ? 'active' : ''}`}
                onClick={() => setView('list')}
              >
                <List size={18} />
              </button>
            </div>
          </div>

          {/* Products Grid/List */}
          <div className={`products-${view}`}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div key={product.id} className={`product-item product-${view}`}>
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} />
                    {product.badge && <span className="product-badge-tag">{product.badge}</span>}
                    <div className="product-overlay">
                      <button className="view-details-btn" onClick={() => onSelectProduct(product)}>
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="product-details">
                    <div>
                      <h3>{product.name}</h3>
                      <p className="category">{product.category}</p>
                    </div>
                    <div className="product-meta">
                      <div>
                        <span className="moq-label">MOQ:</span>
                        <span className="moq">{product.moq}</span>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/8615618483542?text=${encodeURIComponent(`Hi, I am interested in ${product.name}. Please provide a quote.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="request-quote-btn"
                    >
                      Request Quote
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-products">
                <p>No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
