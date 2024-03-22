
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingpageComponents/LandingPage";
import Login from "./components/Login-Signup/Login";
import Firstpage from "../Firstpage";
import Header from "./components/Header";
import Signup from "./components/Login-Signup/Signup";
import CategoryCard from "./components/CategoryCard";


function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
    <CategoryCard />
        <Routes>
          <Route element={<Firstpage />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
