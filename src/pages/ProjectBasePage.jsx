import { Zap, Building2, Activity, Factory, Cpu, HeartPulse, Search, ShieldCheck, HardHat, CheckCircle, Truck, Headphones, Globe, ArrowRight, MessageCircle } from 'lucide-react';
import '../styles/ProjectBasePage.css';

const WHATSAPP_LINK = 'https://wa.me/923077433743?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20project-based%20service.';

const projectCategories = [
  {
    icon: Zap,
    title: 'Energy Solutions',
    description: 'Solar power plants, residential and commercial energy storage, wind farms, hydro projects, and EV charging station networks.'
  },
  {
    icon: Building2,
    title: 'Infrastructure Development',
    description: 'Roads, bridges, industrial complexes, and urban facilities — from planning and procurement to delivery.'
  },
  {
    icon: Activity,
    title: 'Sports & Recreational Facilities',
    description: 'Padel courts, football fields, gyms, and swimming pools — fully sourced and project-managed.'
  },
  {
    icon: Factory,
    title: 'Specialized Industrial Projects',
    description: 'Factory machines, equipment, warehouses, and technology parks for industrial and commercial clients.'
  },
  {
    icon: Cpu,
    title: 'Electronics & Machinery',
    description: 'Electric bikes, motorbikes, flood lights, and specialized machinery — sourced directly from trusted manufacturers.'
  },
  {
    icon: HeartPulse,
    title: 'Medical & Hospital Equipment',
    description: 'Full procurement support for medical facilities, including equipment sourcing, compliance, and delivery.'
  }
];

const valuePoints = [
  { icon: Search,       title: 'Product & Supplier Sourcing',      desc: 'Connecting you with the right partners for your project from our verified network.' },
  { icon: ShieldCheck,  title: 'Supplier Management',               desc: 'Ensuring reliable cooperation with vetted and verified companies throughout the project.' },
  { icon: HardHat,      title: 'Construction & Project Support',    desc: 'Coordinating local execution while aligning with global standards and timelines.' },
  { icon: CheckCircle,  title: 'Quality Control & Inspection',      desc: 'Safeguarding project quality through rigorous checks at every stage.' },
  { icon: Truck,        title: 'Logistics & Global Shipping',       desc: 'Managing transport, customs clearance, and timely delivery to your location.' },
  { icon: Globe,        title: 'Project Supervision',               desc: 'Overseeing milestones to ensure smooth execution and full accountability.' }
];

const howItWorks = [
  {
    step: '01',
    title: 'Consultation',
    desc: 'We begin with a brief consultation to understand your objectives — whether it\'s a strategic partnership, cooperation, or an exclusive sales arrangement.'
  },
  {
    step: '02',
    title: 'Partner Identification',
    desc: 'We leverage our network and capabilities to connect you with the right companies and suppliers in China.'
  },
  {
    step: '03',
    title: 'Negotiation & Agreement',
    desc: 'We support you in establishing fair, transparent, and secure contracts with your chosen partners.'
  },
  {
    step: '04',
    title: 'Execution & Oversight',
    desc: 'We coordinate suppliers, quality control, inspections, and logistics to keep your project on track.'
  },
  {
    step: '05',
    title: 'Delivery & Ongoing Support',
    desc: 'We ensure your project is completed successfully, with post-project assistance available whenever you need it.'
  }
];

const whyChooseUs = [
  {
    title: 'Extensive Network in China',
    desc: 'Access to reliable companies across multiple industries, with a full understanding of the Chinese business environment.'
  },
  {
    title: 'End-to-End Solutions',
    desc: 'From sourcing and agreements to logistics and supervision, we cover the entire project process.'
  },
  {
    title: 'Proven Experience',
    desc: 'Expertise in handling diverse, complex projects for international clients across multiple sectors.'
  },
  {
    title: 'Trustworthy Partner',
    desc: 'A client-first approach built on transparency, accountability, and long-term cooperation.'
  }
];

export default function ProjectBasePage({ onNavigate }) {
  return (
    <div className="project-base-page">
      {/* Header */}
      <div className="project-header">
        <p className="project-header-tag">Project-Based Services</p>
        <h1>Your Trusted Ambassador in China</h1>
        <p className="project-header-sub">Building Partnerships That Last</p>
      </div>

      {/* Introduction */}
      <section className="project-intro-section">
        <div className="container">
          <div className="project-intro-content">
            <h2>End-to-End Project Services for International Businesses</h2>
            <p>
              We provide end-to-end project-based services for international corporations and investors seeking reliable partnerships in China. Whether you are pursuing long-term cooperation or short-term contracts, we help you connect, negotiate, and build successful relationships with the right partners.
            </p>
            <p>
              With deep market knowledge, a trusted network, and proven experience, we make complex projects simple, seamless, and efficient.
            </p>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="project-categories-section">
        <div className="container">
          <h2 className="section-title">Project Categories</h2>
          <p className="section-subtitle">
            We can assist you in a wide variety of projects across key industries.
          </p>
          <div className="categories-grid">
            {projectCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div key={i} className="category-card">
                  <div className="category-icon">
                    <Icon size={36} />
                  </div>
                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Add Value */}
      <section className="value-section">
        <div className="container">
          <h2 className="section-title">How We Add Value</h2>
          <p className="section-subtitle">
            Our strength lies in bridging international businesses with trusted Chinese companies.
          </p>
          <div className="value-grid">
            {valuePoints.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="value-card">
                  <div className="value-icon">
                    <Icon size={28} />
                  </div>
                  <div className="value-text">
                    <h3>{v.title}</h3>
                    <p>{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="project-how-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">A proven process from initial consultation to successful delivery.</p>
          <div className="project-steps">
            {howItWorks.map((s, i) => (
              <div key={i} className="project-step">
                <div className="project-step-num">{s.step}</div>
                <div className="project-step-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                {i < howItWorks.length - 1 && <div className="project-step-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="project-why-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="why-grid">
            {whyChooseUs.map((w, i) => (
              <div key={i} className="why-card">
                <div className="why-number">{String(i + 1).padStart(2, '0')}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="project-cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's discuss your project goals and find the right partners in China. Contact us for a free consultation today.
            </p>
            <div className="cta-buttons">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
              {onNavigate && (
                <button className="btn btn-primary" onClick={() => onNavigate('contact')}>
                  Get in Touch <ArrowRight size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
