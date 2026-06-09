import { CheckCircle, Shield, Zap, Globe } from 'lucide-react';
import '../styles/ValuePropsSection.css';

export default function ValuePropsSection() {
  const values = [
    {
      icon: Shield,
      title: 'Verified Suppliers',
      description: 'Every supplier undergoes rigorous verification, background checks, and factory audits to ensure legitimacy and quality.'
    },
    {
      icon: Zap,
      title: 'Complete Supply Chain',
      description: 'From product sourcing to quality control, private labeling, and global shipping—we handle every step.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Comprehensive inspection of raw materials, production process, and final products before shipment.'
    },
    {
      icon: Globe,
      title: 'Global Logistics',
      description: 'Air, sea, express shipping with customs clearance and consolidation services worldwide.'
    }
  ];

  return (
    <section className="value-props">
      <div className="container">
        <h2 className="section-title">Why Choose Novious Global</h2>
        <p className="section-subtitle">
          We Win When You Win—Your success is our success
        </p>

        <div className="value-grid">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <IconComponent size={40} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
