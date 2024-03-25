import products from "./AllproductsItems/allproducts";
import menWears from "./MenItems/menwears";
import womenWears from "./WomenItems/womenwears";
import menShoesBags from "./MenItems/menshoes";
import womenShoesBags from "./WomenItems/womenshoes";
import menAccessories from "./MenItems/menaccessories";
import womenAccessories from "./WomenItems/womenaccessories";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const Submenu = ({ setSelectedProducts }) => {
  const [isMenSubMenuOpen, setMenSubMenuOpen] = useState(false);
  const [isWomenSubMenuOpen, setWomenSubMenuOpen] = useState(false);

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


  const handleSubMenuClick = (submenu) => {
    switch (submenu) {
      case "AllProducts":
        setSelectedProducts(products);
        break;
      case "MenWears":
        setSelectedProducts(menWears);
        break;
      case "MenShoesBags":
        setSelectedProducts(menShoesBags);
        break;
      case "MenAccessories":
        setSelectedProducts(menAccessories);
        break;
      case "WomenWears":
        setSelectedProducts(womenWears);
        break;
      case "WomenShoesBags":
        setSelectedProducts(womenShoesBags);
        break;
      case "WomenAccessories":
        setSelectedProducts(womenAccessories);
        break;
      default:
        setSelectedProducts([]);
        break;
    }
  };

  return (
    <ul className="flex flex-col gap-[3em] font-oxygen w-full">
      <div className="openHr flex flex-col gap-[1em] cursor-pointer ">
        <li onClick={() => handleSubMenuClick("AllProducts")}>
          <span>All Products</span>
          <hr className="w-[50%] bg-tertiary h-[0.2rem] hidden" />
        </li>
      </div>

      <div className="openHr flex flex-col gap-[1em] cursor-pointer">
        <li
          className="flex flex-col justify-between "
          onMouseEnter={openMenSubMenu}
          onMouseLeave={closeMenSubMenu}
        >
          <div className="flex justify-between items-center">
            <span>Men</span>

            <FontAwesomeIcon
              icon={isMenSubMenuOpen ? faChevronUp : faChevronDown}
            />
          </div>

          {isMenSubMenuOpen && (
            <ul className="flex flex-col gap-[1em]">
              <li
                className=" submenu-item px-3 py-4 active:bg-tertiary"
                onClick={() => handleSubMenuClick("MenWears")}
              >
                <span>Wears</span>
              </li>
              <li
                className=" submenu-item px-3 py-4 border-t-2 border-b-2 border-border"
                onClick={() => handleSubMenuClick("MenShoesBags")}
              >
                <span>Shoes & Bags</span>
              </li>
              <li
                className=" submenu-item px-3 py-4"
                onClick={() => handleSubMenuClick("MenAccessories")}
              >
                <span>Accessories</span>
              </li>
            </ul>
          )}
        </li>

        <hr className="w-[50%] bg-tertiary h-[0.2rem] hidden" />
      </div>

      <div className="openHr flex flex-col gap-[1em] cursor-pointer">
        <li
          className="flex flex-col justify-between"
          onMouseEnter={openWomenSubMenu}
          onMouseLeave={closeWomenSubMenu}
        >
          <div className="flex justify-between items-center">
            <span>Women</span>
            <FontAwesomeIcon
              icon={isWomenSubMenuOpen ? faChevronUp : faChevronDown}
            />
          </div>

          {isWomenSubMenuOpen && (
            <ul className="relative top-full left-0 z-10">
              <li
                className=" submenu-item px-3 py-4 active:bg-tertiary"
                onClick={() => handleSubMenuClick("WomenWears")}
              >
                <span>Wears</span>
              </li>
              <li
                className=" submenu-item px-3 py-4 border-t-2 border-b-2 border-border"
                onClick={() => handleSubMenuClick("WomenShoesBags")}
              >
                <span>Shoes & Bags</span>
              </li>
              <li
                className=" submenu-item px-3 py-4"
                onClick={() => handleSubMenuClick("WomenAccessories")}
              >
                <span>Accessories</span>
              </li>
            </ul>
          )}
        </li>
        <hr className="w-[50%] bg-tertiary h-[0.2rem] hidden" />
      </div>
    </ul>
  );
};

export default Submenu;