import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext();

export const ProductProvider = ({ children}) => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
   const [loadings, setLoadings] = useState(true); 
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

// localStorage.getItem("isLoggedIn") === true ? setIsLoggedIn(true) : setIsLoggedIn(false);
  const [loggedInUserEmail, setLoggedInUserEmail] = useState(null)
  // const [loggedInUserId, setLoggedInUserId] = useState(null)
  const [userProfile, setUserProfile] = useState(null);
    const [usersProfile, setUsersProfile] = useState([]);
    const [totalUsers, setTotalUsers] =useState(null)

    const navigate = useNavigate();
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Optional: smooth scroll animation
      });
    };

    

  useEffect(() => {
    setLoadings(true);

    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://kcoat.onrender.com/user-profile"
        );
        const data = await response.data;
        console.log(data);
        setLoadings(false);
        setUsersProfile(data);
        setTotalUsers(data.length);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setLoadings(false);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Fetch array of user profiles
        const response = await axios.get(
          "https://kcoat.onrender.com/user-profile"
        );
        const userProfiles = response.data;

        // Find user profile with matching email
        const loggedInUser = userProfiles.find(
          (profile) => profile.email === loggedInUserEmail
        );

        if (loggedInUser) {
          // Fetch user profile details by ID
          const userProfileResponse = await axios.get(
            `https://kcoat.onrender.com/user-profile/${loggedInUser.customerId}`
          );
          setIsLoading(false);
          setUserProfile(userProfileResponse.data);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [loggedInUserEmail]);

   useEffect(() => {
     // Check local storage for login state
     const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
     const storedUserEmail = localStorage.getItem("userEmail");
     if (storedIsLoggedIn && storedUserEmail) {
       setIsLoggedIn(JSON.parse(storedIsLoggedIn));
       setLoggedInUserEmail(storedUserEmail);
     }
   }, []);


   const login = (email) => {
     // Update login function to set loggedInUserId
     setLoggedInUserEmail(email);
    //  setLoggedInUserId(customerId);
    setIsLoggedIn( true);
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("userEmail", email);
   };

   const logout = async () => {
     try {
      
       setIsLoggedIn(false);
        setLoggedInUserEmail(null);
       // Remove login state from local storage
       localStorage.removeItem("isLoggedIn");
       localStorage.removeItem("userEmail");
        setTimeout(() => {
          navigate("/");
        }, 500);
        scrollToTop();
   
     } catch (error) {
       console.error("Error logging out:", error);
     }
   };

  //  const logout = () => {
  //    // Update logout function to clear loggedInUserId
  //    setLoggedInUserEmail(null);
  //    setLoggedInUserId(null);
  //    localStorage.removeItem("isLoggedIn");
  //  };


  // useEffect(() => {
  //   const MostPopularProduct = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://kcoat.onrender.com/products/most-popular-products"
  //       );
  //       // console.log("Most Popular Products:", response.data);
  //       setMostPopularProducts(response.data);
  //     } catch (error) {
  //       // console.error("Error fetching product:", error)
  //     }
  //   };
  //   MostPopularProduct();
  // }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://kcoat.onrender.com/products");
        console.log("Products:", response.data); // Log response data
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error); // Log error
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const fetchProductById = async (productId) => {
    try {
      const response = await axios.get(
        `https://kcoat.onrender.com/products/${productId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      return null;
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        setLoading,
        fetchProductById,
        isLoggedIn,
        setIsLoggedIn,
        login,
        loggedInUserEmail,
        logout,
        // loggedInUserId,
        isLoading,
        userProfile,
        usersProfile,
        totalUsers,
        loadings,
        
        // mostPopularProducts,
        // fetchUserDetails,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
