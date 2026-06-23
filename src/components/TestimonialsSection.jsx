import { Star, Quote } from 'lucide-react';
import '../styles/TestimonialsSection.css';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'John Peterson',
      role: 'CEO',
      company: 'Global Sports Co.',
      content: 'Working with Novious Global has transformed our sourcing process. They identified reliable factories, helped with price negotiations, and ensured every product met our quality standards. Their hands-on approach made importing from China seamless and stress-free.',
      rating: 5
    },
    {
      id: 2,
      name: 'Hassam Ijaz',
      role: 'CEO',
      company: 'REEM Fashion',
      content: 'The Novious Global sourcing expertise in supplier verification and product sourcing was exceptional. Their professionalism and attention to detail made them a trusted partner for our fashion line.',
      rating: 5
    },
    {
      id: 3,
      name: 'Maria Gonzalez',
      role: 'Founder',
      company: 'EcoHome Supplies',
      content: 'The FBA and e-commerce support we received from Novious Global was outstanding. From sourcing to packaging and shipping, every step was professionally handled. Thanks to their guidance, our products reached Amazon warehouses on time and in perfect condition.',
      rating: 5
    },
    {
      id: 4,
      name: 'Liam Zhang',
      role: 'Operations Manager',
      company: 'BrightTech Solutions',
      content: 'We engaged them for a project-based service and were impressed with their level of detail. They accompanied us on factory visits, helped finalize contracts, and managed production and shipment efficiently. Truly a trustworthy partner for international sourcing.',
      rating: 5
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
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
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
