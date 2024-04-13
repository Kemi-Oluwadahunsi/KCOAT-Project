import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingpageComponents/LandingPage";
import Login from "./components/Login-Signup/Login";
import Firstpage from "../Firstpage";
import Header from "./components/LandingpageComponents/Header";
import Signup from "./components/Login-Signup/Signup";
import AllProducts from "./components/Products/ProductsPage";
import Contact from "./components/Contact";
import Reset from "./components/Password/Reset";
import Forget from "./components/Password/Forget";
import Footer from "./components/LandingpageComponents/Footer";
import CartPage from "./components/Cart-Flow/CartPage";
import Checkout from "./components/Cart-Flow/Checkout";
import PrivacyPolicy from "./components/StaticComponents/PrivacyPolicy";
import SingleProductsPage from "./components/Cart-Flow/SingleProductsPage";
import ScrollArrow from "./components/StaticComponents/ScrollArrow";
import MainProfile from "./components/UserProfile/MainProfile";
import EditProfile from "./components/UserProfile/EditProfile";
import MostPopularProductPage from "./components/LandingpageComponents/MostPopularProductSections/MostPopularProductPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollArrow />
        <Routes>
          <Route element={<Firstpage />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Reset" element={<Reset />} />
          <Route path="/Forget" element={<Forget />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="products/:Productid" element={<SingleProductsPage />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/user-profile" element={<MainProfile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/most-popular-product" element={<MostPopularProductPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
