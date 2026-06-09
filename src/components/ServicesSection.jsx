import { Layers, Package, CheckSquare, Truck, Box, Wrench } from 'lucide-react';
import '../styles/ServicesSection.css';

export default function ServicesSection() {
  const services = [
    {
      icon: Package,
      title: 'Product Sourcing',
      description: 'Find the most reliable manufacturers balancing price, quality, and delivery time.'
    },
    {
      icon: Layers,
      title: 'Private Label & Packaging',
      description: 'Customize products with your branding, packaging design, and custom labeling.'
    },
    {
      icon: CheckSquare,
      title: 'Quality Control & Inspection',
      description: 'Comprehensive checks covering raw materials, production, and final inspection.'
    },
    {
      icon: Truck,
      title: 'Global Shipping & Logistics',
      description: 'Air, sea, and express shipping with customs clearance worldwide.'
    },
    {
      icon: Box,
      title: 'Amazon FBA Solutions',
      description: 'Direct warehouse delivery, packaging compliance, and product preparation.'
    },
    {
      icon: Wrench,
      title: 'Project-Based Solutions',
      description: 'Large-scale industrial projects, infrastructure, and specialized sourcing.'
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive solutions for every sourcing need
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
