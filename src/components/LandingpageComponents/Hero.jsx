import Tinydots from "../../assets/Tinydots.svg";
import Button from "../StaticComponents/Button";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className=" border h-[50rem] flex flex-col gap-[2rem] sm:gap-[3rem] md:gap-[4rem] lg:gap-[5rem] pt-[5rem] xs:pb-4 sm:pb-8 md:pb-0 lg:pb-0 ">
    
          <div className="absolute left-[7%] w-[3em] sm:w-[4em] md:w-[5em] lg:w-full mt-[1rem]">
            <img src={Tinydots} alt="dotsbox" />
          </div>

          <div className="absolute top-[80%] left-[85%] xs:hidden sm:hidden">
            <img src={Tinydots} alt="boxdots" className="object-cover"/>
          </div>

        <div className=" heroBackground1 h-full">
          <div className="flex flex-row ">
            <div className="flex flex-1 flex-col gap-[3rem] place-items-center w-[45%] xs:text-primary sm:text-primary lg:text-color md:text-color"></div>
          </div>{" "}
        </div>
      </section>
    </>
  );
};

export default Hero;
