import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/KCOAT.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className=" flex flex-col pt-[1em] pb-[1em] px-[1rem] sm:px-[4em] md:px-[7rem] lg:px-[8em] bg-color text-primary font-oxygen">
        <div className=" flex xs:flex-wrap sm:flex-col justify-between xs:justify-around md:items-center lg:items-center py-10 w-[100%] lg:w-[90%] gap-8">
          <div className="flex flex-col xs:flex-row xs:basis-[100%] xs:gap-[6rem] gap-7 sm:gap-[3em] md:gap-[4em] lg:gap-[5em]">
            <Link to="/">
              <div className="">
                <img src={logo} alt="logo" />
              </div>
            </Link>

            <div className="flex h-[5rem] xs:h-auto flex-col gap-3 xs:basis-[60%]">
              <h3 className="md:text-2xl text-[1.2rem] lg:text-2xl">
                Social Media
              </h3>
              <div className="flex py-2 justify-between cursor-pointer xs:w-[60%] sm:w-[20%] ">
                <Link to="#">
                  <div className="hover:border hover:bg-primary rounded-md xs:hover:p-0 hover:p-1">
                    <img src={whatsapp} alt="" />
                  </div>
                </Link>
                <Link to="#">
                  <div className="hover:border hover:bg-primary rounded-md xs:hover:p-0 hover:p-1">
                    <img src={instagram} alt="" />
                  </div>
                </Link>
                <Link to="#">
                  <div className="hover:border hover:bg-primary rounded-md xs:hover:p-0 hover:p-1">
                    <img src={facebook} alt="" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-tertiary ">PRODUCTS</h2>
            <ul className="flex flex-col gap-3 cursor-pointer">
              <Link to="/all-products">
                <li className="hover:underline underline-offset-4 decoration-tertiary hover:scale-105">
                  All Products
                </li>
              </Link>
              <Link to="/all-products">
                <li className="hover:underline underline-offset-4 decoration-tertiary hover:scale-105">
                  Men
                </li>
              </Link>
              <Link to="/all-products">
                <li className="hover:underline underline-offset-4 decoration-tertiary hover:scale-105">
                  Women
                </li>
              </Link>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-tertiary">BRAND</h2>
            <ul className="flex flex-col gap-3 cursor-pointer">
              <Link to="/about-us">
                <li className="hover:underline underline-offset-4 decoration-tertiary hover:scale-105">
                  About Us
                </li>
              </Link>
              <Link to="/contact">
                <li className="hover:underline underline-offset-4 decoration-tertiary hover:scale-105">
                  Contact
                </li>
              </Link>
              <Link to="/admin-login">
                <li className="text-delete">Admin</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="flex xs:flex-col justify-between xs:text-[0.8em] ">
          <div className=" flex gap-2 items-center">
            <FontAwesomeIcon icon={faLocationDot} color="white" />
            <h3>Nigeria</h3>
          </div>

          <ul className="flex xs:text-[0.8em] justify-between xs:w-[100%] xs:gap-3 gap-10 cursor-pointer">
            <li className="hover:underline underline-offset-4 decoration-tertiary hover:scale-105 xs:hover:scale-0">Guides</li>
            <li className="hover:underline underline-offset-4 decoration-tertiary hover:scale-105 xs:hover:scale-0">Terms of Sale</li>
            <li className="hover:underline underline-offset-4 decoration-tertiary hover:scale-105 xs:hover:scale-0">Terms of Use</li>
            <Link to="/privacy-policy">
              <li className="hover:underline underline-offset-4 decoration-tertiary hover:scale-105 xs:hover:scale-0">Privacy Policy</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
