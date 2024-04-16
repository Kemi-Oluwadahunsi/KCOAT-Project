import Slider from "react-slick";
import Button from "../StaticComponents/Button";
import Arrow from "../../assets/arrow-right.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductContext } from "../../../hooks/ProductContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import cart from "/images/cart-plus-alt.svg"

const ThirdSection = () => {
  const { newFeatured } = useContext(ProductContext);

  if (!Array.isArray(newFeatured)) {
    // Handle loading state or other scenarios where newFeatured is not an array
    return <div>Loading...</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="flex flex-col gap-[3em] py-10 px-[5rem] bg-background">
      <div className="flex justify-between items-center px-10 pt-5">
        <h1 className="text-center font-tertiary font-normal text-color text-[2.2rem]">
          New & Featured Products
        </h1>
        <p className="font-oxygen font-normal font-subtext w-[36%] text-start leading-6">
          Explore Endless Possibilities And Upgrade Your Fashion Experience
          Today!.
        </p>
      </div>

      {newFeatured.length > 0 ? (
        <Slider {...settings}>
          {newFeatured.map((item) => (
            <div key={item.id} className="flex justify-center gap-16 flex-wrap">
              <div className="flex flex-col gap-[1em] py-[1rem] rounded-md">
                <div className="mx-auto">
                  <img
                    src={item.ProductImage}
                    alt={item.ProductName}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3  px-7">
                  <h3 className="font-oxygen font-bold text-[1.1rem] pl-3">
                    {item.ProductName}
                  </h3>
                  <div className="flex justify-between gap-3 px-3 ">
                    <p className="font-tertiary font-normal text-[1rem] text-tertiary">
                      N{item.productPrice}
                    </p>
                    <div className="flex gap-3 place-items-center cursor-pointer">
                      <img src={cart} alt="cart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div>No new & featured products available</div>
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
