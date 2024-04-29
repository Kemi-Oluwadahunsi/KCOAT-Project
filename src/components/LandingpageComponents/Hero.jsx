import Tinydots from "../../assets/Tinydots.svg";
import Button from "../StaticComponents/Button";

import { Link } from "react-router-dom";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1, // Set the slidesToShow dynamically
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <>
      <section className="relative hero h-[45rem] xs:h-[28rem] md:h-[35rem]  mb-[7rem] md:mb-[5rem] xs:mb-0 flex flex-col gap-[2rem] sm:gap-[3rem] md:gap-[4rem] lg:gap-[5rem] pt-[5rem]">
        <div className="absolute top-[7em] w-[3em] xs:pl-4 md:pl-[5em] pl-[7em] sm:w-[4em] md:w-[5em] lg:w-full mt-[1rem]">
          <img src={Tinydots} alt="dotsbox" />
        </div>

        <div className="absolute top-[80%]  left-[85%] xs:hidden sm:hidden">
          <img src={Tinydots} alt="boxdots" className="object-cover" />
        </div>

        <Slider {...settings}>
          <div className=" heroBackground1 h-[45rem] md:h-[35rem] xs:h-[25rem] pt-[4em]">
            <div className="flex flex-col xs:items-center xs:h-[30%] xs:justify-end w-full xs:text-primary sm:text-primary lg:text-color md:text-color ]">
              <div className="flex w-[40%] xs:w-[80%] items-end justify-center relative">
                <div className="flex w-full items-center flex-col xs:gap-4 gap-[2rem] absolute top-[13em] xs:top-0 text-primary font-tertiary  ">
                  <h1 className="text-[4rem] md:text-[3rem] xs:text-[2rem] md:leading-[3.5rem] text-center text-color leading-[1.2em] xs:leading-10 md:leading-12">
                    Circular and Renewable Fashion Statement
                  </h1>

                  <Link to="/all-products">
                    <div className="flex items-center">
                      <div
                        className={`w-[15rem] xs:w-[9em] bg-tertiary font-secondary text-2xl xs:text-base py-1 xs:py-0 flex items-center justify-center rounded-xl`}
                      >
                        <Button>Shop Now</Button>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className=" heroBackground2 h-[45rem] md:h-[35rem] xs:h-[25rem] pt-[4em]">
            <div className="flex flex-col xs:pt-[2.5em] md:pt-[5em] place-items-center w-full xs:text-primary sm:text-primary lg:text-color md:text-color">
              <div className="flex w-[50%] xs:w-full md:pt-[1rem] items-center justify-center xs:px-[1em] px-[2rem]">
                <div className="flex w-full flex-col xs:gap-[0.7em] md:gap-[1.5rem] gap-[2rem] xs:mt-[3em] md:mt-[5em] mt-[8em] text-primary font-tertiary  ">
                  <h1 className="text-[4rem] xs:text-[2rem] md:text-[3rem] w-[80%] md:w-[90%] mx-auto xs:leading-9 md:leading-[3.5rem]">
                    Luxury & Elegance Pieces Just For You
                  </h1>
                  <p className="font-oxygen mx-auto text-center w-[80%] xs:w-[90%]">
                    Explore Our Collections Of Stylish Clothing And Accessories,
                    Where Styles Meets Class
                  </p>

                  <Link to={"/all-products"}>
                    <div className="flex items-center justify-center">
                      <div
                        className={`w-[15rem] xs:w-[9em] bg-tertiary font-secondary text-2xl xs:text-base xs:py-0 py-1 flex items-center justify-center rounded-xl`}
                      >
                        <Button>Shop Now</Button>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className=" heroBackground3 h-[45rem] md:h-[35rem] xs:h-[25rem] pt-[4em]">
            <div className="flex w-[40%] md:w-[50%] xs:w-full h-full items-center justify-center md:px-[4] px-[2rem]">
              <div className="flex w-full xs:pt-[3.8em] md:pt-[5rem] flex-col xs:gap-[1em] md:gap-[1.5em] gap-[3rem] text-primary font-tertiary ">
                <h1 className="text-[4rem] text-center xs:text-[2em] md:text-[3em] xs:leading-9 md:w-[90%] md:leading-[3.5rem]">
                  Discover And Find your Own Fashion
                </h1>
                <p className="font-oxygen mx-auto text-center w-[80%] xs:w-[90%]">
                  Explore Our Collections Of Stylish Clothing And Accessories,
                  Where Styles Meets Class
                </p>

                <Link to={"/all-products"}>
                  <div className="flex items-center justify-center">
                    <div
                      className={`w-[15rem] xs:w-[9em] bg-tertiary font-secondary xs:text-base text-2xl md:text-xl xs:py-0 md:py-0 py-1 flex items-center justify-center rounded-xl`}
                    >
                      <Button>Shop Now</Button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
};

export default Hero;
