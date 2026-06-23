import { ShieldCheck, Ship, Layers, Package } from 'lucide-react';
import '../styles/WhatWeDoSection.css';

const items = [
  {
    icon: ShieldCheck,
    title: 'Supplier Verification & Quality Assurance',
    description: 'We rigorously verify every supplier and maintain strict quality standards throughout the production process.'
  },
  {
    icon: Ship,
    title: 'Shipping Solution',
    description: 'End-to-end logistics management — freight booking, shipment scheduling, and complete export documentation.'
  },
  {
    icon: Layers,
    title: 'OEM / ODM Solution',
    description: 'Custom product development from concept to creation — we support both original equipment and design manufacturing.'
  },
  {
    icon: Package,
    title: 'Product Sourcing',
    description: 'We help businesses source quality products from China by connecting them with verified manufacturers across all industries.'
  }
];

export default function WhatWeDoSection() {
  return (
    <section className="what-we-do">
      <div className="container">
        <h2 className="section-title">What We Do</h2>
        <p className="section-subtitle">
          We help businesses source quality products from China by connecting them with verified manufacturers.
          From supplier selection and quality control to logistics and delivery, we manage the entire sourcing
          process under one roof.
        </p>

        <div className="what-we-do-grid">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="what-we-do-card">
                <div className="wwd-icon">
                  <IconComponent size={36} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
