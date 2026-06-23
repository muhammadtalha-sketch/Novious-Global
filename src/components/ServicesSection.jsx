import { Package, Globe, Briefcase, ShoppingCart, Award, CheckSquare } from 'lucide-react';
import '../styles/ServicesSection.css';

export default function ServicesSection() {
  const services = [
    {
      icon: Package,
      title: 'Product Sourcing',
      description: 'Supplier identification, factory visit, negotiation, contract review, quality control, and risk mitigation — we manage it all.'
    },
    {
      icon: Globe,
      title: 'Global Shipping',
      description: 'Shipping route planning (sea, air, rail, express) and Incoterms negotiation (FOB, CIF, EXW, DDP, etc.) for seamless global delivery.'
    },
    {
      icon: Briefcase,
      title: 'Project-Based B2B Solutions',
      description: 'Project requirement analysis, supplier identification & resource allocation, quality control, delivery, and post-project support.'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Fulfillment Support',
      description: 'Shopify, Amazon, Etsy, WHATNOT, eBay, and WooCommerce order fulfillment for online sellers — from sourcing to delivery.'
    },
    {
      icon: Award,
      title: 'Amazon Solutions',
      description: 'Private label development, logistics & FBA fulfillment support, and product compliance & documentation for Amazon sellers.'
    },
    {
      icon: CheckSquare,
      title: 'Quality Control & Inspection',
      description: 'Product quality inspection and pre-shipment inspection to ensure every product meets your standards before it leaves China.'
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive sourcing solutions for startups, e-commerce sellers, retail chains, wholesalers, and B2B companies
        </p>

        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <IconComponent size={40} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
