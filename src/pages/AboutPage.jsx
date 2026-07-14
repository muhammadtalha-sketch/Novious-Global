import {
  Users,
  Globe,
  Award,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  MessageSquareText,
  BadgeCheck,
  Handshake,
  UserRound,
} from "lucide-react";
import "../styles/AboutPage.css";

export default function AboutPage({ onNavigate }) {
  const stats = [
    {
      icon: Users,
      label: "Satisfied Clients Globally",
      value: "1000+",
      detail: "Building trust across 30+ countries",
    },
    {
      icon: TrendingUp,
      label: "Client Retention Rate",
      value: "98%",
      detail: "Reliable, quality-driven service",
    },
    {
      icon: Award,
      label: "Orders Handled",
      value: "1000+",
      detail: "From sourcing to delivery, seamlessly",
    },
    {
      icon: Globe,
      label: "Verified Supplier Partners",
      value: "150+",
      detail: "Ensuring quality and competitive pricing",
    },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Reliability",
      description:
        "Every supplier undergoes rigorous verification and background checks to ensure legitimacy and quality.",
    },
    {
      icon: MessageSquareText,
      title: "Transparency",
      description:
        "We provide honest communication and transparent pricing throughout the entire sourcing process.",
    },
    {
      icon: BadgeCheck,
      title: "Quality",
      description:
        "Comprehensive quality control and inspection at every stage of production and before shipment.",
    },
    {
      icon: Handshake,
      title: "Partnership",
      description:
        "We succeed when our clients succeed — long-term relationships built on integrity and client success.",
    },
  ];

  const leadership = [
    {
      name: "Hamid",
      role: "Founder & CEO",
      photo: "/images/team/hamid-ceo-v2.jpeg",
      bio: "Founded Novious Global to make China sourcing transparent and reliable.",
    },
    {
      name: "Abdul Rehman",
      role: "Operations Manager",
      photo: "/images/team/ABD.png",
      bio: "Oversees daily operations and supplier relationship management.",
    },
    {
      name: "Jack Wang",
      role: "Sourcing Expert",
      photo: "/images/team/ALEXx.png",
      bio: "Local market expert matching clients with the right verified factories.",
    },
    {
      name: "Williamson",
      role: "Client Relations",
      photo: "/images/team/Williamson.png",
      bio: "Your dedicated point of contact from quote to delivery.",
    },
  ];

  return (
    <div className="about-page">
      {/* Header */}
      <div className="about-header">
        <h1>About Novious Global</h1>
        <p>
          Your trusted partner in global sourcing, connecting international
          buyers with verified Chinese manufacturers
        </p>
      </div>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                To make sourcing from China simple, transparent, and reliable by
                connecting global businesses with verified suppliers and
                delivering trusted end-to-end sourcing solutions.
              </p>
              <p>
                Novious Global is based in Shanghai, China. We provide
                end-to-end sourcing solutions for global buyers and connect them
                with verified Chinese manufacturers. Our diverse team of
                international and Chinese experts brings strong communication
                skills, local market knowledge, and cross-cultural business
                understanding to ensure smooth and reliable sourcing.
              </p>
            </div>
            <div className="mission-image">
              <img
                src="/images/Our-Products.jpg"
                alt="Novious Global Mission"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-content">
            <div className="founder-image-wrapper">
              <img
                src="/images/team/hamid-ceo-v2.jpeg"
                alt="Hamid — Founder & CEO"
                className="founder-photo"
              />
            </div>
            <div className="founder-text">
              <h2>About Our Founder &amp; CEO</h2>
              <h3>Hamid — Founder &amp; CEO</h3>
              <p>
                Hamid is the visionary founder behind Novious Global, with over
                10 years of experience working directly with Chinese
                manufacturers across industries including consumer goods,
                garments, fashion accessories, energy, electronics, hardware,
                and construction.
              </p>
              <p>
                He learned the Chinese language to broaden his local network and
                develop a deep understanding of the Chinese business
                environment. He completed his Master's degree in International
                Trade and a PhD in Business Management from Shanghai, China.
              </p>
              <p>
                His unique blend of cross-cultural expertise, business
                knowledge, and hands-on industry experience enables him to build
                strong partnerships and deliver effective business solutions in
                the global market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="container">
          <h2>Our Story</h2>
          <div className="story-content">
            <p>
              Our story began in 2022 when Hamid, the founder of Novious Global,
              recognized the common challenges in sourcing faced by global
              buyers — communication barriers, supplier verification, and
              quality control. He founded this company to provide a transparent,
              trustworthy, and efficient sourcing solution to connect global
              buyers with verified Chinese manufacturers and suppliers.
            </p>
            <p>
              He set out to build a company that would serve as a trustworthy
              partner for businesses worldwide. With a strong belief in
              integrity and client success, Hamid assembled a team of skilled
              professionals — both foreigners and Chinese — who shared his
              vision. Together, we built Novious Global on the principles of
              trust, quality, and end-to-end support.
            </p>
            <p>
              Today, we proudly help hundreds of clients streamline their
              sourcing process, reduce risks, and achieve their business goals.
              Your success is our greatest motivation, and we're committed to
              growing alongside you.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2>Our Story in Numbers</h2>
          <p className="stats-intro">
            Since our founding in 2022, we take pride in the significant
            milestones we've reached while serving clients worldwide.
          </p>
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
                  <div className="stat-detail">{stat.detail}</div>
                </div>
              );
            })}
          </div>
          <p className="stats-closing">
            These accomplishments reflect our dedication to being your trusted
            sourcing partner in China. Your trust drives us; your success
            defines us.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => {
              const ValueIcon = value.icon;
              return (
                <div key={index} className="core-value-card">
                  <div className="core-value-icon">
                    <ValueIcon size={28} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet Our Leadership */}
      <section className="leadership-section">
        <div className="container">
          <h2>Meet Our Leadership</h2>
          <p className="section-subtitle">
            The people behind our successful sourcing partnerships.
          </p>
          <div className="leadership-grid">
            {leadership.map((person, index) => (
              <div key={index} className="leadership-card">
                <div className="leadership-photo-wrapper">
                  {person.photo ? (
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="leadership-photo"
                    />
                  ) : (
                    <div
                      className="leadership-avatar-placeholder"
                      aria-label="Generic placeholder avatar, photo coming soon"
                    >
                      <UserRound size={44} strokeWidth={1.5} />
                    </div>
                  )}
                </div>
                <h3>{person.name}</h3>
                <p className="leadership-role">{person.role}</p>
                <p className="leadership-bio">{person.bio}</p>
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
              <p>Lotus Tower, No. 150 Tianzhou Road, Shanghai 200032, China</p>
              <p className="contact-info">
                Phone: +86 15618483542
                <br />
                Email: info@noviousglobal.com
                <br />
                WhatsApp: +8615618483542
              </p>
              <p className="description">
                Our experienced team is ready to assist you with your sourcing
                needs. We have established relationships with manufacturers
                across all major industrial zones in China, with 50+ local
                partners giving us unmatched reach and local knowledge.
              </p>
            </div>
            <div className="network-map">
              <img src="/images/Global-Shipping.jpg" alt="Global Network" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="about-partners-section">
        <div className="container">
          <h2>Our Partners</h2>
          <p className="section-subtitle">
            Trusted by businesses and organizations around the world
          </p>
          <div className="about-partners-grid">
            {[
              { label: "ALTUS", logo: "/images/partners/altus.png" },
              { label: "ZTTEK", logo: "/images/partners/zttek.png" },
              {
                label: "Percentec Energy",
                logo: "/images/partners/percentec.png",
              },
              { label: "CHUHAN", logo: "/images/partners/chuhan.png" },
            ].map((partner, i) => (
              <div key={i} className="about-partner-card">
                <div className="about-partner-logo">
                  <img
                    src={partner.logo}
                    alt={partner.label}
                    className="about-partner-logo-img"
                  />
                </div>
                <p className="about-partner-label">{partner.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Images */}
      <section className="about-gallery-section">
        <div className="container">
          <div className="about-gallery-grid">
            <div className="about-gallery-item">
              <img
                src="/images/real/team-chuhan-visit.jpg"
                alt="Novious Global Team"
              />
              <div className="gallery-overlay">
                <p>Our Team in Shanghai</p>
              </div>
            </div>
            <div className="about-gallery-item">
              <img
                src="/images/real/supplier-network-visit.jpg"
                alt="Supplier Network"
              />
              <div className="gallery-overlay">
                <p>Verified Supplier Network</p>
              </div>
            </div>
            <div className="about-gallery-item">
              <img
                src="/images/real/quality-assurance-line.jpg"
                alt="Quality Assurance"
              />
              <div className="gallery-overlay">
                <p>Quality Assurance Process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Family CTA */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-content">
            <h2>Join Our Growing Family of International Clients</h2>
            <p>
              Whether you're a startup, e-commerce seller, or B2B company,
              Novious Global is here to make your China sourcing journey
              worry-free. Let us be your partners in growth and success. Let's
              build something great together.
            </p>
            <p className="cta-highlight">
              Ready to experience stress-free sourcing from China?
            </p>
            <p>Contact us today to start your journey!</p>
            {onNavigate && (
              <button
                className="btn btn-primary btn-large"
                onClick={() => onNavigate("contact")}
              >
                Contact Us Today
                <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
