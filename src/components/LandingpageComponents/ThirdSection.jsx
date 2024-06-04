import Slider from "react-slick";
import Button from "../StaticComponents/Button";
import Arrow from "../../assets/arrow-right.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import CardNew from "./CardNew";

const ThirdSection = () => {
  const [newFeatured, setNewFeatured] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const NewFeatured = async () => {
      try {
        const response = await axios.get(
          // "https://kcoat.onrender.com/new-featured-products"
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
      <>
        <Link key={item.Productid} to={`/products/${item.Productid}`}>
          <CardNew
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
    arrows: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="flex flex-col gap-[2em] md:gap-[3em] lg:gap-[3em] py-10 xs:px-[1rem] md:px-[5rem] lg:px-[5rem] bg-background">
      <div className="flex xs:flex-col sm:flex-col justify-between items-center px-3 sm:px-5 xs:w-full xs:px-0 md:px-5 lg:px-10 pt-2 sm:pt-4 md:pt-5 lg:pt-5">
        <h1 className="text-center font-poppins font-bold text-color text-[1.4em] lg:text-[2.2rem]">
          New & Featured Products
        </h1>
        <p className="font-oxygen font-normal font-subtext w-[100%] xs:text-center sm:w-[80%] md:w-[55%] lg:w-[36%] md:pl-10 text-start leading-6">
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
