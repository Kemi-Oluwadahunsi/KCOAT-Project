import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProductProvider } from "../hooks/ProductContext";
import { CartProvider } from "../hooks/CartContext";
import { BrowserRouter } from "react-router-dom";
import { AdminContextProvider } from "../hooks/AdminContextPage";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> 
        <ProductProvider>
          <CartProvider>
            <AdminContextProvider>
             <App />
            </AdminContextProvider>
          </CartProvider>
        </ProductProvider>
      
    </BrowserRouter>
  </React.StrictMode>
);
