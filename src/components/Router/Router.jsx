import { Routes, Route } from 'react-router-dom';
import { ProductsPage } from 'pages/ProductsPage/ProductsPage';
import { CartPage } from 'pages/CartPage/CartPage';
import { PageNotFound } from 'pages/PageNotFound/PageNotFound';
import { WelcomePage } from 'pages/WelcomePage/WelcomePage';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
