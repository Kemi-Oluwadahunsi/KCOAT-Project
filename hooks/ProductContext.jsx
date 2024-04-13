import { createContext, useState, useEffect, } from "react";
import axios from "axios";

export const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    // Perform login logic
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Perform logout logic
    setIsLoggedIn(false);
  };

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
      value={{ products, loading, setLoading, fetchProductById, isLoggedIn, login, logout }}
    >
      {children}
    </ProductContext.Provider>
  );
};