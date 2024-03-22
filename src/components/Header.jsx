import logo from "../assets/KCOAT.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
const Header = () => {
  return (
    <>
      <div className="h-20 flex place-content-center justify-around items-center font-primary text-sm px-[4rem] bg-tertiary">
        <div className="cursor-pointer">
          <img src={logo} alt="logo" />
        </div>

        <ul className="text-bland font-secondary font-medium flex justify-around space-x-4 w-2/4 place-items-center cursor-pointer">
          <li>Featured</li>

          <div className="flex gap-3 place-items-center">
            <li>Men</li>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>

          <div className="flex gap-3 place-items-center">
            <li>Women</li>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <div className="flex gap-3 place-items-center">
            <li>Accessories</li>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <li>Contact</li>
        </ul>

        <div className="flex gap-5 place-items-center cursor-pointer">
          <div className="text-primary flex gap-2 place-items-center p-5">
            <FontAwesomeIcon icon={faUser} />
            <span className="font-bold">Login / Register</span>
          </div>
          <FontAwesomeIcon
            icon={faShoppingCart}
            color="white"
            className="text-xl"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
