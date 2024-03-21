import search from "../assets/Search.png";
import outline from "../assets/search-outline.svg";
import Tinydots from "../assets/Tinydots.svg";
import Button from "./Button";
import photo from "../assets/right-image.png";
import Shoe from "../assets/Hero-shoe.png";
const Hero = () => {
  return (
    <>
      <section className=" flex flex-col gap-[5rem]  pt-10 pb-0">
        <div className="relative ">
          <div className="border border-tertiary px-7 py-2 w-2/5 bg-primary mx-auto rounded-[2.5rem]">
            <div className="flex items-center justify-between ">
              <img src={search} alt="search" />
              <input type="search" className="w-3/4 outline-none" />
              <img src={outline} alt="outline" />
            </div>
          </div>

          <div className=" ml-[8rem] mt-[2rem]">
            <img src={Tinydots} alt="dotsbox" />
          </div>
        </div>

        <div className="flex flex-row relative ">
          <div className="mt-[4rem]">
            <img src={Shoe} alt="hero-shoe" />
          </div>
          <div className="flex flex-1 flex-col gap-[3rem] place-items-center">
            <div className="flex flex-col gap-[1.5rem] text-center ">
              <h1 className="heroTalk  font-tertiary  text-color text-[4rem] font-normal tracking-wide">
                Discover And Find Your Own Fashion
              </h1>
              <p className="font-oxygen text-color text-[1.3em] font-normal w-[90%]">
                Explore Our Collections Of Stylish Clothing And Accessories
                Where Styles Meets Class.
              </p>
            </div>

            <div className="text-[1.6rem] font-secondary font-medium">
              <Button>SHOP NOW</Button>
            </div>

            <div className="absolute top-[30em] text-center">
              <img src={Tinydots} alt="boxdots" />
            </div>
          </div>

          <div className=" flex items-center w-[37%] m-auto  relative top-[-7em] ">
            <img
              src={photo}
              alt="sideImage"
              className="rounded-tl-[8rem] rounded-bl-[8rem]   "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
