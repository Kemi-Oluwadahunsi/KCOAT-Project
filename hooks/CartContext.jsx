// import axios from "axios";
import { createContext, useState,useContext } from "react";

// Create a new context for managing the cart
export const CartContext = createContext();
export const useQuantity = () => useContext(CartContext);
// Cart Provider component
export const CartProvider = ({ children }) => {
  // State to hold cart items
  const [cartItems, setCartItems] = useState([]);
  // const [pquantity, setPQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = async (product, quantity ) => {
    
    try {
      if (!product) {
        console.error("Product is null or undefined");
        return;
      }
      // Check if the product is already in the cart
      const existingItemIndex = cartItems.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex !== -1) {
        // If the product is already in the cart, update its quantity
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantity += quantity;
        setCartItems(updatedCartItems);
      } else {
        // If the product is not in the cart, add it with quantity 1
        setCartItems([...cartItems, { ...product, quantity }]);
        setCartCount(cartCount + 1);
      }
       console.log("Item added to cart:", { ...product, quantity });
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  // Function to remove an item from the cart
  const removeCartItemById = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
    setCartCount((prevCount) => prevCount - 1);
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
    setCartCount(0); // Reset cart count
  };
  // Function to get the count of items in the cart
  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item, 0);
  };

  const updateCartItemQuantity = (productId, quantity) => {
    // Find the item in the cart by productId
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // Value object to provide to consumers of the CartContext
  const value = {
    cartItems,
    setCartItems,
    addToCart,
    removeCartItemById,
    clearCart,
    getCartCount,
    updateCartItemQuantity,
    cartCount  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
