import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingpageComponents/LandingPage";
import Login from "./components/Login-Signup/Login";
import Firstpage from "../Firstpage";
import Header from "./components/Header";
import Signup from "./components/Login-Signup/Signup";
import AllProducts from "./components/Products/ProductsPage";
import Footer from "./components/Footer";
import CartPage from "./components/Cart-Flow/CartPage";
import Checkout from "./components/Cart-Flow/Checkout";
import { useState } from "react";
import Logout from "./components/Login-Signup/Logout";
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = async () => {
    try {
      // Call the logout endpoint
      const response = await axios.post("https://kcoat.onrender.com/logout");

      // Check if the logout was successful
      if (response.status === 200) {
        // Update the login/logout state to indicate that the user is logged out
        setIsLoggedIn(false);
      } else {
        // Handle logout error
        console.error("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network error or other errors
      console.error("An unexpected error occurred. Please try again later.");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route element={<Firstpage />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
