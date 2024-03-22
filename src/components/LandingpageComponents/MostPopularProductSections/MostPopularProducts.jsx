import Button from "../../Button";
import Cards from "./Cards";

const MostPopularProducts = () => {
  return (
    <div className="">
      <div className="  flex flex-row place-content-center">
        <div className=" basis-[58%] flex flex-col ml-20  place-items-center">
          <h2 className="font-tertiary text-color font-bold text-2xl md:text-3xl lg:text-4xl mt-10 mb-1 ">
            Most Popular Products
          </h2>
          <p className="font-medium text-color">
            Quality never goes out of styles, everything you need on a budget
          </p>
        </div>

        <div className="place-self-end">
          <Button>View All </Button>
        </div>
      </div>

      <div>
        <Cards />
      </div>
    </div>
  );
};

export default MostPopularProducts;
