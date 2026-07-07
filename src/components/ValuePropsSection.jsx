import { Network, Clock, Layers, ShieldCheck, Globe } from 'lucide-react';
import '../styles/ValuePropsSection.css';

export default function ValuePropsSection() {
  const values = [
    {
      icon: Globe,
      title: '50+ Local Partners',
      description: 'Extensive network of local partners across China with access to reliable companies across multiple industries and full understanding of the Chinese business environment.'
    },
    {
      icon: Clock,
      title: '10+ Years of Experience',
      description: 'Proven experience and expertise in handling diverse and complex projects for international clients across industries worldwide.'
    },
    {
      icon: Network,
      title: 'Extensive Network in China',
      description: 'Access to reliable manufacturers and suppliers across multiple industries, with deep understanding of the Chinese business landscape.'
    },
    {
      icon: Layers,
      title: 'End-to-End Solutions',
      description: 'From sourcing agreements to logistics and supervision, we cover the entire sourcing process so you can focus on growing your business.'
    },
    {
      icon: ShieldCheck,
      title: 'Trustworthy Partner',
      description: 'A client-first approach built on transparency, accountability, and long-term cooperation. Your success is our greatest motivation.'
    }
  ];

  return (
    <section className="value-props">
      <div className="container">
        <h2 className="section-title">Why Choose Novious Global</h2>
        <p className="section-subtitle">
          We Win When You Win — Your success is our success
        </p>

        <div className="why-choose-grid">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="why-choose-card">
                <div className="why-choose-icon">
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
