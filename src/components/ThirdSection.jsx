import Button from "./Button";
import Data from "./featured-products";
import Arrow from "../assets/arrow-right.svg";

const ThirdSection = () => {
  return (
    <>
      <div className="bg-secondary flex flex-col gap-5 py-10 px-[10rem]">
        <h1 className="text-center font-secondary font-bold text-tertiary text-[3rem]">
          Featured Products
        </h1>

        <div className="flex justify-center gap-16">
          {Data.map((item) => (
            <div
              key={item.id}
              className=" flex flex-col gap-[1em] bg-primary px-[1rem] py-[1rem] rounded-md w-[25%]"
            >
              <div className=" mx-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[10em] object-cover"
                />
              </div>
              <h3 className="font-secondary font-bold text-[1.2rem]">
                {item.title}
              </h3>
              <div className="flex flex-col gap-3">
                <p className="font-secondary font-bold text-[1.2rem]">
                  #{item.price}
                </p>
                <div className="flex gap-3 place-items-center">
                  <img src={item.stars} alt="" />
                  <img src={item.line} alt="" />
                  <span>{item.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center w-full">
          <div className=" mt-[1rem] font-secondary font-medium">
            <Button>
              See More
              <img src={Arrow} alt="" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
