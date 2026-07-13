import '../styles/RealWorkSection.css';

/**
 * Home-page "Real Work, Real Partnerships" band — places real photos from the
 * shared /images/real folder on the Home page (client request: real images
 * should appear on Home too, not only About Us and Services). Sits directly
 * under the text testimonials so the quotes are backed by real proof.
 * Reuses the existing gallery design language (image + gradient caption overlay).
 */
export default function RealWorkSection() {
  const items = [
    {
      src: '/images/real/client-visit-communication.jpg',
      caption: 'In-Person Partnerships in China',
    },
    {
      src: '/images/real/battery-assembly-line.jpg',
      caption: 'Hands-On Production Oversight',
    },
    {
      src: '/images/real/team-chuhan-visit.jpg',
      caption: 'On the Ground in Shanghai',
    },
  ];

  return (
    <section className="real-work">
      <div className="container">
        <h2 className="section-title">Real Work, Real Partnerships</h2>
        <p className="section-subtitle">
          Real visits, real factories, real relationships — here is our team on the ground in China.
        </p>

        <div className="real-work-grid">
          {items.map((item, i) => (
            <figure key={i} className="real-work-item">
              <img src={item.src} alt={item.caption} loading="lazy" />
              <figcaption className="real-work-overlay">
                <p>{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
