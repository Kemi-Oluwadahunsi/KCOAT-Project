
const Button = ({children, className}) => {
  return (
    <>

    <div className={` ${className}`}>
      <button className=" flex place-items-center gap-4 bg-tertiary text-primary rounded-xl px-4 py-2 cursor-pointer border-0">
        {children}
      </button>
    </div>
      
    </>
  );
}

export default Button;


  // const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);

 // const [searchQuery, setSearchQuery] = useState("");
  // const [filters, setFilters] = useState({
  //   priceRange: null,
  //   category: null,
  // });

  // const fetchProducts = async () => {
  //   try {
  //     // Make API call to fetch products
  //     const response = await axios.get("https://kcoat.onrender.com/products");
  //     console.log(response.data);
  //     setSelectedProducts(response.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //     setIsLoading(false);
  //   }
  // };

//  useEffect(() => {
//    filterProducts();
//  }, [searchQuery, filters]);

//  const filterProducts = () => {
//    let filtered = products;

//    // Search query filter
//    if (searchQuery) {
//      filtered = filtered.filter((product) =>
//        product.ProductName.toLowerCase().includes(searchQuery.toLowerCase())
//      );
//    }

//    // Price range filter
//    if (filters.priceRange) {
//      const [minPrice, maxPrice] = filters.priceRange;
//      filtered = filtered.filter(
//        (product) =>
//          product.ProductPrice >= minPrice && product.ProductPrice <= maxPrice
//      );
//    }

//    // Category filter
//    if (filters.category) {
//      filtered = filtered.filter(
//        (product) =>
//          product.Category.toLowerCase() === filters.category.toLowerCase()
//      );
//    }

//    setFilteredProducts(filtered);
//    setCurrentPage(1); // Reset current page when filter change
//  };

//  const handleSearch = (query) => {
//    setSearchQuery(query);
//  };

//  const handleFilterChange = (type, value) => {
//    setFilters((prevFilters) => ({
//      ...prevFilters,
//      [type]: value,
//    }));
//  };