import Tinydots from "../../assets/Tinydots.svg";
import Button from "../StaticComponents/Button";
import photo from "../../assets/right-image.png";
import Shoe from "../../assets/Hero-shoe.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className=" flex flex-col gap-[2rem] sm:gap-[3rem] md:gap-[4rem] lg:gap-[5rem] pt-[5rem] xs:pb-4 sm:pb-0 md:pb-0 lg:pb-0 heroBackground">
        <div className="w-[3em] sm:w-[4em] md:w-[5em] lg:w-full ml-[3rem] md:ml-[8rem] lg:ml-[8rem] mt-[2rem]">
          <img src={Tinydots} alt="dotsbox" />
        </div>

        <div className="flex flex-row relative ">
          <div className="hidden md:block lg:block mt-[4.5em] w-[28%]">
            <img src={Shoe} alt="hero-shoe" className="w-full" />
          </div>
          <div className="flex flex-1 flex-col gap-[3rem] place-items-center w-[45%] xs:text-primary sm:text-primary lg:text-color md:text-color">
            <div className="flex flex-col gap-[1.5rem] text-center ">
              <h1 className="heroTalk  font-tertiary text-[2rem] md:text-[4rem] lg:text-[4rem] font-normal tracking-wide">
                Discover And Find Your Own Fashion
              </h1>
              <p className="font-oxygen text-base md:text-lg lg:text-lg font-normal">
                Explore Our Collections Of Stylish Clothing And Accessories
                Where Styles Meets Class.
              </p>
            </div>

            <Link to="/all-products">
              <div className="flex justify-center items-center lg:text-[1.5rem] md:text-[1.5rem] sm:text-[1.2rem] text-[1.1rem] font-secondary font-medium hover:scale-105 p-0 md:py-1 lg:py-1 w-[10em] sm:w-[10em] md:w-[15em] lg:w-[15em] bg-tertiary rounded-xl">
                <Button>SHOP NOW</Button>
              </div>
            </Link>

            <div className="absolute top-[30em] flex items-center xs:hidden sm:hidden">
              <img src={Tinydots} alt="boxdots" />
            </div>
          </div>

          <div className=" flex items-center w-[35%]  m-auto relative top-[-8em] sm:hidden xs:hidden ">
            <img
              src={photo}
              alt="sideImage"
              className="m-auto rounded-tl-[8rem]  rounded-bl-[8rem]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
