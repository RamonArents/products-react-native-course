import { createContext, useState, useEffect } from "react";

const Context = createContext(null);

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProductsFromApi() {
      const apiRes = await fetch("https://dummyjson.com/products");
      const finalResult = await apiRes.json();
      if (finalResult) {
        setProducts(finalResult.products);
      }
    }

    getProductsFromApi();
  }, []);

  console.log(products);

  return <Context.Provider>{children}</Context.Provider>;
};

export default ProductContext;
