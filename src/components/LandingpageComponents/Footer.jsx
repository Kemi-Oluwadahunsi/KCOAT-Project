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
            <div className="">
              <img src={logo} alt="logo" />
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="md:text-2xl text-[1.2rem] lg:text-2xl">Social Media</h3>
              <div className="flex justify-between cursor-pointer xs:w-[40%] sm:w-[20%] md:w-[30%]">
                <img src={whatsapp} alt="" />
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 ">
            <h2 className="text-tertiary ">PRODUCTS</h2>
            <ul className="flex flex-col gap-3 cursor-pointer">
              <li>All products</li>
              <li>Men</li>
              <li>Women</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-tertiary">BRAND</h2>
            <ul className="flex flex-col gap-3 cursor-pointer">
              <li>About Us</li>
              <li>Contact</li>
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

          <ul className="flex xs:text-[0.8em] justify-between xs:w-[80%] xs:gap-4 gap-10 cursor-pointer">
            <li>Guides</li>
            <li>Terms of Sale</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
