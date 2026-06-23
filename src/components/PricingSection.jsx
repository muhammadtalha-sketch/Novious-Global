import { MessageCircle, Check } from 'lucide-react';
import '../styles/PricingSection.css';

const WHATSAPP_NUMBER = '923077433743';
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

const packages = [
  {
    name: 'Starter Pack',
    tagline: 'Basic Sourcing',
    waMessage: 'Hi, I am interested in the Starter Pack sourcing service.',
    features: [
      'Product sourcing from verified manufacturers',
      'Supplier/vendor outreach and identification',
      'Quotation collection and comparison',
      'Price negotiation support',
      'Basic sourcing consultancy',
      'Sample coordination and review'
    ]
  },
  {
    name: 'E-Commerce Sourcing',
    tagline: 'For Online Sellers',
    popular: true,
    waMessage: 'Hi, I am interested in the E-Commerce Sourcing package.',
    features: [
      'Product sourcing',
      'Supplier/vendor verification',
      'Price negotiation and MOQ management',
      'Quotation collection',
      'Cost optimization',
      'Sample inspection and quality check',
      'Packaging and labeling',
      'Shipping arrangement'
    ]
  },
  {
    name: 'All in One',
    tagline: 'Complete Solution',
    waMessage: 'Hi, I am interested in the All in One sourcing package.',
    features: [
      'Initial meeting to understand product/project needs',
      'Product/market research',
      'Supplier identification & verification',
      'Factory visit',
      'Provide quotations',
      'Negotiation & contracts',
      'Lead times, payment terms',
      'Supervise production & track/inspect goods',
      'Pre-shipping inspection',
      'Shipping arrangements',
      'Consultancy'
    ]
  },
  {
    name: 'Project Base Service',
    tagline: 'Enterprise & B2B',
    waMessage: 'Hi, I am interested in the Project Base Service.',
    features: [
      'Initial meeting to understand project needs',
      'Provide visa invitation (if required)',
      'Accompany clients to visit suppliers',
      'Identify suitable factories',
      'Conduct factory visits',
      'Assist in meetings with suppliers',
      'Support price negotiation and contract finalization',
      'End-to-end project management: production, quality control, shipment, and delivery',
      'Post-project support and follow-up'
    ]
  }
];

export default function PricingSection() {
  return (
    <section className="pricing-section">
      <div className="container">
        <h2 className="section-title">Our Packages</h2>
        <p className="section-subtitle">
          The prices shown are indicative; the final quotation will be provided after fully understanding your requirements.
          The general market standard is 3% if you already have a supplier, and 5% if you want us to find a supplier and
          manage the entire process. The percentage is calculated based on the total order value.
        </p>

        <div className="pricing-grid">
          {packages.map((pkg, index) => (
            <div key={index} className={`pricing-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <div className="popular-badge">Most Popular</div>}
              <div className="pricing-header">
                <h3 className="pkg-name">{pkg.name}</h3>
                <p className="pkg-tagline">{pkg.tagline}</p>
              </div>
              <ul className="pkg-features">
                {pkg.features.map((feature, i) => (
                  <li key={i}>
                    <Check size={16} className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent(pkg.waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pkg-cta-btn"
              >
                <MessageCircle size={18} />
                Get Started on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
