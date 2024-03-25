// <<<<<<< sayo
// import logo from '../assets/KCOAT.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
// import Button from './Button'
// =======
// import logo from "../assets/KCOAT.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
// >>>>>>> main
// const Header = () => {
//   let Links = [
//     {name: "Featured",link:"/"},
//     {name: "Men",link:"/"},
//     {name: "Women",link:"/"},
//     {name: "Accessories",link:"/"},
//     {name: "Contact",link:"/"},
   
//   ];
//   return (
//     <>
// <<<<<<< sayo
      
//      <div className="p-3 md:flex  md:justify-between">
//         <div>
// =======
//       <div className="h-20 flex place-content-center justify-around items-center font-primary text-sm px-[4rem] bg-tertiary">
//         <div className="cursor-pointer">
// >>>>>>> main
//           <img src={logo} alt="logo" />
//         </div>
//         <ul className='flex p-0 justify-center items-start gap-x-8 flex-1'>
//           {
//             Links.map((link)=>(
//               <li key={link.name} className='mx-4 my-6 md:my-0'>
//                 <a href="{link.name}">{link.name}</a>
//                 {(link.name === "Men" || link.name === "Women" || link.name === "Accessories") && <FontAwesomeIcon icon={faChevronDown} className='ml-1' />}
//               </li>
//             ))
//           }
         
//         </ul>
//         <div>
//          <a href="/">Log In</a>
//           <Button href="/"></Button>
//         </div>
        

// <<<<<<< sayo
//        {/* <ul className="md:flex md:items-center md:z-auto md:static absolute w-full left-0 md:w-auto  md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
      
//           <li className="mx-4 my-6 md:my-0">Featured</li>
        
//           <div className='flex'>
//             <li className='mx-4 my-6 md:my-0'>Men</li>
//             <FontAwesomeIcon icon={faChevronDown} className='ml-1'/>
//           </div>

//           <div className='flex'>
//             <li className='mx-4 my-6 md:my-0'>Women</li>
//             <FontAwesomeIcon icon={faChevronDown} className='ml-1'/>
//           </div>
//           <div className='flex'>
//             <li className='mx-4 my-6 md:my-0'>Accessories</li>
//             <FontAwesomeIcon icon={faChevronDown}  className='ml-1'/>
// =======
//         <ul className="text-bland font-secondary font-medium flex justify-around space-x-4 w-2/4 place-items-center cursor-pointer">
//           <li>Featured</li>

//           <div className="flex gap-3 place-items-center">
//             <li>Men</li>
//             <FontAwesomeIcon icon={faChevronDown} />
//           </div>

//           <div className="flex gap-3 place-items-center">
//             <li>Women</li>
//             <FontAwesomeIcon icon={faChevronDown} />
//           </div>
//           <div className="flex gap-3 place-items-center">
//             <li>Accessories</li>
//             <FontAwesomeIcon icon={faChevronDown} />
// >>>>>>> main
//           </div>
//           <li className='mx-4 my-6 md:my-0'>Contact</li>
          
//         </ul>
// <<<<<<< sayo
//         <div className='space-x-4'>
//         <a href="#" className=''>Log In</a>
  
//         </div>
//   */}
// =======

//         <div className="flex gap-5 place-items-center cursor-pointer">
//           <div className="text-primary flex gap-2 place-items-center p-5">
//             <FontAwesomeIcon icon={faUser} />
//             <span className="font-bold">Login / Register</span>
//           </div>
//           <FontAwesomeIcon icon={faShoppingCart} color="white" className="text-xl"/>
//         </div>
// >>>>>>> main
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

const Header = ({ handleSubMenuClick }) => {
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

        <li className="text-lg">Contact</li>
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
        <div className="text-primary flex gap-2 place-items-center p-5">
          <FontAwesomeIcon icon={faUser} />
          <Link to="/login">
            <span className="font-bold">Login / Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
