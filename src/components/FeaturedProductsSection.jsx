import { Star, ShoppingCart } from 'lucide-react';
import '../styles/FeaturedProductsSection.css';

import PRODUCTS from '../data/products';

export default function FeaturedProductsSection({ onNavigate }) {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <section className="featured-products">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <p className="section-subtitle">
          Explore our carefully curated selection from top suppliers
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
                  <span className="reviews-count">({product.reviews})</span>
                </div>

                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="product-btn">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-btn-container">
          <button className="btn btn-secondary" onClick={() => onNavigate('products')}>
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
