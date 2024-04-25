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
        <div className=" flex xs:flex-col sm:flex-col justify-between md:items-center lg:items-center py-10 w-[100%] lg:w-[90%] gap-8">
          <div className="flex flex-col gap-7 sm:gap-[3em] md:gap-[4em] lg:gap-[5em]">
            <Link to="/" >
              <div className="">
                <img src={logo} alt="logo" />
              </div>
            </Link>

            <div className="flex flex-col gap-3">
              <h3 className="md:text-2xl text-[1.2rem] lg:text-2xl">
                Social Media
              </h3>
              <div className="flex justify-between cursor-pointer xs:w-[40%] sm:w-[20%] ">
                <Link to="#">
                  <img src={whatsapp} alt="" />
                </Link>
                <Link to="#">
                  <img src={instagram} alt="" />
                </Link>
                <Link to="#">
                  <img src={facebook} alt="" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 ">
            <h2 className="text-tertiary ">PRODUCTS</h2>
            <ul className="flex flex-col gap-3 cursor-pointer">
              <Link to="/all-products">
                <li>All Products</li>
              </Link>
              <Link to="/all-products">
                <li>Men</li>
              </Link>
              <Link to="/all-products">
                <li>Women</li>
              </Link>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-tertiary">BRAND</h2>
            <ul className="flex flex-col gap-3 cursor-pointer">
              <Link to="/about-us">
                <li>About Us</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
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
            <li>Guides</li>
            <li>Terms of Sale</li>
            <li>Terms of Use</li>
            <Link to="/privacy-policy">
              <li>Privacy Policy</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
