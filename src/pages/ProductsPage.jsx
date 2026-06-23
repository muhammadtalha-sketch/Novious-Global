import { useState } from 'react';
import { Filter, Grid, List, Search, MessageCircle } from 'lucide-react';
import '../styles/ProductsPage.css';
import PRODUCTS from '../data/products';

const WHATSAPP_LINK = 'https://wa.me/923077433743?text=Hi%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20product.';

export default function ProductsPage({ onSelectProduct }) {
  const [view, setView] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All Products',
    ...new Set(PRODUCTS.map(p => p.category))
  ];

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-page">
      {/* Header */}
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Browse our extensive catalog of verified products from trusted Chinese manufacturers. Contact us to request a quote.</p>
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
                  onClick={() => setSelectedCategory(cat)}
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
        <main className="products-main">
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
                      href={`https://wa.me/923077433743?text=${encodeURIComponent(`Hi, I am interested in ${product.name}. Please provide a quote.`)}`}
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
