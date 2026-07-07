import { ArrowRight, BookOpen } from 'lucide-react';
import '../styles/BlogPage.css';

const WHATSAPP_LINK = 'https://wa.me/8615618483542';

const placeholderPosts = [
  {
    id: 1,
    title: 'How to Source Products from China: A Complete Guide',
    category: 'Sourcing Tips',
    date: 'Coming Soon',
    excerpt: 'Everything you need to know about sourcing products from China — from finding the right supplier to quality control and shipping.'
  },
  {
    id: 2,
    title: 'Understanding Incoterms: FOB, CIF, EXW, DDP Explained',
    category: 'Shipping & Logistics',
    date: 'Coming Soon',
    excerpt: 'A practical breakdown of the most common Incoterms used in international trade and what each means for your shipment.'
  },
  {
    id: 3,
    title: 'Amazon FBA from China: Step-by-Step Process',
    category: 'E-Commerce',
    date: 'Coming Soon',
    excerpt: 'Learn how to source, inspect, label, and ship your products directly from Chinese manufacturers to Amazon FBA warehouses.'
  },
  {
    id: 4,
    title: 'How to Verify a Chinese Supplier Before Ordering',
    category: 'Quality Control',
    date: 'Coming Soon',
    excerpt: 'The key steps to verify a Chinese factory or supplier — background checks, factory audits, certifications, and red flags to watch for.'
  },
  {
    id: 5,
    title: 'OEM vs ODM: Which is Right for Your Business?',
    category: 'Product Development',
    date: 'Coming Soon',
    excerpt: 'Understand the difference between OEM and ODM manufacturing models and which approach suits your sourcing strategy.'
  },
  {
    id: 6,
    title: 'Going Global: Digital Strategy for Chinese Manufacturers',
    category: 'Business Strategy',
    date: 'Coming Soon',
    excerpt: 'How Chinese manufacturers can leverage digital marketing, SEO, and social media to reach international buyers and grow globally.'
  }
];

export default function BlogPage({ onNavigate }) {
  return (
    <div className="blog-page">
      {/* Header */}
      <div className="blog-header">
        <h1>Insights &amp; Resources</h1>
        <p>Expert guides, tips, and updates on global sourcing, supply chain management, and international trade.</p>
      </div>

      {/* Coming Soon Banner */}
      <section className="blog-coming-soon">
        <div className="container">
          <div className="coming-soon-box">
            <BookOpen size={48} />
            <h2>Blog Coming Soon</h2>
            <p>
              We're preparing in-depth articles and guides on sourcing from China, quality control,
              shipping, and international trade. Check back soon!
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              💬 Ask Us Anything on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Articles */}
      <section className="blog-upcoming">
        <div className="container">
          <h2>Upcoming Articles</h2>
          <div className="blog-grid">
            {placeholderPosts.map(post => (
              <div key={post.id} className="blog-card">
                <div className="blog-card-category">{post.category}</div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-card-footer">
                  <span className="blog-date">{post.date}</span>
                  <button className="blog-read-more" disabled>
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="blog-cta">
        <div className="container">
          <div className="blog-cta-box">
            <h2>Have a Sourcing Question?</h2>
            <p>Don't wait for the articles — reach out to our team directly for personalized guidance.</p>
            {onNavigate && (
              <button className="btn btn-primary" onClick={() => onNavigate('contact')}>
                Contact Our Team <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
