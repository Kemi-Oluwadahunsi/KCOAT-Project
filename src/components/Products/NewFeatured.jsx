import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import cart from "/images/cart-plus-alt.svg"
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../LandingpageComponents/MostPopularProductSections/Cards";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const NewFeatured = () => {
  const [newFeatured, setNewFeatured] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const NewFeatured = async () => {
      try {
        const response = await axios.get(
          "https://kcoat.onrender.com/new-featured-products"
        );
        const data = response.data;
        console.log("Newly featured Products:", data.message);

        setNewFeatured(data.message);
        setIsLoading(false);
        
      } catch (error) {
        console.error("Error fetching product:", error);
        setIsLoading(false);
      }
    };
    NewFeatured();
  }, [] );
         

   const mostPopular = newFeatured.map((item) => {
     console.log("Product ID:", item.Productid); // Log the Productid
     return (
       <Link key={item.Productid} to="/all-products">
         <Cards
           key={item.Productid}
           id={item.Productid}
           image={item.ProductImage}
           title={item.ProductName}
           price={item.ProductPrice}
         />
       </Link>
     );
   });

  return (
    <div className="flex flex-col gap-[3em] py-[8rem] px-[5rem] bg-background">
      <div className="flex justify-between items-center px-10 pt-5">
        <h1 className="text-center font-tertiary font-normal text-color text-[2.2rem]">
          New & Featured Products
        </h1>

        <p className="font-oxygen font-normal font-subtext w-[36%] text-start leading-6">
          Explore Endless Possibilities And Upgrade Your Fashion Experience
          Today!.
        </p>
      </div>

      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="grid grid-cols-3 justify-center gap-[4rem]">
          {mostPopular}
        </div>
      )}
    </div>
  );
};

export default NewFeatured;
