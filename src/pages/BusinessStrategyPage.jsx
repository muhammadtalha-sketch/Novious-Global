import { BarChart2, Search, Share2, Monitor, Users, Globe, FileText, ArrowRight } from 'lucide-react';
import '../styles/BusinessStrategyPage.css';

const WHATSAPP_LINK = 'https://wa.me/923077433743?text=Hi%2C%20I%20am%20interested%20in%20your%20Business%20Strategy%20services.';

export default function BusinessStrategyPage({ onNavigate }) {
  const digitalServices = [
    {
      icon: Monitor,
      title: 'Website Development & Branding',
      description: 'Global-ready websites and consistent brand design. We ensure your site is multi-language, mobile-responsive, and reflects a modern global brand image.'
    },
    {
      icon: Search,
      title: 'SEO & Content Marketing',
      description: 'Keyword optimization and content creation. Since most customers start their search online, we optimize your website and content to rank highly in Google and other international search engines.'
    },
    {
      icon: Share2,
      title: 'Social Media Management & Paid Ad Campaigns',
      description: 'Targeted campaigns across Facebook, Instagram, TikTok, Google Ads, LinkedIn, and YouTube. We drive qualified traffic and leads by region, language, and interest.'
    },
    {
      icon: BarChart2,
      title: 'Analytics & Optimization',
      description: 'Data-driven insights and continuous improvement. We track user behavior, sales performance, and campaign ROI to refine your strategy over time, maximizing your return on investment.'
    }
  ];

  const internationalServices = [
    {
      icon: Users,
      title: 'Partner Sourcing & Alliances',
      description: 'Identify and connect with reliable international distributors, retailers, or joint-venture partners. Our research-driven approach and networks help bridge distances and establish strong business relationships.'
    },
    {
      icon: Globe,
      title: 'Market Entry & Compliance',
      description: 'End-to-end support for entering new markets. We conduct market research, advise on legal and regulatory requirements, and handle logistics and documentation so you can focus on growth.'
    },
    {
      icon: FileText,
      title: 'Localization Strategy',
      description: 'Product adaptation, localized strategy, and regional compliance setup ensure that offerings are tailored to local market needs and meet all regulatory requirements in target regions.'
    }
  ];

  const localPartners = ['ALTUS', 'ZTTEK', 'Percentac Energy'];

  return (
    <div className="strategy-page">
      {/* Header */}
      <div className="strategy-header">
        <h1>Business Strategy</h1>
        <p>Digital &amp; Internationalization Strategy for Chinese Businesses to Go Global</p>
      </div>

      {/* Intro Section */}
      <section className="strategy-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Empowering Chinese Businesses to Go Global</h2>
            <p>
              We empower Chinese manufacturers, exporters, and entrepreneurs to go global with confidence.
              As both strategic advisor and hands-on partner, we deliver a dual-pronged approach: a modern
              digital strategy plus a robust business strategy.
            </p>
            <p>
              In today's world, having a global footprint means engaging billions online —
              over <strong>5.56 billion people</strong> use the internet. We leverage this connectivity
              to boost your brand and sales overseas. Whether you're a manufacturer, trader, or building
              a personal brand, our services are tailored to your needs.
            </p>
            <div className="intro-stats">
              <div className="intro-stat">
                <span className="stat-num">5.56B+</span>
                <span className="stat-label">Internet Users Worldwide</span>
              </div>
              <div className="intro-stat">
                <span className="stat-num">73%</span>
                <span className="stat-label">Of online experiences begin with a search engine</span>
              </div>
              <div className="intro-stat">
                <span className="stat-num">1.59B</span>
                <span className="stat-label">TikTok monthly users worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Strategy Section */}
      <section className="digital-strategy-section">
        <div className="container">
          <h2 className="section-title">Digital Strategy to Expand Beyond Borders</h2>
          <p className="section-subtitle">
            Our digital strategy is built to put your brand at the center of the global market. We design
            and develop localized websites, optimize SEO and content, and leverage targeted advertising
            across the world's most powerful platforms.
          </p>

          <div className="strategy-grid">
            {digitalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="strategy-card">
                  <div className="strategy-icon">
                    <IconComponent size={36} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="platforms-row">
            <h3>Platforms We Work With</h3>
            <div className="platforms-list">
              {['Facebook', 'Instagram', 'TikTok', 'Google Ads', 'LinkedIn', 'YouTube'].map((p, i) => (
                <span key={i} className="platform-tag">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internationalization Section */}
      <section className="international-section">
        <div className="container">
          <h2 className="section-title">Internationalization Strategy</h2>
          <p className="section-subtitle">
            Our internationalization strategy services lay the groundwork for successful international
            expansion. We help Chinese companies find and vet the right overseas partners — whether
            distributors, collaborations, or joint ventures — to extend your reach.
          </p>

          <div className="strategy-grid">
            {internationalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="strategy-card featured">
                  <div className="strategy-icon">
                    <IconComponent size={36} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Business Partners */}
      <section className="partners-section">
        <div className="container">
          <h2>Local Business Partners</h2>
          <p className="section-subtitle">
            We work alongside trusted local partners to deliver results in target markets.
          </p>
          <div className="partners-grid">
            {localPartners.map((partner, index) => (
              <div key={index} className="partner-card">
                <div className="partner-logo-placeholder">{partner.charAt(0)}</div>
                <p className="partner-name">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="strategy-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Take Your Business Global?</h2>
            <p>
              Let's build your international growth strategy together. Contact us today for a free consultation.
            </p>
            <div className="cta-buttons">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                💬 Chat on WhatsApp
              </a>
              {onNavigate && (
                <button className="btn btn-primary" onClick={() => onNavigate('contact')}>
                  Contact Us
                  <ArrowRight size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
