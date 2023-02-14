import { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';

import { Product } from '../../components/Product/Product';
import { getProduct } from 'services/productAPI';
import { ProductConext } from 'components/ProductContext/ProductContext';

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);

  const location = useLocation();
  console.log(location);

  const { setCart } = useContext(ProductConext);
  
  useEffect(() => {
    const fetchProduct = async () => {
      setIsDisabled(true);
      const response = await getProduct({ page });
      console.log(response);
      setProducts(response);
      setIsDisabled(false);
    };

    fetchProduct();
  }, [page]);

  return (
    <>
      <ul>
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            path={location.pathname}
            setProduct={ setCart}
          />
        ))}
      </ul>
      <Button
        type="button"
        onClick={() => setPage(prev => prev + 1)}
        disabled={isDisabled}
      >
        Load More
      </Button>
    </>
  );
};
