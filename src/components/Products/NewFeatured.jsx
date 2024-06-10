import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cards from "../LandingpageComponents/MostPopularProductSections/Cards";
// import { Link } from "react-router-dom";

const NewFeatured = () => {
  const [newFeatured, setNewFeatured] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const NewFeatured = async () => {
      try {
        const response = await axios.get(
          "https://kcoat.onrender.com/products"
        );
        const data = response.data;
        const limit = 20;
        const slicedData = data.slice(0, limit); 
        console.log("Newly featured Products:", data.message);

        setNewFeatured(slicedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setIsLoading(false);
      }
    };
    NewFeatured();
  }, []);

  const mostPopular = newFeatured.map((item) => {
    console.log("Product ID:", item.Productid);
    return (
      <>
        <Link key={item.Productid} to={`/products/${item.Productid}`}>
          <Cards
            key={item.Productid}
            id={item.Productid}
            image={item.ProductImage}
            title={item.ProductName}
            price={item.ProductPrice}
          />
        </Link>
      </>
    );
  });

  return (
    <div className="flex flex-col xs:gap-[1em] gap-[3em] xs:py-[5rem] py-[8rem] xs:px-[2rem] px-[5rem] bg-background">
      <div className="flex xs:flex-col sm:flex-col justify-between items-center px-3 sm:px-5 md:px-10 lg:px-10 pt-2 sm:pt-4 md:pt-5 lg:pt-5">
        <h1 className="text-center font-tertiary font-normal text-color text-[1.5em] lg:text-[2.2rem]">
          New & Featured Products
        </h1>
        <p className="font-oxygen font-normal font-subtext w-[90%] xs:text-center sm:w-[80%] md:w-[36%] lg:w-[36%] text-start leading-6">
          Explore Endless Possibilities And Upgrade Your Fashion Experience
          Today!.
        </p>
      </div>

      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="grid xs:grid-cols-2 grid-cols-4 justify-center xs:gap-[2rem] gap-[4rem]">
          {mostPopular}
        </div>
      )}
    </div>
  );
};

export default NewFeatured;
