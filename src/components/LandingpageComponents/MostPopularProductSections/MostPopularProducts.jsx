import Button from "../../StaticComponents/Button";
import Cards from "./Cards";
import angleRight from "../../../assets/chevron-right.png";
import products from "./mostpopularObjects";
import { Link } from "react-router-dom";

const MostPopularProducts = () => {
  const mostPopular = products.map((item) => (
    <Cards
      key={item.id}
      id={item.id} // Pass the id as a prop
      image={item.image}
      title={item.title}
      cart={item.cart}
      price={item.price}
    />
  ));
  return (
    <div className="xs:pb-[2rem] sm:pb-[2rem]">
      <div className="  flex place-content-center mt-0 sm:mt-5 md:mt-7 lg:mt-8">
        <div className=" basis-[72%] flex flex-col ml-12  place-items-center">
          <h2 className="font-tertiary text-color font-bold text-2xl md:text-3xl lg:text-4xl mt-10 mb-1 ">
            Most Popular Products
          </h2>
          <p className="font-medium text-color">
            Quality never goes out of styles, everything you need on a budget
          </p>
        </div>

        <Link to="/most-popular-product">
          <div className="place-self-end font-secondary font-medium xs:hidden sm:hidden">
            <Button>
              View All <img src={angleRight} alt="angleRight" />{" "}
            </Button>
          </div>
        </Link>
      </div>

      <div className="grid lg:grid-cols-4 md:py-12 lg:py-12 px-[2em] sm:px-[3em] md:px-[6em] lg:px-[4em] justify-center">
        {mostPopular}
      </div>
      <Link to="/most-popular-product">
        <div className="flex justify-center text-base font-secondary font-medium lg:hidden md:hidden" >
          <Button>
            View All <img src={angleRight} alt="angleRight" />{" "}
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default MostPopularProducts;
