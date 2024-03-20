import search from "../assets/Search.png";
import outline from "../assets/search-outline.svg";
import Tinydots from "../assets/Tinydots.svg";
import Button from "../components/Button";
import shoppingbags from "../assets/shoppingbags.svg";
import sidearrow from "../assets/sidearrow.png";
import photo from "../assets/photo1.png";
const Hero = () => {
  return (
    <>
      <section className=" flex flex-col gap-[7rem] h-[54.5rem] bg-secondary pt-10 px-[10rem] pb-0">
        <div className="relative ">
          <div className="border border-tertiary px-7 py-2 w-2/4 bg-primary mx-auto rounded-[2.5rem]">
            <div className="flex items-center justify-between ">
              <img src={search} alt="search" />
              <input type="search" className="w-3/4 outline-none" />
              <img src={outline} alt="outline" />
            </div>
          </div>

          <div className="flex justify-end items-end absolute top-0 left-[92%] ">
            <img src={Tinydots} alt="dotsbox" />
          </div>
        </div>

        <div className="flex flex-row relative">
          <div className="flex flex-1 flex-col gap-[3rem]">
            <div className="flex flex-col gap-[1.5rem] ">
              <h1 className="heroTalk w-[65%] font-secondary  text-tertiary text-[4.1rem] font-extrabold">
                Discover And Find Your Own Fashion
              </h1>
              <p className="font-secondary text-tertiary w-[60%] text-lg font-normal">
                Explore Our Collections Of Stylish Clothing And Accessories
                Where Styles Meets Class.
              </p>
            </div>

            <div className="text-[1.5rem] font-secondary font-medium">
              <Button>SHOP NOW</Button>
            </div>

            <div className="absolute top-[35em] left-[45%]">
              <img src={Tinydots} alt="boxdots" />
            </div>

            <img
              src={shoppingbags}
              alt="shoppingbags"
              className="absolute left-[15em] top-[25em]"
            />
            <img
              src={sidearrow}
              alt="sidearrow"
              className="absolute left-[-10em] top-[21.3em]"
            />
          </div>

          <div className=" flex items-center bg-tertiary w-[40%] h-[43.5rem] m-auto rounded-tl-[8rem] rounded-tr-[0.625rem] rounded-bl-[0.625rem] rounded-br-[4.7rem] relative top-[-1em] ">
            <img src={photo} alt="sideImage" className="m-auto w-[90%] h-[90%]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
