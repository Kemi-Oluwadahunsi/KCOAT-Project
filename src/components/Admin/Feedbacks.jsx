import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import feedbacks from "../LandingpageComponents/FeedbackCorner/feedbackArray";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Feedbacks = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 5;

  // Calculate index of the first and last products on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Slice the products array to display only the products for the current page
  const currentProducts = feedbacks.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Function to handle page navigation
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scroll animation
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-[3em]">
        <div>
          <table className="w-full">
            <thead className=" bg-tertiary text-primary text-xl font-oxygen font-normal">
              <tr>
                <th className="border-l border-categoryborder2 py-2 w-[40%]">
                  Customer Name
                </th>
                <th className="border-l border-categoryborder2 py-2">
                  What They Say
                </th>
              </tr>
            </thead>
            <tbody className="text-stats">
              {currentProducts.map((feedback) => (
                <tr
                  key={feedback.id}
                  className="border-b border-categoryborder2"
                >
                  <td className="border-l border-categoryborder2  px-[2em] font-medium font-oxygen h-[6rem]">
                    <h2>{feedback.name}</h2>
                  </td>

                  <td className="border-l border-categoryborder2 flex justify-between items-center px-[2em] font-medium font-oxygen h-[6rem]">
                    {feedback.feedback}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex gap-4 items-center justify-center w-full">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon
              icon={faAngleDoubleLeft}
              className=" text-categoryborder text-lg"
            />
          </button>
          <div>
            {[
              ...Array(Math.ceil(feedbacks.length / productsPerPage)).keys(),
            ].map((number) => (
              <button
                key={number}
                className={`border border-categoryborder2 px-3 py-1  ${
                  currentPage === number + 1 ? "bg-tertiary text-primary" : ""
                }`}
                onClick={() => paginate(number + 1)}
              >
                {number + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastProduct >= feedbacks.length}
          >
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className=" text-categoryborder text-lg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
