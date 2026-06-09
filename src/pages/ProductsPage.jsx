import { useState } from 'react';
import { Filter, Grid, List, Search } from 'lucide-react';
import '../styles/ProductsPage.css';
import PRODUCTS from '../data/products';

export default function ProductsPage({ onSelectProduct }) {
  const [view, setView] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All Products',
    ...new Set(PRODUCTS.map(p => p.category))
  ];

  const products = PRODUCTS;

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-page">
      {/* Header */}
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Browse our extensive catalog of verified products from trusted manufacturers</p>
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

          <div className="filter-section">
            <h3>Price Range</h3>
            <div className="price-range">
              <label>
                <input type="checkbox" /> Under $10
              </label>
              <label>
                <input type="checkbox" /> $10 - $25
              </label>
              <label>
                <input type="checkbox" /> $25 - $50
              </label>
              <label>
                <input type="checkbox" /> $50+
              </label>
            </div>
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
                    <div className="product-overlay">
                      <button className="view-details-btn" onClick={() => onSelectProduct(product)}>
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="product-details">
                    <h3>{product.name}</h3>
                    <p className="category">{product.category}</p>
                    <div className="product-meta">
                      <span className="price">{product.price}</span>
                      <span className="moq">MOQ: {product.moq}</span>
                    </div>
                    <button className="request-quote-btn">Request Quote</button>
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
