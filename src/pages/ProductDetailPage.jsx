import { ArrowLeft, Share2, Heart, Truck, Shield, CheckCircle } from 'lucide-react';
import '../styles/ProductDetailPage.css';

export default function ProductDetailPage({ product, onBack }) {
  if (!product) {
    return (
      <div className="product-detail-page">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={20} /> Back to Products
        </button>
        <div className="no-product">
          <p>Product not found</p>
        </div>
      </div>
    );
  }

  const productSpecs = [
    { label: 'Material', value: 'Premium Quality' },
    { label: 'Origin', value: 'Manufactured in China' },
    { label: 'MOQ', value: '50-200 units depending on product' },
    { label: 'Lead Time', value: '15-30 days' },
    { label: 'Customization', value: 'Available' },
    { label: 'Certification', value: 'ISO 9001, CE Certified' }
  ];

  const relatedProducts = [
    { id: 101, name: 'Similar Item 1', price: '$20-40', image: 'https://via.placeholder.com/200x200?text=Related1' },
    { id: 102, name: 'Similar Item 2', price: '$25-45', image: 'https://via.placeholder.com/200x200?text=Related2' },
    { id: 103, name: 'Similar Item 3', price: '$18-35', image: 'https://via.placeholder.com/200x200?text=Related3' },
  ];

  return (
    <div className="product-detail-page">
      {/* Back Button */}
      <button className="back-btn" onClick={onBack}>
        <ArrowLeft size={20} /> Back to Products
      </button>

      {/* Main Content */}
      <div className="product-detail-container">
        {/* Image Section */}
        <div className="detail-image-section">
          <img src={product.image} alt={product.name} className="detail-image" />
          <div className="image-actions">
            <button className="icon-btn" title="Share">
              <Share2 size={24} />
            </button>
            <button className="icon-btn" title="Add to Wishlist">
              <Heart size={24} />
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="detail-info-section">
          <div className="detail-header">
            <span className="category-badge">{product.category}</span>
            <h1 className="product-title">{product.name}</h1>
            <div className="rating-section">
              <span className="stars">★★★★★ (245 reviews)</span>
              <span className="in-stock">In Stock</span>
            </div>
          </div>

          {/* Price */}
          <div className="price-section">
            <span className="price-label">Unit Price</span>
            <span className="price">{product.price}</span>
            <span className="moq-label">Minimum Order: {product.moq}</span>
          </div>

          {/* Trust Badges */}
          <div className="trust-badges">
            <div className="badge">
              <Shield size={20} />
              <span>Verified Supplier</span>
            </div>
            <div className="badge">
              <CheckCircle size={20} />
              <span>Quality Assured</span>
            </div>
            <div className="badge">
              <Truck size={20} />
              <span>Fast Shipping</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="btn btn-primary btn-large">
              Request Sample
            </button>
            <button className="btn btn-secondary btn-large">
              Request Quote
            </button>
          </div>

          {/* Specifications */}
          <div className="specifications">
            <h3>Product Specifications</h3>
            <table className="specs-table">
              <tbody>
                {productSpecs.map((spec, index) => (
                  <tr key={index}>
                    <td className="spec-label">{spec.label}</td>
                    <td className="spec-value">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Description */}
          <div className="description">
            <h3>Description</h3>
            <p>
              This premium product is manufactured by one of our trusted and verified suppliers with extensive quality control measures. All items undergo rigorous inspection to ensure they meet international standards. Available for customization with your branding and packaging.
            </p>
          </div>

          {/* Contact Section */}
          <div className="contact-vendor">
            <h3>Questions About This Product?</h3>
            <p>Get in touch with our sourcing specialists</p>
            <button className="btn btn-outline">Contact Us</button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="related-products">
        <h2>Related Products</h2>
        <div className="related-grid">
          {relatedProducts.map(prod => (
            <div key={prod.id} className="related-product-card">
              <img src={prod.image} alt={prod.name} />
              <h4>{prod.name}</h4>
              <p className="price">{prod.price}</p>
              <button className="btn btn-small btn-outline">View</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
