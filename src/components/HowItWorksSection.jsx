import { MessageSquare, Users, Box, Truck } from 'lucide-react';
import '../styles/HowItWorksSection.css';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      title: 'Consultation',
      description: 'Tell us your requirements. We understand your sourcing needs, budget, and timeline.'
    },
    {
      icon: Users,
      number: '02',
      title: 'Supplier Selection',
      description: 'We identify and verify the right suppliers from our extensive network across China.'
    },
    {
      icon: Box,
      number: '03',
      title: 'Quality Control',
      description: 'Sample evaluation, rigorous inspection, and quality assurance at every production stage.'
    },
    {
      icon: Truck,
      number: '04',
      title: 'Delivery',
      description: 'Global shipping with customs clearance, ensuring safe and timely delivery worldwide.'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">How We Work</h2>
        <p className="section-subtitle">
          A seamless process that delivers results
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
