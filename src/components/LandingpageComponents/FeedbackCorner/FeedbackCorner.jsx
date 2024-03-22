import Slider from "react-slick";
import FeedbackCards from "./FeedbackCards";
import feedbackArray from "./feedbackArray";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const FeedbackCorner = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerPadding: "none", // Adjust padding as needed
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-feedback py-8">
        <div className="text-color text-center">
          <h2 className="font-tertiary font-bold text-2xl md:text-3xl lg:text-4xl mt-10 mb-1">
            Feedback Corner
          </h2>
          <p className="font-medium">What Our Customers Are Saying..........</p>
        </div>
        <Slider {...settings} style={{}} className="px-[6rem] py-20">
          {feedbackArray.map((item) => (
            <div key={item.id} className=" ">
              <FeedbackCards
                image={item.image}
                name={item.name}
                feedback={item.feedback}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

// Custom previous and next arrows
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="bottom-0 absolute left-[49%] " onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} className="text-color text-lg hover:bg-tertiary p-1" />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="bottom-0 absolute left-[52%] font-bold"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} className="text-color text-lg hover:bg-tertiary p-1" />
    </button>
  );
};

export default FeedbackCorner;
