import Slider from "react-slick";
import Button from "../StaticComponents/Button";
import Arrow from "../../assets/arrow-right.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Cards from "./MostPopularProductSections/Cards";
import axios from "axios";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const ThirdSection = () => {
  const [newFeatured, setNewFeatured] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const NewFeatured = async () => {
      try {
        const response = await axios.get(
          "https://kcoat.onrender.com/new-featured-products"
        );
        const data = response.data;
        const limit = 6;
        const slicedData = data.message.slice(0, limit);

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
    console.log("Product ID:", item.Productid); // Log the Productid
    return (
      <Link key={item.Productid} to={`/products/${item.Productid}`}>
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

  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isTablet = useMediaQuery({ maxWidth: 768 });

  let slidesToShow = 4; // Default number of slides for large screens

  if (isMobile) {
    slidesToShow = 1; // Show 1 slide on mobile
  } else if (isTablet) {
    slidesToShow = 2; // Show 2 slides on tablet
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow, // Set the slidesToShow dynamically
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="flex flex-col gap-[2em] md:gap-[3em] lg:gap-[3em] py-10 xs:px-[2rem] md:px-[5rem] lg:px-[5rem] bg-background">
      <div className="flex xs:flex-col justify-between items-center px-3 sm:px-5 md:px-10 lg:px-10 pt-2 sm:pt-4 md:pt-5 lg:pt-5">
        <h1 className="text-center font-tertiary font-normal text-color text-[1.5em] lg:text-[2.2rem]">
          New & Featured Products
        </h1>
        <p className="font-oxygen font-normal font-subtext w-[90%] xs:text-center sm:w-[70%] md:w-[36%] lg:w-[36%] text-start leading-6">
          Explore Endless Possibilities And Upgrade Your Fashion Experience
          Today!.
        </p>
      </div>

      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <Slider {...settings}>{mostPopular}</Slider>
      )}

      <Link to="/new-featured">
        <div className="flex justify-center items-center w-full">
          <div className="mt-[1rem] font-secondary font-medium hover:scale-110 ">
            <Button>
              See More
              <img src={Arrow} alt="arrow" />
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ThirdSection;
