
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingpageComponents/LandingPage";
import Login from "./components/Login-Signup/Login";
import Firstpage from "../Firstpage";
import Header from "./components/Header";
import Signup from "./components/Login-Signup/Signup";
import AllProducts from "./components/Products/ProductsPage";
import CartPage from "./components/Cart-Flow/CartPage";
import Checkout from "./components/Cart-Flow/Checkout";



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route element={<Firstpage />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
