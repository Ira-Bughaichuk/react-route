import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from 'components/Router/Router';
import { ProductProvider } from 'components/ProductContext/ProductContext';
export const App = () => {
  return (
    <ProductProvider>
      <Router />;
    </ProductProvider>
  );
};
