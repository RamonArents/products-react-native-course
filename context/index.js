import { createContext, useState, useEffect } from "react";

export const Context = createContext(null);

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getProductsFromApi() {
      const apiRes = await fetch("https://dummyjson.com/products");
      const finalResult = await apiRes.json();
      if (finalResult) {
        setLoading(false);
        setProducts(finalResult.products);
      }
    }

    getProductsFromApi();
  }, []);

  return (
    <Context.Provider value={{ products, loading }}>
      {children}
    </Context.Provider>
  );
};

export default ProductContext;
