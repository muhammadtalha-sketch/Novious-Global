import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import '../styles/ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+86 15618483542',
      link: 'tel:+8615618483542'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@noviousglobal.com',
      link: 'mailto:info@noviousglobal.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'Lotus Tower, No. 159 Tianzhou Road, Shanghai 200032, China'
    }
  ];

  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>Have questions? Our sourcing specialists are ready to help you find the perfect suppliers.</p>
      </div>

      <div className="contact-container">
        {/* Contact Information */}
        <aside className="contact-info-section">
          <h2>Contact Information</h2>
          <p className="info-intro">
            Reach out to us through any of these channels. We typically respond within 24 hours.
          </p>

          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div key={index} className="contact-info-item">
                <div className="info-icon">
                  <IconComponent size={24} />
                </div>
                <div className="info-content">
                  <h3>{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="info-link">{info.details}</a>
                  ) : (
                    <p>{info.details}</p>
                  )}
                </div>
              </div>
            );
          })}

          {/* WhatsApp */}
          <div className="whatsapp-section">
            <h3>Quick Message</h3>
            <p>Chat with us on WhatsApp for faster response</p>
            <button className="whatsapp-btn">
              💬 Chat on WhatsApp
            </button>
          </div>

          {/* Business Hours */}
          <div className="hours-section">
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM (GMT+8)</p>
            <p>Saturday: 10:00 AM - 3:00 PM (GMT+8)</p>
            <p>Sunday: Closed</p>
          </div>
        </aside>

        {/* Contact Form */}
        <main className="contact-form-section">
          <div className="form-wrapper">
            <h2>Send us a Message</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible.</p>

            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>We've received your message and will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject...</option>
                    <option value="product-sourcing">Product Sourcing</option>
                    <option value="supplier-verification">Supplier Verification</option>
                    <option value="quality-control">Quality Control</option>
                    <option value="logistics">Shipping & Logistics</option>
                    <option value="fba">Amazon FBA Solutions</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your sourcing needs..."
                  ></textarea>
                </div>

                <div className="form-agreement">
                  <label>
                    <input type="checkbox" required />
                    I agree to the privacy policy and terms of service
                  </label>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </main>
      </div>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How long does sourcing typically take?</h3>
              <p>Most sourcing projects take 15-30 days from consultation to delivery, depending on quantity and customization requirements.</p>
            </div>
            <div className="faq-item">
              <h3>What is your minimum order quantity?</h3>
              <p>MOQ varies by product and supplier, typically ranging from 50-500 units. We can negotiate for larger orders.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer customization and private labeling?</h3>
              <p>Yes, we specialize in custom branding, packaging design, and private label solutions for most products.</p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept bank transfers, letters of credit, and other secure payment methods. Details are discussed during consultation.</p>
            </div>
            <div className="faq-item">
              <h3>How do you ensure product quality?</h3>
              <p>We perform supplier audits, inspect raw materials, monitor production, and conduct final quality checks before shipment.</p>
            </div>
            <div className="faq-item">
              <h3>Do you provide warranty or guarantees?</h3>
              <p>Yes, all products are guaranteed to meet specifications. We also handle replacements and issues that arise during shipping.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
