import Tinydots from "../../assets/Tinydots.svg";
import Button from "../StaticComponents/Button";
import photo from "../../assets/right-image.png";
import Shoe from "../../assets/Hero-shoe.png";
import SearchInput from "../StaticComponents/SearchInput";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
const Hero = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const navigate = useNavigate();

  const handleSearchInputChange = (value) => {
    setSearchQuery(value);
  };

  // Function to handle search form submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Navigate to the products page with the search query as a query parameter
    navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
  };
  return (
    <>
      <section className=" flex flex-col gap-[5rem] pt-10 pb-0">
        <div className="w-2/5 mx-auto ml-[30%] relative top-20">
          <form className=" w-full mx-auto " onSubmit={handleSearchSubmit}>
            <SearchInput
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </form>
        </div>

        <div className=" ml-[8rem] mt-[2rem]">
          <img src={Tinydots} alt="dotsbox" />
        </div>

        <div className="flex flex-row relative ">
          <div className="mt-[4.5em] w-[28%]">
            <img src={Shoe} alt="hero-shoe" className="w-full" />
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

            <div className="flex justify-center items-center text-[1.5rem] font-secondary font-medium hover:scale-105 py-1 w-[15em] bg-tertiary rounded-xl">
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
