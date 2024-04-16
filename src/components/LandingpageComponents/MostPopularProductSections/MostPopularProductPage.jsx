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

      <div className="grid grid-cols-4  my-12 justify-between ">
        {mostPopular}
      </div>
    </div>
  );
};

export default MostPopularProductPage;
