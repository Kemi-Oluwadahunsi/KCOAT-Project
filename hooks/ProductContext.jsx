import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  const [loggedInUserEmail, setLoggedInUserEmail] = useState(null)
  const [loggedInUserId, setLoggedInUserId] = useState(null)
  const [userProfile, setUserProfile] = useState(null);

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

   const login = (email, userId) => {
     // Update login function to set loggedInUserId
     setLoggedInUserEmail(email);
     setLoggedInUserId(userId);
     localStorage.setItem("isLoggedIn", true);
   };

   const logout = async (email) => {
     try {
       // Post to the /logout endpoint with email as request body
       await axios.post("https://kcoat.onrender.com/logout", { email });
       // Clear loggedInUserEmail and loggedInUserId
       setLoggedInUserEmail(null);
       setLoggedInUserId(null);
       // Remove isLoggedIn from localStorage
       localStorage.removeItem("isLoggedIn");
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


  // const fetchUserDetails = async (customerId) => {
  //   try {
  //     const response = await axios.get(
  //       `https://kcoat.onrender.com/user-profile/${customerId}`
  //       // `https://kcoat.onrender.com/user-profile/5b70121d-24db-4d90-bde4-92d89357c605`
  //     );
  //     console.log("User details:", response.data);
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error fetching user details:", error);
  //   }
  //   //   }
  // };

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
        loggedInUserId,
        isLoading,
        userProfile,
        // mostPopularProducts,
        // fetchUserDetails,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
