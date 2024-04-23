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
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [priceRange, setPriceRange] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products on component mount
  useEffect(() => {
    // Fetch products on mount
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://kcoat.onrender.com/products");
        setFilteredProducts(response.data);
        setSelectedProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  /// Filter products based on search query and price range
  useEffect(() => {
    const filterProducts = () => {
      const filtered = selectedProducts.filter((product) => {
        const matchesPriceRange =
          !priceRange.length ||
          (product.ProductPrice >= priceRange[0] &&
            product.ProductPrice <= priceRange[1]);

        const matchesSearchQuery =
          product.ProductName.toLowerCase().includes(
            searchQuery.toLowerCase()
          ) ||
          product.ProductDescription.toLowerCase().includes(
            searchQuery.toLowerCase()
          ) ||
          (Number(searchQuery) && product.ProductPrice === Number(searchQuery));

        return matchesPriceRange && matchesSearchQuery;
      });

      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [selectedProducts, priceRange, searchQuery]);

 const handleSearchInputChange = (value) => {
   // Ensure that value is defined before accessing its properties
   if (value !== undefined) {
     setSearchQuery(value);
   }
 };
  
  const handlePriceRangeClick = (range) => {
    // Toggle the price range filter
    if (priceRange[0] === range[0] && priceRange[1] === range[1]) {
      // If the range is already selected, uncheck it and reset the filter
      setPriceRange([]);
    } else {
      // If the range is not selected, set the price range filter
      setPriceRange(range);
    }
  };

  const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  console.log("Current Products:", currentProducts);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

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
    <div className="flex xs:flex-col xs:px-[2rem] md:px-0 px-[6.2rem] xs:gap-[2rem] gap-[5rem] xs:py-0 py-[3rem] relative xs:pt-[8rem] pt-[8em] border-l-8 border-simple1">
      <div className="flex flex-col xs:flex-row xs:gap-0 xs:justify-between xs:w-full gap-[3em] w-[20%]">
        {/* Categories and Filters */}
        <div className="flex items-center xs:w-[45%] w-full xs:py-[0.5em] py-[2em] xs:px-[0.5em] px-[1.8em] border-2 border-categoryborder2 xs:h-fit">
          <div className="flex flex-col xs:gap-[0.5em] gap-[1.5em] w-full">
            <h2 className="font-tertiary xs:text-base text-[1.2em] pl-4 border-l-4 border-categoryborder">
              Categories
            </h2>
            <ul className="flex flex-col gap-[3em] font-oxygen w-full">
              <Submenu setSelectedProducts={setSelectedProducts} />
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center xs:w-[49%] xs:h-fit w-full xs:pl-2 xs:py-[0.5em] py-[2em] border-2 border-categoryborder2">
          <div className="flex flex-col xs:gap-3 gap-5 xs:w-[100%] w-[80%]">
            <div className="font-tertiary xs:text-base text-[1.2em] border-l-4 border-categoryborder">
              <h2 className="pl-4">Price Range</h2>
            </div>

            {/* Price range checkboxes */}
            <div className="flex flex-col xs:gap-[0.5em] xs:text-[0.8em] xs:leading-5 leading-9 font-oxygen text-secondary">
              {[
                { label: "N5000 - N20000", range: [5000, 20000] },
                { label: "N20000 - N25000", range: [20000, 25000] },
                { label: "N25000 - N30000", range: [25000, 30000] },
              ].map(({ label, range }, index) => (
                <div key={index} className="flex xs:gap-1 gap-5 xs:items-start items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 checkbox"
                    checked={priceRange[0] === range[0]}
                    onChange={() => {}}
                    onClick={() => handlePriceRangeClick(range)}
                    style={{
                      cursor:
                        priceRange[0] === range[0] ? "default" : "pointer",
                    }}
                  />
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col xs:gap-[3rem] gap-[5rem] xs:w-[100%] w-[80%]">
        <div className="flex flex-col xs:gap-[1rem] gap-[2rem]">
          <h1 className="font-tertiary font-normal xs:text-[1.5em] text-[2.25em] text-color">
            Our Collection Of Products
          </h1>
          <div className=" xs:w-full w-3/5">
            <SearchInput
              value={searchQuery}
              onChange={handleSearchInputChange}
            />{" "}
            {/*onSearch={handleSearch} */}
          </div>
          <h3 className="font-oxygen font-bold text-secondary">
            Showing {indexOfFirstProduct + 1}-
            {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
            {filteredProducts.length} Items
          </h3>

          {isLoading ? (
            <div className="loader"></div>
          ) : (
            <div className="grid xs:grid-cols-2 sm:grid-cols-2 grid-cols-3 justify-center xs:gap-[2rem] md:gap-[1rem] gap-[4rem]">
              {mostPopular}
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center w-full">
          <div className="flex flex-col xs:w-[100%] w-[50%] xs:py-[1rem] py-[5rem] gap-[1.6rem] items-center">
            <h3 className="font-oxygen font-bold text-secondary">
              Showing {indexOfFirstProduct + 1}-
              {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
              {filteredProducts.length} Items
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
              <div className="flex justify-center xs:mt-2 mt-4">
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
