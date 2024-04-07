
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingpageComponents/LandingPage";
import Login from "./components/Login-Signup/Login";
import Firstpage from "../Firstpage";
import Header from "./components/Header";
import Signup from "./components/Login-Signup/Signup";
import AllProducts from "./components/Products/ProductsPage";
import Contact from "./components/Contact";
import Reset from "./components/Reset";
import Forget from "./components/Forget";



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
          <Route path="/contact" element={<Contact />} />
          <Route path="/Reset" element={<Reset/>} />
          <Route path="/Forget" element={<Forget/>} />
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
