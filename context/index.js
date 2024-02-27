import { createContext, useState, useEffect } from "react";

export const Context = createContext(null);

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [favoriteItems, setFavoriteItems] = useState([]);

  const addToFavorites = (productId, reason) => {
    let cpyFavoriteItems = [...favoriteItems];
    const index = cpyFavoriteItems.findIndex((item) => item.id === productId);

    if (index === -1) {
      const getCurrentProductItem = products.find(
        (item) => item.id === productId
      );
      cpyFavoriteItems.push({
        title: getCurrentProductItem.title,
        id: productId,
        reason,
      });
    } else {
      cpyFavoriteItems[index] = {
        ...cpyFavoriteItems[index],
        reason,
      };
    }

    setFavoriteItems(cpyFavoriteItems);
  };

  const handleRemoveFavorites = (getCurrentId) => {
    let cpyFavoriteItems = [...favoriteItems];

    cpyFavoriteItems = cpyFavoriteItems.filter(
      (item) => item.id !== getCurrentId
    );
    setFavoriteItems(cpyFavoriteItems);
  };

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
    <Context.Provider
      value={{
        products,
        loading,
        addToFavorites,
        handleRemoveFavorites,
        favoriteItems,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ProductContext;
