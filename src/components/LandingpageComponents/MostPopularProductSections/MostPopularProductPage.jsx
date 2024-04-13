import Cards from "./Cards";
import { ProductContext } from "../../../../hooks/ProductContext";
import { useContext } from "react";

const MostPopularProductPage = () => {
  const { mostPopularProducts } = useContext(ProductContext);
  const mostPopular = mostPopularProducts.map((item) => (
    <Cards
      key={item.Productid}
      id={item.Productid} // Pass the id as a prop
      image={item.ProductImage}
      title={item.ProductName}
      price={item.ProductPrice}
    />
  ));
  return (
    <div className="pt-[8rem] px-[10em]">
      <div className="  flex  ">
        <div className="  flex flex-col ">
          <h2 className="font-tertiary text-color font-bold text-[3em] mt-10 mb-1 ">
            Most Popular Products
          </h2>
          <p className="font-medium text-color">
            Quality never goes out of styles, everything you need on a budget
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 my-12 mx-[6rem] justify-center">
        {mostPopular}
      </div>
    </div>
  );
};

export default MostPopularProductPage;
