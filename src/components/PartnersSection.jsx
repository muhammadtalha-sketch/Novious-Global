import '../styles/PartnersSection.css';

const partners = [
  { name: 'ALTUS',            logo: '/images/partners/altus.png' },
  { name: 'ZTTEK',            logo: '/images/partners/zttek.png' },
  { name: 'Percentec Energy', logo: '/images/partners/percentec.png' },
  { name: 'CHUHAN',           logo: '/images/partners/chuhan.png' }
];

export default function PartnersSection() {
  return (
    <section className="partners-strip-section">
      <div className="partners-strip-container">
        <p className="partners-strip-label">Our Trusted Partners</p>
        <div className="partners-strip-logos">
          {partners.map((p, i) => (
            <div key={i} className="partners-strip-item">
              <img src={p.logo} alt={p.name} className="partners-strip-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
