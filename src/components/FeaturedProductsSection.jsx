import { Star } from 'lucide-react';
import '../styles/FeaturedProductsSection.css';
import PRODUCTS from '../data/products';

export default function FeaturedProductsSection({ onNavigate }) {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <section className="featured-products">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <p className="section-subtitle">
          Explore our carefully curated selection from top verified suppliers in China
        </p>

        <div className="products-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
                {product.badge && <span className="product-badge">{product.badge}</span>}
              </div>

              <div className="product-info">
                <p className="product-category">{product.category}</p>
                <h3 className="product-name">{product.name}</h3>

                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating) ? 'filled' : 'empty'}
                      />
                    ))}
                  </div>
                  <span className="rating-value">{product.rating}</span>
                  <span className="reviews-count">({product.reviews} reviews)</span>
                </div>

                <div className="product-footer">
                  <span className="moq-info">MOQ: {product.moq}</span>
                  <a
                    href={`https://wa.me/923077433743?text=${encodeURIComponent(`Hi, I am interested in ${product.name}. Please provide a quote.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-quote-btn"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-btn-container">
          <button className="btn btn-secondary btn-view-all" onClick={() => onNavigate('products')}>
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
