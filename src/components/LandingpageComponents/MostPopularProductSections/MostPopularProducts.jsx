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
    <div>
      <div className="  flex flex-row place-content-center mt-8">
        <div className=" basis-[72%] flex flex-col ml-12  place-items-center">
          <h2 className="font-tertiary text-color font-bold text-2xl md:text-3xl lg:text-4xl mt-10 mb-1 ">
            Most Popular Products
          </h2>
          <p className="font-medium text-color">
            Quality never goes out of styles, everything you need on a budget
          </p>
        </div>

        <Link to="/most-popular-product">
          <div className="place-self-end font-secondary font-medium">
            <Button>
              View All <img src={angleRight} alt="angleRight" />{" "}
            </Button>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-4 my-12 mx-[6rem] justify-center">
        {mostPopular}
      </div>
    </div>
  );
};

export default MostPopularProducts;
