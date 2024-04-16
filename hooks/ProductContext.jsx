import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [mostPopularProducts, setMostPopularProducts] = useState([]);


  const login = () => {
    // Perform login logic
    setIsLoggedIn(true);
  };

  const logout = async () => {
    try {
      await axios.post("https://kcoat.onrender.com/logout");
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // useEffect(() => {
  //   const MostPopularProduct = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://kcoat.onrender.com/products/most-popular-products"
  //       );
  //       // console.log("Most Popular Products:", response.data);
  //       setMostPopularProducts(response.data);
  //     } catch (error) {
  //       // console.error("Error fetching product:", error)
  //     }
  //   };
  //   MostPopularProduct();
  // }, []);

  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://kcoat.onrender.com/products");
        console.log("Products:", response.data); // Log response data
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error); // Log error
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const fetchProductById = async (productId) => {
    try {
      const response = await axios.get(
        `https://kcoat.onrender.com/products/${productId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      return null;
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        setLoading,
        fetchProductById,
        isLoggedIn,
        login,
        logout,
        // mostPopularProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
