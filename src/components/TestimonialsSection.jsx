import { Star, Quote } from 'lucide-react';
import '../styles/TestimonialsSection.css';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'E-commerce Founder',
      company: 'Stellar Fashion',
      content: 'Novious Global transformed our sourcing process. They found us reliable suppliers at incredible prices and ensured perfect quality every time.',
      rating: 5,
      image: 'https://via.placeholder.com/80x80?text=SC'
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      role: 'Supply Chain Manager',
      company: 'Home Decor Plus',
      content: 'Working with Novious has been a game-changer. Their verification process gives us complete peace of mind about supplier reliability.',
      rating: 5,
      image: 'https://via.placeholder.com/80x80?text=MJ'
    },
    {
      id: 3,
      name: 'Lisa Rodriguez',
      role: 'CEO',
      company: 'Global Retail Solutions',
      content: 'The team is responsive, professional, and truly understands our business needs. They consistently deliver quality products on schedule.',
      rating: 5,
      image: 'https://via.placeholder.com/80x80?text=LR'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Join hundreds of satisfied businesses worldwide
        </p>

        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="filled" />
                ))}
              </div>

              <p className="testimonial-content">
                <Quote size={20} className="quote-icon" />
                {testimonial.content}
              </p>

              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                <div className="author-info">
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-role">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
