import { Award, Users, Globe, TrendingUp } from 'lucide-react';
import '../styles/AboutPage.css';

export default function AboutPage() {
  const stats = [
    { icon: Users, label: 'Suppliers Verified', value: '500+' },
    { icon: Globe, label: 'Countries Served', value: '75+' },
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: TrendingUp, label: 'Successful Projects', value: '1000+' }
  ];

  const values = [
    {
      title: 'Reliability',
      description: 'Every supplier undergoes rigorous verification and background checks.'
    },
    {
      title: 'Transparency',
      description: 'We provide honest communication and transparent pricing throughout the process.'
    },
    {
      title: 'Quality',
      description: 'Comprehensive quality control and inspection at every stage of production.'
    },
    {
      title: 'Partnership',
      description: 'We succeed when our clients succeed—long-term relationships matter.'
    }
  ];

  const team = [
    { name: 'John Zhang', role: 'Founder & CEO', image: 'https://via.placeholder.com/150x150?text=John' },
    { name: 'Sarah Liu', role: 'Head of Operations', image: 'https://via.placeholder.com/150x150?text=Sarah' },
    { name: 'David Chen', role: 'Quality Manager', image: 'https://via.placeholder.com/150x150?text=David' },
    { name: 'Emma Wang', role: 'Logistics Director', image: 'https://via.placeholder.com/150x150?text=Emma' }
  ];

  return (
    <div className="about-page">
      {/* Header */}
      <div className="about-header">
        <h1>About Novious Global</h1>
        <p>Your trusted partner in global sourcing and supply chain excellence</p>
      </div>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                To simplify global sourcing by connecting international buyers with reliable Chinese manufacturers. We believe in building long-term partnerships based on trust, transparency, and mutual success.
              </p>
              <p>
                Novious Global is a group of experts dedicated to helping businesses worldwide access high-quality products at competitive prices, with complete peace of mind.
              </p>
            </div>
            <div className="mission-image">
              <img src="https://via.placeholder.com/500x400?text=Our+Mission" alt="Mission" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="stat-card">
                  <div className="stat-icon">
                    <IconComponent size={40} />
                  </div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="our-process">
        <div className="container">
          <h2>How We Work</h2>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">01</div>
              <h3>Supplier Selection</h3>
              <p>We identify manufacturers from our extensive verified network based on your specific requirements.</p>
            </div>
            <div className="process-card">
              <div className="process-number">02</div>
              <h3>Verification & Audit</h3>
              <p>Rigorous background checks, factory audits, and certification verification ensure legitimacy and quality.</p>
            </div>
            <div className="process-card">
              <div className="process-number">03</div>
              <h3>Quality Control</h3>
              <p>Comprehensive inspection of raw materials, production process, and final products before shipment.</p>
            </div>
            <div className="process-card">
              <div className="process-number">04</div>
              <h3>Logistics & Delivery</h3>
              <p>Global shipping with customs clearance, ensuring safe and timely delivery to your doorstep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="section-subtitle">Experts with 10+ years in global sourcing</p>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <img src={member.image} alt={member.name} className="team-image" />
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="network-section">
        <div className="container">
          <h2>Our Global Network</h2>
          <div className="network-content">
            <div className="network-info">
              <h3>Shanghai Headquarters</h3>
              <p>Lotus Tower, No. 159 Tianzhou Road, Shanghai 200032, China</p>
              <p className="contact-info">
                Phone: +86 15618483542<br/>
                Email: info@noviousglobal.com
              </p>
              <p className="description">
                Our experienced team is ready to assist you with your sourcing needs. We have established relationships with manufacturers across all major industrial zones in China.
              </p>
            </div>
            <div className="network-map">
              <img src="https://via.placeholder.com/500x300?text=Global+Network" alt="Network Map" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
