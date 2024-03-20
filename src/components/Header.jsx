import logo from "../assets/KCOAT.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
const Header = () => {
  return (
    <>
      <div className="h-20 flex place-content-center justify-around items-center font-primary text-sm px-[4rem]">
        <div className="cursor-pointer">
          <img src={logo} alt="logo" />
        </div>

        <ul className="flex justify-around space-x-4 bg-primary w-2/4 place-items-center cursor-pointer">
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
          <div>Log in</div>
          <Button className="w-[3rem] h-[1rem] font-primary ">Sign Up</Button>
        </div>
      </div>
    </>
  );
};

export default Header;
