import { useEffect, useState } from "react";
import SearchInput from "../StaticComponents/SearchInput";
import angleRight from "../../assets/chevron-right.png";
import axios from "axios";
import { Link } from "react-router-dom";
import Cards from "../LandingpageComponents/MostPopularProductSections/Cards";
import Submenu from "./Submenu";

const ITEMS_PER_PAGE = 12;

const AllProducts = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch products on component mount
  useEffect(() => {
    // Fetch products on mount
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://kcoat.onrender.com/products");
        // setProducts(response.data);
        setSelectedProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
  const currentProducts = selectedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(selectedProducts.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const mostPopular = currentProducts.map((item) => {
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

  return (
    <div className="flex px-[6.2rem] gap-[5rem] py-[3rem] relative pt-[8em] border-l-8 border-simple1">
      <div className="flex flex-col gap-[3em] w-[20%]">
        {/* Categories and Filters */}
        <div className="flex items-center w-full py-[2em] px-[1.8em] border-2 border-categoryborder2">
          <div className="flex flex-col gap-[1.5em] w-full">
            <h2 className="font-tertiary text-[1.2em] pl-4 border-l-4 border-categoryborder">
              Categories
            </h2>
            <ul className="flex flex-col gap-[3em] font-oxygen w-full">
              <Submenu setSelectedProducts={setSelectedProducts} />
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center w-full py-[2em] border-2 border-categoryborder2">
          <div className="flex flex-col gap-5 w-[80%]">
            <div className="font-tertiary text-[1.2em] border-l-4 border-categoryborder">
              <h2 className="pl-4">Price Range</h2>
            </div>

            {/* Price range checkboxes */}
            <div className="flex flex-col gap-2em leading-9 font-oxygen text-secondary">
              {[
                { label: "N5000 - N20000", range: [5000, 20000] },
                { label: "N20000 - N25000", range: [20000, 25000] },
                { label: "N25000 - N30000", range: [25000, 30000] },
                { label: "N30000 - N35000", range: [30000, 35000] },
                { label: "N35000 - N40000", range: [35000, 40000] },
              ].map(({ label }, index) => (
                <div key={index} className="flex gap-5 items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 checkbox"
                    // onChange={() => handleFilterChange("priceRange", range)}
                  />
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[5rem] w-[80%]">
        <div className="flex flex-col gap-[2rem]">
          <h1 className="font-tertiary font-normal text-[2.25em] text-color">
            Our Collection Of Products
          </h1>
          <div className="w-3/5">
            <SearchInput /> {/*onSearch={handleSearch} */}
          </div>
          <h3 className="font-oxygen font-bold text-secondary">
            Showing {indexOfFirstProduct + 1}-
            {Math.min(indexOfLastProduct, selectedProducts.length)} of{" "}
            {selectedProducts.length} Items
          </h3>

          {isLoading ? (
            <div className="loader"></div>
          ) : (
            <div className="grid grid-cols-3 justify-center gap-[4rem]">
              {mostPopular}
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center w-full">
          <div className="flex flex-col w-[50%] py-[5rem] gap-[1.6rem] items-center">
            <h3 className="font-oxygen font-bold text-secondary">
              Showing {indexOfFirstProduct + 1}-
              {Math.min(indexOfLastProduct, selectedProducts.length)} of{" "}
              {selectedProducts.length} Items
            </h3>

            <div className="w-full flex">
              <hr
                className={`w-[50%] h-1 border-0 ${
                  currentPage === 1 ? "bg-tertiary" : "bg-nextpage"
                }`}
              />
              <hr
                className={`w-[50%] h-1 border-0 ${
                  currentPage === totalPages ? "bg-tertiary" : "bg-nextpage"
                }`}
              />
            </div>

            <div className="font-secondary font-medium">
              <div className="flex justify-center mt-4">
                {currentPage > 1 && (
                  <button
                    className="flex place-items-center gap-4 bg-tertiary text-primary rounded-xl px-4 py-2 cursor-pointer hover:scale-110"
                    onClick={handlePrevPage}
                  >
                    Previous
                  </button>
                )}
                {currentPage < totalPages && (
                  <button
                    className="flex place-items-center gap-4 bg-tertiary text-primary rounded-xl px-4 py-2 cursor-pointer hover:scale-110"
                    onClick={handleNextPage}
                  >
                    View More
                    <img
                      src={angleRight}
                      alt="View More"
                      className="w-4 inline ml-1"
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
