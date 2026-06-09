# Novious Global Website

A professional, modern, responsive front-end website for **Novious Global Co.**, a B2B sourcing and supply chain company connecting international buyers with reliable Chinese manufacturers.

## 🚀 Project Overview

This is a **production-ready** React-based single-page application (SPA) built with:
- **React 19** for component-based architecture
- **Vite 8** for fast development and optimized production builds
- **Lucide React** for 20+ high-quality SVG icons
- **Pure CSS3** with modern design patterns and responsive layouts
- **100% Front-End** (no backend dependencies for initial deployment)

## 📦 What's Included

### Pages
1. **Homepage** - Hero section, value propositions, how it works, featured products, services, testimonials, CTA
2. **Products** - Advanced filtering, search, grid/list view toggle, 12 sample products
3. **Product Details** - Full product information, specifications, related products, contact CTA
4. **About** - Company mission, stats, values, team, global network
5. **Contact** - Contact form, multiple contact methods, FAQ section

### Components
- **Header** - Sticky navigation with mobile menu and search
- **Footer** - Multi-column footer with links and contact info
- **Hero Section** - Eye-catching hero with floating animations
- **Value Props** - 4 key value propositions
- **How It Works** - Step-by-step process visualization
- **Featured Products** - Product showcase grid
- **Services** - Service offerings grid
- **Testimonials** - Client feedback cards
- **CTA Sections** - Multiple call-to-action sections

## 🎨 Design Features

- **Color Scheme**: Red (#E63946), Navy Blue (#1B3A6B), Gold Accent (#D4AF37)
- **Typography**: Modern Montserrat headers with system fonts for body
- **Responsive**: Fully responsive from mobile (320px) to 4K displays
- **Animations**: Smooth transitions, hover effects, floating animations
- **Accessibility**: WCAG AA compliant, keyboard navigation, focus states

## 📱 Responsive Breakpoints

- **Desktop**: 1400px max-width (optimized layout)
- **Tablet**: 768px (adjusted grid columns and spacing)
- **Mobile**: 480px (mobile-first, single column layouts)

## 🛠 Getting Started

### Prerequisites
- Node.js 16+ (recommended: Node 18 or 20)
- npm 7+ or yarn

### Installation

```bash
cd novious-website
npm install
```

### Development

```bash
npm run dev
```

The dev server will start at `http://localhost:5173` with hot module replacement (HMR).

### Production Build

```bash
npm run build
```

Creates optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

Locally preview the production build before deployment.

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── ValuePropsSection.jsx
│   ├── HowItWorksSection.jsx
│   ├── FeaturedProductsSection.jsx
│   ├── ServicesSection.jsx
│   ├── TestimonialsSection.jsx
│   └── CTASection.jsx
├── pages/               # Full page components
│   ├── HomePage.jsx
│   ├── ProductsPage.jsx
│   ├── ProductDetailPage.jsx
│   ├── AboutPage.jsx
│   └── ContactPage.jsx
├── styles/             # CSS stylesheets
│   ├── index.css       # Global styles and CSS variables
│   ├── Header.css
│   ├── Footer.css
│   ├── (component-specific styles)
│   └── (page-specific styles)
├── App.jsx            # Main app component with routing
├── App.css            # App-level styles
└── main.jsx           # React entry point
```

## 🎯 Key Features

### Navigation
- Sticky header with active state indicators
- Mobile hamburger menu
- Expandable search functionality
- Footer with multiple link sections

### Product Management
- Product grid with filtering options
- Category-based filtering (10+ categories)
- Price range filtering
- Search by product name
- Grid/List view toggle
- Detailed product pages with specifications

### Forms & Input
- Contact form with validation UI
- Form state management
- Success message feedback
- Multiple form field types (text, email, select, textarea)

### Content Sections
- Hero section with animated graphics
- Value proposition cards
- Step-by-step process visualization
- Service offerings grid
- Client testimonials
- FAQ section
- Team member profiles

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly button sizes
- Optimized images and assets
- Fast load times

## 🎨 Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --primary: #E63946;
  --secondary: #1B3A6B;
  --accent: #D4AF37;
  /* ... more colors ... */
}
```

### Content
- Update mock data in component files
- Replace placeholder images with real product images
- Modify text content directly in JSX
- Update company information in About and Contact pages

### Layout
- Adjust `--spacing-*` variables for spacing
- Modify `--radius-*` variables for border radius
- Update breakpoints in CSS media queries

## 📝 Mock Data

The website uses sample/mock data for:
- **Products**: 12 sample products with prices and MOQs
- **Services**: 6 core service offerings
- **Testimonials**: 3 client testimonials
- **Team Members**: 4 team member profiles
- **FAQ**: 6 frequently asked questions

Replace with real data by connecting to an API.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Then deploy the dist/ folder to Vercel
```

### Netlify
```bash
# Connect your GitHub repo to Netlify
# Set build command: npm run build
# Set publish directory: dist
```

### Other Platforms
- GitHub Pages
- AWS S3 + CloudFront
- Azure Static Web Apps
- Google Cloud Storage
- Any static hosting service

The `dist/` folder contains all the files needed for deployment.

## 🔍 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Chrome Mobile

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Focus states for all interactive elements
- High contrast text (WCAG AA compliant)
- Readable font sizes

## 📊 Performance

- Lightning-fast dev server with Vite HMR
- Minified CSS/JS in production
- Optimized bundle size
- Lazy loading for images
- Smooth animations using CSS transforms
- Mobile-optimized
- Fast First Contentful Paint (FCP)

## 🛣 Future Roadmap

When backend is ready, implement:
1. Real product database integration
2. User authentication
3. Shopping cart and checkout
4. Order tracking
5. Blog and news section
6. Email notifications
7. CRM integration for leads
8. Analytics dashboard
9. Multi-language support
10. Advanced search and filtering

## 📞 Contact Information

- **Email**: info@noviousglobal.com
- **Phone**: +86 15618483542
- **WhatsApp**: +923077433743
- **Address**: Lotus Tower, No. 159 Tianzhou Road, Shanghai 200032, China

## 📄 License

This project is proprietary and confidential to Novious Global Co. Ltd.

## 🤝 Support

For questions or issues with the website, please contact the development team.

---

**Built with ❤️ using React, Vite, and modern web technologies**

*Last updated: June 9, 2026*
