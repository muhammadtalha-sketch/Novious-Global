import { useState, useRef, useMemo } from 'react';
import { Search, X, MessageCircle, ShieldCheck } from 'lucide-react';
import '../styles/MobileProductsPage.css';
import PRODUCTS from '../data/products';

const WHATSAPP_LINK = 'https://wa.me/8615618483542?text=Hi%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20product.';

export default function MobileProductsPage({ onSelectProduct }) {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchTerm, setSearchTerm] = useState('');
  const gridRef = useRef(null);

  const categories = useMemo(
    () => ['All Products', ...new Set(PRODUCTS.map(p => p.category))],
    []
  );

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return PRODUCTS.filter(product => {
      const matchesCategory =
        selectedCategory === 'All Products' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    // Chips are sticky, so products are already in view — nudge the grid to its
    // first item so a category switch always starts the user at product #1.
    requestAnimationFrame(() => {
      gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <div className="m-products">
      {/* Compact hero */}
      <header className="m-products-hero">
        <h1>Our Products</h1>
        <p>Verified products from trusted Chinese manufacturers. Tap a category to browse.</p>
        <div className="m-products-badges">
          <span>Customizable</span>
          <span>OEM/ODM</span>
          <span>Quality Inspected</span>
        </div>
        <div className="m-trust-strip">
          <ShieldCheck size={15} />
          <span>Verified manufacturers · Worldwide shipping</span>
        </div>
      </header>

      {/* Sticky control bar: search + horizontally scrollable category chips.
          Products render immediately below, so selecting a category never
          requires scrolling past a long category list. */}
      <div className="m-sticky-controls">
        <div className="m-search">
          <Search size={18} />
          <input
            type="text"
            inputMode="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              type="button"
              className="m-search-clear"
              aria-label="Clear search"
              onClick={() => setSearchTerm('')}
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div className="m-chips" role="tablist" aria-label="Product categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`m-chip ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => handleCategorySelect(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="m-results" ref={gridRef}>
        <p className="m-result-count">
          {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          {selectedCategory !== 'All Products' && <> in <strong>{selectedCategory}</strong></>}
        </p>

        {filteredProducts.length > 0 ? (
          <div className="m-grid">
            {filteredProducts.map((product) => (
              <article key={product.id} className="m-card">
                <button
                  type="button"
                  className="m-card-media"
                  onClick={() => onSelectProduct(product)}
                  aria-label={`View details for ${product.name}`}
                >
                  <img src={product.image} alt={product.name} loading="lazy" />
                  {product.badge && <span className="m-card-badge">{product.badge}</span>}
                </button>
                <div className="m-card-body">
                  <h3 onClick={() => onSelectProduct(product)}>{product.name}</h3>
                  <p className="m-card-cat">{product.category}</p>
                  <p className="m-card-moq">
                    <span>MOQ</span> {product.moq}
                  </p>
                  <a
                    href={`https://wa.me/8615618483542?text=${encodeURIComponent(`Hi, I am interested in ${product.name}. Please provide a quote.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-card-quote"
                  >
                    <MessageCircle size={15} /> Request Quote
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="m-empty">
            <p>No products found.</p>
            {(searchTerm || selectedCategory !== 'All Products') && (
              <button
                type="button"
                className="m-empty-reset"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All Products');
                }}
              >
                Clear filters
              </button>
            )}
          </div>
        )}
      </div>

      {/* Sticky quote CTA */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="m-floating-cta"
      >
        <MessageCircle size={18} /> Request a Quote
      </a>
    </div>
  );
}
