import Slider from "react-slick";
import FeedbackCards from "./FeedbackCards";
import feedbackArray from "./feedbackArray";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../StaticComponents/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { ProductContext } from "../../../../hooks/ProductContext";
import axios from "axios";

const FeedbackCorner = () => {
   const { isLoggedIn, loggedInUserEmail } = useContext(ProductContext);
const [name, setName] = useState("");
const [feedback, setFeedback] = useState("");
const [showReviewForm, setShowReviewForm] = useState(false);

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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const toggleReviewForm = () => {
    setShowReviewForm(!showReviewForm);
  };
   const handleSubmit = async (event) => {
     event.preventDefault();
     if (!isLoggedIn) {
       // If user is not logged in, prompt them to log in
       toast.error("Please log in to leave a feedback.");
       return;
     }

     try {
       // Send feedback data to the endpoint
       const response = await axios.post("https://kcoat.onrender.com/feedbacks", {
         name,
         feedback,
         email: loggedInUserEmail,
       });

       if (response.status === 200) {
         toast.success("Feedback submitted successfully!");
         // Clear input fields after successful submission
         setName("");
         setFeedback("");

         toggleReviewForm();
       } else {
         toast.error("Error submitting feedback. Please try again.");
       }
     } catch (error) {
       console.error("Error submitting feedback:", error);
       toast.error("Error submitting feedback. Please try again.");
     }
   };

  return (
    <>
      <div className="bg-feedback py-8">
        <div className="flex xs:flex-col justify-center xs:px-4 ">
          <div className="text-color text-center w-[50%] xs:w-full flex flex-col items-end xs:items-center">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl mt-8 mb-1">
              Feedback Corner
            </h2>
            <p className="font-medium">
              What Our Customers Are Saying..........
            </p>
          </div>

          <div className="w-[30%] xs:w-full mx-auto mt-4">
            <div className="border border-border rounded-2xl px-4 flex flex-col gap-4 py-4">
              <p className="text-color font-bold font-oxygen text-lg xs:text-sm">
                Shopped from Kcoat yet? Kindly leave us a review.
              </p>
              <button
                onClick={toggleReviewForm}
                className="border rounded-lg border-border bg-nextpage outline-createaccount xs:py-1 md:py-3 px-4 py-1  text-color"
              >
                Leave a Review
              </button>
              {showReviewForm && (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-[1em] "
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Please Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border rounded-lg border-border bg-nextpage outline-createaccount xs:py-1 md:py-3 px-4 py-1  text-color"
                  />
                  <textarea
                    name="feedback"
                    id=""
                    cols="10"
                    placeholder="Please Enter Your Feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="border rounded-lg border-border bg-nextpage outline-createaccount px-4  text-color"
                  ></textarea>

                  <div className="flex items-center justify-center">
                    <Button
                      type="submit"
                      // className="bg-primary py-2 px-4 text-white rounded-lg"
                    >
                      Submit Feedback
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Collect testimonials from customers. */}

        <Slider
          {...settings}
          style={{}}
          className="px-[2rem] sm:px-[3rem] md:px-[5rem] lg:px-[6rem] py-20 xs:py-8"
        >
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

      <div className="z-[10000]">
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </>
  );
};

// Custom previous and next arrows
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="bottom-0 absolute left-[46%] xs:left-[44%] "
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="text-color text-lg hover:bg-tertiary p-1"
      />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="bottom-0 absolute xs:left-[52%] left-[52%] font-bold xs"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faChevronRight}
        className="text-color text-lg hover:bg-tertiary p-1"
      />
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
