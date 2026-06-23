import { MessageSquare, Factory, Handshake, CheckSquare, Ship, FileText } from 'lucide-react';
import '../styles/HowItWorksSection.css';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      title: 'Requirement Understanding & Consultation',
      description: 'We start by discussing your end goals, style preferences, budget, and material needs to fully understand your sourcing requirements.'
    },
    {
      icon: Factory,
      number: '02',
      title: 'Supplier Identification & Factory Visit',
      description: 'We identify and verify the most suitable factories, conduct factory visits, and provide transparent quotations tailored to your needs.'
    },
    {
      icon: Handshake,
      number: '03',
      title: 'Negotiation & Contract Support',
      description: 'We identify negotiation objectives including price, MOQ, lead time, delivery, warranty, and quality to secure the best terms for you.'
    },
    {
      icon: CheckSquare,
      number: '04',
      title: 'Quality Control & Inspection',
      description: 'Product quality inspection and pre-shipment inspection ensure every item meets your specifications before leaving the factory.'
    },
    {
      icon: FileText,
      number: '05',
      title: 'Production Supervision',
      description: 'We supervise and track production progress, keeping you informed at every stage for a smooth and on-schedule manufacturing process.'
    },
    {
      icon: Ship,
      number: '06',
      title: 'Shipping & Export Documentation',
      description: 'Freight booking, shipment scheduling, and full export documentation (Invoice, Packing List, Bill of Lading) handled seamlessly.'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">How We Work</h2>
        <p className="section-subtitle">
          Share your requirements with us, and our team will identify suitable suppliers, negotiate pricing, verify quality, and coordinate production. We keep you informed at every stage and ensure a smooth sourcing experience from start to finish.
        </p>

        <div className="steps-container">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="step">
                <div className="step-header">
                  <div className="step-icon-wrapper">
                    <div className="step-number">{step.number}</div>
                    <div className="step-icon">
                      <IconComponent size={32} />
                    </div>
                  </div>
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < steps.length - 1 && <div className="step-connector"></div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
