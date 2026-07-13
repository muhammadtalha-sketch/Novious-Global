import useIsMobile from '../hooks/useIsMobile';
import ProductsPage from './ProductsPage';
import MobileProductsPage from './MobileProductsPage';

/**
 * Chooses the Products experience by viewport:
 *   - Mobile (<=768px) -> MobileProductsPage (mobile-first UX)
 *   - Desktop          -> ProductsPage (unchanged existing page)
 *
 * Only one is mounted at a time, so there is no duplicate rendering.
 * Both read the same product data from src/data/products.js.
 */
export default function ProductsPageResponsive(props) {
  const isMobile = useIsMobile(768);
  return isMobile ? <MobileProductsPage {...props} /> : <ProductsPage {...props} />;
}
