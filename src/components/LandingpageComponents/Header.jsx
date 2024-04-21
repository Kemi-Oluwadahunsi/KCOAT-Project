import { ProductContext } from "../../../hooks/ProductContext";

import logo from "../../assets/KCOAT.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../hooks/CartContext";

//isLoggedIn, onLogout
const Header = () => {
  const { isLoggedIn, logout } = useContext(ProductContext);

  const { cartCount } = useContext(CartContext);

  return (
    <div className="sm:hidden xs:hidden h-20 flex justify-around items-center font-primary text-sm px-[4rem] bg-tertiary fixed w-full z-50">
      <div className="cursor-pointer">
        <img src={logo} alt="logo" />
      </div>

      <ul className="text-color font-oxygen font-medium flex justify-around space-x-4 w-2/4 place-items-center cursor-pointer">
        <Link to="/">
          <li className="text-lg relative">Home</li>
        </Link>

        <Link to="/all-products">
          <li className="text-lg relative">Products</li>
        </Link>

        <Link to="/new-featured">
          <li className="text-lg relative">New & Featured</li>
        </Link>

        <Link to="/contact">
          <li className="text-lg relative">Contact</li>
        </Link>
      </ul>

      <div className="flex gap-1 place-items-center cursor-pointer">
        {isLoggedIn && (
          <div className="text-primary flex gap-2 place-items-center p-5">
            <Link to={`/user-profile`}>
              <div>
                <FontAwesomeIcon icon={faUserAlt} />
              </div>
            </Link>
          </div>
        )}

        <Link to="/cart">
          <div className="relative flex items-center justify-center">
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
      </div>

      <div className="flex gap-5 place-items-center cursor-pointer">
        {isLoggedIn ? (
          <div
            className="text-primary flex gap-2 place-items-center p-5"
            onClick={logout}
          >
            <FontAwesomeIcon icon={faUser} />
            <span className="font-bold">Logout</span>
          </div>
        ) : (
          <div
            className="text-primary flex gap-2 place-items-center p-5"
            onClick={() => console.log(isLoggedIn)}
          >
            <FontAwesomeIcon icon={faUser} />
            <Link to="/login">
              <span className="font-bold">Login / Register</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
