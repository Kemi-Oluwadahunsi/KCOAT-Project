import Cards from "./Cards";
// import { ProductContext } from "../../../../hooks/ProductContext";
// import { useContext } from "react";
import products from "../../featured-products"
import { Link } from "react-router-dom";

const MostPopularProductPage = () => {
  // const { mostPopularProducts } = useContext(ProductContext);
  // const mostPopular = mostPopularProducts.map((item) => (
  //   <Cards
  //     key={item.Productid}
  //     id={item.Productid} // Pass the id as a prop
  //     image={item.ProductImage}
  //     title={item.ProductName}
  //     price={item.ProductPrice}
  //   />
  // ));

  const mostPopular = products.map((item) => (
    <Link key={item.id} to="/all-products">
    <Cards
      key={item.id}
      id={item.id} // Pass the id as a prop
      image={item.image}
      title={item.title}
      cart={item.cart}
      price={item.price}
    /></Link>
  ));
  return (
    <div className="pt-[8rem] xs:pt-[5rem] xs:px-[2em] sm:px-[5rem] md:px-[4rem] px-[10em]">
      <div className="  flex xs:text-center sm:text-center">
        <div className="  flex flex-col ">
          <h2 className="font-poppins text-color font-bold xs:text-[1.5em] text-[3em] mt-10 mb-1 ">
            Most Popular Products
          </h2>
          <p className="font-medium text-color">
            Quality never goes out of styles, everything you need on a budget
          </p>
        </div>
      </div>

      <div className="grid xs:grid-cols-2 sm:grid-cols-2 grid-cols-4 my-12 xs:gap-8 sm:gap-8 md:gap-3 gap-8 justify-between ">
        {mostPopular}
      </div>
    </div>
  );
};

export default MostPopularProductPage;
