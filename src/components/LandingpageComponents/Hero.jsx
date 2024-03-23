
import outline from "../../assets/search-outline.svg";
import Tinydots from "../../assets/Tinydots.svg";
import Button from "../Button";
import photo from "../../assets/right-image.png";
import Shoe from "../../assets/Hero-shoe.png";
const Hero = () => {
  return (
    <>
      <section className=" flex flex-col gap-[5rem] pt-10 pb-0">
        <div className="relative ">
          <div className="border border-tertiary px-7 py-2 w-2/5 bg-primary mx-auto rounded-[2.5rem]">
            <div className="flex items-center justify-between ">
              <input type="search" placeholder="Search" className=" bg-transparent w-[90%] outline-none" />
              <img src={outline} alt="outline" />
            </div>
          </div>

          <div className=" ml-[8rem] mt-[2rem]">
            <img src={Tinydots} alt="dotsbox" />
          </div>
        </div>

        <div className="flex flex-row relative ">
          <div className="mt-[4.5em] w-[28%]">
            <img src={Shoe} alt="hero-shoe" className="w-full"/>
          </div>
          <div className="flex flex-1 flex-col gap-[3rem] place-items-center w-[45%]">
            <div className="flex flex-col gap-[1.5rem] text-center ">
              <h1 className="heroTalk  font-tertiary  text-color text-[4rem] font-normal tracking-wide">
                Discover And Find Your Own Fashion
              </h1>
              <p className="font-oxygen text-color text-lg font-normal">
                Explore Our Collections Of Stylish Clothing And Accessories
                Where Styles Meets Class.
              </p>
            </div>

            <div className="text-[1.5rem] font-secondary font-medium hover:scale-110">
              <Button>SHOP NOW</Button>
            </div>

            <div className="absolute top-[30em] flex items-center">
              <img src={Tinydots} alt="boxdots" />
            </div>
          </div>

          <div className=" flex items-center w-[35%]  m-auto relative top-[-8em] ">
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

