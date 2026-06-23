import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BusinessStrategyPage from './pages/BusinessStrategyPage';
import BlogPage from './pages/BlogPage';
import ServicesPage from './pages/ServicesPage';
import ProjectBasePage from './pages/ProjectBasePage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleNavigate = (page, category = null, product = null) => {
    setCurrentPage(page);
    setSelectedCategory(category);
    setSelectedProduct(product);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'products':
        return <ProductsPage onSelectProduct={(prod) => handleNavigate('product-detail', selectedCategory, prod)} />;
      case 'product-detail':
        return <ProductDetailPage product={selectedProduct} onBack={() => handleNavigate('products')} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'business-strategy':
        return <BusinessStrategyPage onNavigate={handleNavigate} />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'project-base':
        return <ProjectBasePage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
