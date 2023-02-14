import { useState } from 'react';
import { createContext } from 'react';
export const ProductConext = createContext();
//cart -споживчий кошик

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <ProductConext.Provider value={{ cart, setCart }}>
      {children}
    </ProductConext.Provider>
  );
};
