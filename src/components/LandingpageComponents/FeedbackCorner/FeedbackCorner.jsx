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

// function to fix feedback endpoint
// import { useState } from "react";
// import Slider from "react-slick";
// import FeedbackCards from "./FeedbackCards";
// import feedbackArray from "./feedbackArray";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios"; // Import axios for HTTP requests

// const FeedbackCorner = () => {
//   const [email, setEmail] = useState("");
//   const [feedback, setFeedback] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleFeedbackChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Check if email exists in the database
//     const emailExistsInDatabase = await checkEmailInDatabase(email);
//     if (emailExistsInDatabase) {
//       // Email exists, submit feedback
//       submitFeedback();
//     } else {
//       // Email doesn't exist, prompt user to log in or sign up
//       alert("Please log in or sign up to submit feedback.");
//     }
//   };

//   const checkEmailInDatabase = async (email) => {
//     try {
//       // Send request to the /user-profile endpoint to check if email exists
//       const response = await axios.get(`https://example.com/user-profile/${email}`);
//       return response.status === 200; // Return true if email exists, false otherwise
//     } catch (error) {
//       console.error("Error checking email:", error);
//       return false; // Return false in case of any error
//     }
//   };

//   const submitFeedback = async () => {
//     try {
//       // Send request to the /feedbacks endpoint to submit feedback
//       await axios.post("https://example.com/feedbacks", {
//         email: email,
//         feedback: feedback,
//       });
//       // Feedback submitted successfully
//       console.log("Feedback submitted:", { email, feedback });
//       // Clear input fields after submission
//       setEmail("");
//       setFeedback("");
//     } catch (error) {
//       console.error("Error submitting feedback:", error);
//       // Handle error
//     }
//   };

//   // Slider settings...
// };

// export default FeedbackCorner;
