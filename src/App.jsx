import { Routes, Route, useLocation, } from "react-router-dom";
import LandingPage from "./components/LandingpageComponents/LandingPage";
import Login from "./components/Login-Signup/Login";
import Firstpage from "../Firstpage";
import Header from "./components/LandingpageComponents/Header";
import Signup from "./components/Login-Signup/Signup";
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
import AboutUs from "./components/StaticComponents/AboutUs";
import PaymentSuccessPage from "./components/Cart-Flow/PaymentSuccessPage";
import NewFeatured from "./components/Products/NewFeatured";
import AdminManagepage from "./components/Admin/AdminManagepage";
import AdminLogin from "./components/Admin/AdminLogin";
import { useContext, useEffect,  } from "react";
import { ProductContext } from "../hooks/ProductContext";
import ProductsPage from "./components/Products/ProductsPage";
import NavBar from "./components/LandingpageComponents/NavBar";


function App() {
  //  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   navigate(location.pathname);
  //   window.scrollTo(0, 0);
  // }, [location.pathname, navigate]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const { customerId, isLoggedIn } = useContext(ProductContext);
  return (
    <>
      <NavBar />
      <Header customerId={customerId} isLoggedIn={isLoggedIn} />
      <ScrollArrow />
      <Routes>
        <Route element={<Firstpage />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
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
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
        <Route
          path="/most-popular-product"
          element={<MostPopularProductPage />}
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/new-featured" element={<NewFeatured />} />
        <Route path="/kcoat/*" element={<AdminManagepage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/all-products" element={<ProductsPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
