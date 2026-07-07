import { Search, Shield, Package, Warehouse, Globe, ShoppingCart, Tag, Truck, ShoppingBag, CheckSquare, ArrowRight, MessageCircle } from 'lucide-react';
import '../styles/ServicesPage.css';

const WHATSAPP_LINK = 'https://wa.me/8615618483542?text=Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services.';

const sourcingServices = [
  {
    icon: Globe,
    title: 'One-Stop Sourcing',
    description: 'We simplify the complexity of global trade. From finding suppliers and negotiating prices to managing quality and logistics, Novious Global provides an end-to-end sourcing service.'
  },
  {
    icon: Shield,
    title: 'Supplier Verification',
    description: 'We conduct supplier/manufacturer visits, meetings, negotiations, product quality inspections, certifications checks, and supplier background verification to minimize risks.'
  },
  {
    icon: Package,
    title: 'Product Development Support',
    description: 'Need a unique design or private label? We help with private labeling and assist in product development, customization, and prototyping to bring your vision to life.'
  },
  {
    icon: Warehouse,
    title: 'Warehousing & Consolidation',
    description: 'Short-term storage and consolidation services for multiple orders before shipment. We ensure your products are safely stored and ready for efficient, consolidated shipping.'
  },
  {
    icon: Search,
    title: 'Trade Show & Market Guidance',
    description: 'We actively participate in China and global trade fairs and exhibitions, providing first-hand access to emerging products, trends, and verified suppliers.'
  }
];

const solutions = [
  {
    icon: ShoppingCart,
    title: 'Product Sourcing',
    description: 'We find the most reliable manufacturers for your needs — balancing price, quality, and delivery time. From small orders to large-scale procurement, we handle it all.'
  },
  {
    icon: Tag,
    title: 'Private Label & Packaging Solutions',
    description: 'We help you customize your products with branding, packaging design, and labeling to stand out in your market and build a distinctive brand identity.'
  },
  {
    icon: Truck,
    title: 'Fast & Secure Global Shipping',
    description: 'From express courier to sea freight, we handle the logistics to deliver your products safely, cost-effectively, and on time to any destination worldwide.'
  },
  {
    icon: ShoppingBag,
    title: 'Amazon FBA Solutions',
    description: 'Specialized support for Amazon sellers: direct delivery to Amazon warehouses, packaging compliance, and product preparation to ensure smooth FBA fulfillment.'
  },
  {
    icon: CheckSquare,
    title: 'Quality Control & Inspection',
    description: 'Every order is checked before shipment — covering raw materials, production process, and final inspection to ensure top quality and compliance with your standards.'
  }
];

const steps = [
  { step: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product type, quantity, budget, and quality standards.' },
  { step: '02', title: 'Supplier Search & Vetting', desc: 'We identify and verify the best manufacturers that match your criteria.' },
  { step: '03', title: 'Samples & Negotiation', desc: 'We coordinate samples, review quality, and negotiate the best price and terms.' },
  { step: '04', title: 'Production & QC', desc: 'We oversee production, run quality inspections, and resolve any issues before shipment.' },
  { step: '05', title: 'Delivery & Support', desc: 'We manage logistics and customs clearance to deliver your goods on time, every time.' }
];

export default function ServicesPage({ onNavigate }) {
  return (
    <div className="services-page">
      {/* Header */}
      <div className="services-header">
        <h1>Our Services</h1>
        <p>End-to-end sourcing solutions designed to simplify your global procurement — from supplier verification to doorstep delivery.</p>
      </div>

      {/* Core Sourcing Services */}
      <section className="sourcing-section">
        <div className="container">
          <h2 className="section-title">One-Stop Sourcing</h2>
          <p className="section-subtitle">
            Novious Global handles every step of your sourcing journey so you can focus on growing your business.
          </p>
          <div className="services-grid">
            {sourcingServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="service-card">
                  <div className="service-icon">
                    <Icon size={36} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider">
        <div className="divider-line"></div>
        <span className="divider-label">Our Solutions</span>
        <div className="divider-line"></div>
      </div>

      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="container">
          <h2 className="section-title">Product Sourcing Solutions</h2>
          <p className="section-subtitle">
            Tailored solutions for every type of buyer — from e-commerce sellers to large-scale importers.
          </p>
          <div className="solutions-grid">
            {solutions.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <div key={i} className="solution-card">
                  <div className="solution-icon">
                    <Icon size={36} />
                  </div>
                  <h3>{sol.title}</h3>
                  <p>{sol.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">A simple, transparent process from your first inquiry to final delivery.</p>
          <div className="steps-row">
            {steps.map((s, i) => (
              <div key={i} className="step-card">
                <span className="step-num">{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Photos */}
      <section className="services-gallery-section">
        <div className="container">
          <h2 className="section-title">Real Work, Real Results</h2>
          <p className="section-subtitle">A look at our production oversight and client relationships on the ground in China.</p>
          <div className="services-gallery-grid">
            <img src="/images/real/battery-assembly-line.jpg" alt="Production line quality oversight" />
            <img src="/images/real/client-visit-communication.jpg" alt="In-person client relationship building in China" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Start Sourcing?</h2>
            <p>Contact us today and let our experts find the best suppliers for your needs.</p>
            <div className="cta-buttons">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
              {onNavigate && (
                <button className="btn btn-primary" onClick={() => onNavigate('contact')}>
                  Get a Free Quote <ArrowRight size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
