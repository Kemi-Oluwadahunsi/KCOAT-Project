// import logo from "../assets/KCOAT.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronDown,
//   faShoppingCart,
//   faUserAlt,
// } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
// import { Link } from "react-router-dom";
// const Header = () => {
//   return (
//     <>
//       <div className="h-20 flex place-content-center justify-around items-center font-primary text-sm px-[4rem] bg-tertiary">
//         <div className="cursor-pointer">
//           <img src={logo} alt="logo" />
//         </div>

//         <ul className="text-color font-oxygen font-medium flex justify-around space-x-4 w-2/4 place-items-center cursor-pointer">
//           <Link to="/">
//             <li>Home</li>
//           </Link>

//           <div className="flex gap-3 place-items-center">
//             <li>Products</li>
//             <FontAwesomeIcon icon={faChevronDown} />
//           </div>

//           <li>New & Featured</li>

//           <li>Contact</li>
//         </ul>

//         <div className="flex gap-1 place-items-center cursor-pointer">
//           <div className="text-primary flex gap-2 place-items-center p-5">
//             <FontAwesomeIcon icon={faUserAlt} />
//             <FontAwesomeIcon icon={faChevronDown} />
//           </div>
//           <FontAwesomeIcon
//             icon={faShoppingCart}
//             color="white"
//             className="text-xl"
//           />
//         </div>

//         <div className="flex gap-5 place-items-center cursor-pointer">
//           <div className="text-primary flex gap-2 place-items-center p-5">
//             <FontAwesomeIcon icon={faUser} />
//             <Link to="/login">
//               <span className="font-bold">Login / Register</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

import { useState } from "react";
import logo from "../assets/KCOAT.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faShoppingCart,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Header = ({ handleSubMenuClick, isLoggedIn, onLogout }) => {
  const [isProductsMenuOpen, setProductsMenuOpen] = useState(false);
  const [isMenSubMenuOpen, setMenSubMenuOpen] = useState(false);
  const [isWomenSubMenuOpen, setWomenSubMenuOpen] = useState(false);

  const openProductsMenu = () => {
    setProductsMenuOpen(true);
  };

  const closeProductsMenu = () => {
    setProductsMenuOpen(false);
  };

  const openMenSubMenu = () => {
    setMenSubMenuOpen(true);
  };

  const closeMenSubMenu = () => {
    setMenSubMenuOpen(false);
  };

  const openWomenSubMenu = () => {
    setWomenSubMenuOpen(true);
  };

  const closeWomenSubMenu = () => {
    setWomenSubMenuOpen(false);
  };

  const handleProductsMenu = () => {
    if (!isProductsMenuOpen) {
      openProductsMenu();
    } else {
      closeProductsMenu();
    }
  };

  const handleMenSubMenu = () => {
    if (!isMenSubMenuOpen) {
      openMenSubMenu();
    } else {
      closeMenSubMenu();
    }
  };

  const handleWomenSubMenu = () => {
    if (!isWomenSubMenuOpen) {
      openWomenSubMenu();
    } else {
      closeWomenSubMenu();
    }
  };

  return (
    <div className="h-20 flex justify-around items-center font-primary text-sm px-[4rem] bg-tertiary fixed w-full z-50">
      <div className="cursor-pointer">
        <img src={logo} alt="logo" />
      </div>

      <ul className="text-color font-oxygen font-medium flex justify-around space-x-4 w-2/4 place-items-center cursor-pointer">
        <Link to="/">
          <li className="text-lg">Home</li>
        </Link>

        <li className="relative" onMouseEnter={handleProductsMenu}>
          <div className="flex gap-3 place-items-center text-lg">
            <span>Products</span>
            <FontAwesomeIcon
              icon={isProductsMenuOpen ? faChevronUp : faChevronDown}
            />
          </div>
          {/* Products Dropdown Menu */}
          {isProductsMenuOpen && (
            <ul
              className="absolute top-full left-0 mt-4 bg-primary border-border rounded-md drop-shadow-xl z-50 w-[15rem]"
              onMouseEnter={openProductsMenu}
              onMouseLeave={closeProductsMenu}
            >
              <li className="pl-3 py-4 font-oxygen font-bold submenu-item">
                <Link to="/all-products">
                  <span>All Products</span>
                </Link>
              </li>

              <li
                className=" submenu-item px-3 py-4 relative border-t-2 border-b-2 border-border flex justify-between font-oxygen font-bold"
                // onMouseEnter={openMenSubMenu}
                // onMouseLeave={closeMenSubMenu}
                onMouseEnter={handleMenSubMenu}
                onMouseLeave={closeMenSubMenu}
              >
                <span>Men</span>
                {/* Men Submenu */}
                {isMenSubMenuOpen && (
                  <ul className="absolute top-0 left-full mt-0  rounded-md drop-shadow-xl z-50 bg-primary font-oxygen font-bold w-[15rem] ">
                    <Link to="/all-products">
                      <li
                        className=" submenu-item px-3 py-4 "
                        onClick={() => handleSubMenuClick("MenWears")}
                      >
                        Wears
                      </li>
                    </Link>

                    <Link to="/all-products">
                      <li
                        className=" submenu-item px-3 py-4 border-t-2 border-b-2 border-border"
                        onClick={() => handleSubMenuClick("MenShoesBags")}
                      >
                        Shoes & Bags
                      </li>
                    </Link>

                    <Link to="/all-products">
                      <li
                        className=" submenu-item px-3 py-4 "
                        onClick={() => handleSubMenuClick("MenAccessories")}
                      >
                        Accessories
                      </li>
                    </Link>
                  </ul>
                )}
                <FontAwesomeIcon
                  icon={isMenSubMenuOpen ? faChevronUp : faChevronDown}
                />
              </li>
              <li
                className=" submenu-item px-3 py-4 relative flex justify-between font-oxygen font-bold"
                // onMouseEnter={openWomenSubMenu}
                // onMouseLeave={closeWomenSubMenu}
                onMouseEnter={handleWomenSubMenu}
                onMouseLeave={closeWomenSubMenu}
              >
                <span>Women</span>
                {/* Women Submenu */}
                {isWomenSubMenuOpen && (
                  <ul className="absolute top-0 left-full mt-0 bg-primary rounded-md drop-shadow-xl z-50 w-[15rem] ">
                    <Link to="/all-products">
                      <li
                        className=" submenu-item px-3 py-4 "
                        onClick={() => handleSubMenuClick("WomenWears")}
                      >
                        Wears
                      </li>
                    </Link>

                    <Link to="/all-products">
                      <li
                        className=" submenu-item px-3 py-4 border-t-2 border-b-2 border-border"
                        onClick={() => handleSubMenuClick("WomenShoesBags")}
                      >
                        Shoes & Bags
                      </li>
                    </Link>

                    <Link to="/all-products">
                      <li
                        className=" submenu-item px-3 py-4"
                        onClick={() => handleSubMenuClick("Women Accessories")}
                      >
                        Accessories
                      </li>
                    </Link>
                  </ul>
                )}
                <FontAwesomeIcon
                  icon={isWomenSubMenuOpen ? faChevronUp : faChevronDown}
                />
              </li>
            </ul>
          )}
        </li>

        <li className="text-lg">New & Featured</li>

        <li className="text-lg"><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="flex gap-1 place-items-center cursor-pointer">
        <div className="text-primary flex gap-2 place-items-center p-5">
          <FontAwesomeIcon icon={faUserAlt} />
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <FontAwesomeIcon
          icon={faShoppingCart}
          color="white"
          className="text-xl"
        />
      </div>

      <div className="flex gap-5 place-items-center cursor-pointer">
        {/* <div className="text-primary flex gap-2 place-items-center p-5">
          <FontAwesomeIcon icon={faUser} />
          <Link to="/login">
            <span className="font-bold">Login / Register</span>
          </Link>
        </div> */}
        {isLoggedIn ? (
          <div
            className="text-primary flex gap-2 place-items-center p-5"
            onClick={onLogout}
          >
            <FontAwesomeIcon icon={faUser} />
            <span className="font-bold">Logout</span>
          </div>
        ) : (
          <div className="text-primary flex gap-2 place-items-center p-5">
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
