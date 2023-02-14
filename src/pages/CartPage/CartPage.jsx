import { Product } from 'components/Product/Product';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ProductConext } from 'components/ProductContext/ProductContext';

export const CartPage = () => {
  const location = useLocation();
  console.log(location);
  const { cart, setCart } = useContext(ProductConext);

  return (
    <ul>
      {cart.map(item => (
        <Product product={item} path={location.pathname} setProduct={setCart} />
      ))}
    </ul>
  );
};
