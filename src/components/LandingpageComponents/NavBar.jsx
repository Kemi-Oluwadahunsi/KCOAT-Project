import { ProductContext } from "../../../hooks/ProductContext";

import logo from "../../assets/KCOAT.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingCart,
  faTimes,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../hooks/CartContext";

//isLoggedIn, onLogout
const Header = () => {
  const { isLoggedIn, logout } = useContext(ProductContext);

  const { cartCount } = useContext(CartContext);
  const [showMobileContent, setShowMobileContent] = useState(false);

  const toggleMobileContent = () => {
    setShowMobileContent(!showMobileContent);
  };

  const closeMobileContent = () => {
    setShowMobileContent(false);
    // scrollToTop()
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector(".small-screens");
      if (navbar && !navbar.contains(event.target)) {
        closeMobileContent();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="small-screens flex flex-col  justify-around items-end font-primary text-sm fixed w-full z-50 md:hidden lg:hidden">
      <div className="flex justify-between items-center w-full h-16 bg-tertiary px-5">
        <Link to="/">
          <div className="cursor-pointer w-[5rem]">
            <img src={logo} alt="logo" />
          </div>
        </Link>

        <Link to="/cart">
          <div className="relative flex items-center ml-[9em] ">
            <FontAwesomeIcon
              icon={faShoppingCart}
              color="white"
              className="text-2xl"
            />
            <button
              className={`absolute -top-3 left-4 bg-primary text-tertiary px-[0.3em] rounded-full font-bold`}
            >
              {cartCount}
            </button>
          </div>
        </Link>

        <div className="toggleButton">
          <button onClick={toggleMobileContent} className="border-0">
            {showMobileContent ? (
              <FontAwesomeIcon
                icon={faTimes}
                className="times text-[2rem] text-tertiary2"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="times text-[2rem] text-tertiary2"
              />
            )}
          </button>
        </div>
      </div>

      <div
        className={` ${
          showMobileContent ? "visible" : "hidden"
        } flex flex-col  text-primary h-[30rem] z-[999] bg-[#FD6905] w-3/4 pb-4 transition-all ease-in-out duration-100 rounded-bl-xl`}
      >
        <ul
          className=" font-oxygen font-medium flex flex-col justify-around h-[80%]
         place-items-center cursor-pointer"
        >
          <Link to="/" onClick={closeMobileContent}>
            <li className="text-lg">Home</li>
          </Link>

          <Link to="/all-products" onClick={closeMobileContent}>
            <li className="text-lg">Products</li>
          </Link>

          <Link to="/new-featured" onClick={closeMobileContent}>
            <li className="text-lg">New & Featured</li>
          </Link>

          <li className="text-lg" onClick={closeMobileContent}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex flex-col gap-1 place-items-center cursor-pointer">
          {isLoggedIn && (
            <Link to={`/user-profile`} onClick={closeMobileContent}>
              <div className="text-primary flex gap-2 place-items-center p-5">
                <div>
                  <FontAwesomeIcon icon={faUserAlt} />
                </div>
                <p>User Profile</p>
              </div>
            </Link>
          )}

          <div className="flex gap-5 place-items-center cursor-pointer">
            {isLoggedIn ? (
              <div
                className="text-primary flex gap-2 place-items-center p-5"
                onClick={logout}
              >
                <FontAwesomeIcon icon={faUser} />
                <span className="font-bold" onClick={closeMobileContent}>
                  Logout
                </span>
              </div>
            ) : (
              <div
                className="text-primary flex gap-2 place-items-center p-5"
                onClick={() => console.log(isLoggedIn)}
              >
                <FontAwesomeIcon icon={faUser} />
                <Link to="/login">
                  <span className="font-bold" onClick={closeMobileContent}>
                    Login / Register
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Header;
