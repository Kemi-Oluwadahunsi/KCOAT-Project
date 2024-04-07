import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/KCOAT.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
      <div className=" flex flex-col pt-[1em] pb-[1em] px-[8em] bg-color text-primary font-oxygen">
        <div className=" flex justify-between items-center py-10 w-[90%]">
          <div className="flex flex-col gap-[5em]">
            <div className="">
              <img src={logo} alt="" />
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-2xl">Social Media</h3>
              <div className="flex justify-between cursor-pointer">
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
            </ul>
          </div>
        </div>

        <div className="flex justify-between">
          <div className=" flex gap-2 items-center">
            <FontAwesomeIcon icon={faLocationDot} color="white" />
            <h3>Nigeria</h3>
          </div>

          <ul className="flex justify-between gap-10 cursor-pointer">
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
