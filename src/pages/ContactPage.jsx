import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Globe } from 'lucide-react';
import SocialIcon from '../components/SocialIcons';
import '../styles/ContactPage.css';

const WHATSAPP_NUMBER = '8615618483542';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const WHATSAPP_NUMBER_PK = '923077433743';
const WHATSAPP_LINK_PK = `https://wa.me/${WHATSAPP_NUMBER_PK}`;

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
      icon: MapPin,
      title: 'Address',
      details: 'Lotus Tower, No. 150 Tianzhou Road, Shanghai 200032, China'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@noviousglobal.com',
      link: 'mailto:info@noviousglobal.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+86 15618483542',
      link: 'tel:+8615618483542'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp (China)',
      details: '+86 156 1848 3542',
      link: WHATSAPP_LINK
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp (Pakistan)',
      details: '+92 307 7433743',
      link: WHATSAPP_LINK_PK
    },
    {
      icon: Globe,
      title: 'Website',
      details: 'noviousglobal.com',
      link: 'https://noviousglobal.com'
    }
  ];

  const socialLinks = [
    { label: 'YouTube', href: 'https://www.youtube.com/@NoviousGlobal', icon: 'youtube' },
    { label: 'Instagram', href: 'https://www.instagram.com/chinasourcing_?igsh=OHN0NXdpNGxpcTBq&utm_source=qr', icon: 'instagram' },
    { label: 'Facebook', href: 'https://www.facebook.com/noviousglobalsourcingchina', icon: 'facebook' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@novious.global.china', icon: 'tiktok' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/novious-global-sourcing-from-china/', icon: 'linkedin' }
  ];

  const faqs = [
    {
      question: 'What services do you offer for product sourcing?',
      answer: 'We provide end-to-end product sourcing services, including supplier identification, factory verification, quotation collection, price negotiation, sample coordination, and quality inspection to help businesses source reliable products from China and other markets.'
    },
    {
      question: 'How do you ensure the quality of products from suppliers?',
      answer: 'Our team performs pre-shipment inspections, in-process quality checks, and factory audits to ensure that every product meets your quality standards. We also assist in sample review and compliance verification before mass production.'
    },
    {
      question: 'Can you help with Amazon FBA or e-commerce fulfillment?',
      answer: 'Yes! We offer specialized FBA and e-commerce solutions, including product sourcing, supplier verification, packaging and labeling guidance, shipping to Amazon warehouses, and logistics coordination to help online sellers streamline their operations.'
    },
    {
      question: 'Do you provide support for large or project-based sourcing?',
      answer: 'Absolutely. Our Project-Based Services include personalized consultations, factory visits, supplier meetings, contract support, price negotiation, and end-to-end project management, ensuring smooth execution from production to shipment.'
    },
    {
      question: 'How do I get a quotation for my sourcing requirements?',
      answer: 'You can share your project details with us through our contact form or consultation call. Once we understand your requirements, we provide a transparent quotation tailored to your product specifications, quantity, and sourcing complexity.'
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
                    <a href={info.link} className="info-link" target={info.title.startsWith('WhatsApp') ? '_blank' : undefined} rel="noopener noreferrer">{info.details}</a>
                  ) : (
                    <p>{info.details}</p>
                  )}
                </div>
              </div>
            );
          })}

          {/* WhatsApp CTA */}
          <div className="whatsapp-section">
            <h3>Quick Message</h3>
            <p>Chat with us on WhatsApp for faster response</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* Social Media */}
          <div className="social-section">
            <h3>Follow Us</h3>
            <div className="social-links-list">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link-item">
                  <SocialIcon name={s.icon} size={28} />
                  {s.label}
                </a>
              ))}
            </div>
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
                    <option value="ecommerce">E-Commerce Fulfillment</option>
                    <option value="project">Project-Based Service</option>
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

      {/* Real Photos Grid */}
      <section className="contact-gallery-section">
        <div className="container">
          <h2>Meet Us on the Ground in China</h2>
          <p className="section-subtitle">Real visits with our clients and manufacturing partners</p>
          <div className="contact-gallery-grid">
            <img src="/images/real/contact-grid-1.jpg" alt="Client visit in China" />
            <img src="/images/real/contact-grid-2.jpg" alt="Supplier factory visit" />
            <img src="/images/real/contact-grid-3.jpg" alt="Client facility visit and project briefing" />
            <img src="/images/real/contact-grid-4.jpg" alt="Client meeting at Novious Global office" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
