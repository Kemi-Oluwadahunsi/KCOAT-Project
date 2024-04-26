import axios from "axios";
import { createContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axiosRetry from "axios-retry";

axiosRetry(axios, {
  retries: 3, // Number of retries
  retryDelay: axiosRetry.exponentialDelay, // Exponential delay between retries
  shouldResetTimeout: true, // Reset timeout between retries
});

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [editingProduct, setEditingProduct] = useState(null);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    // Initialize isAdminLoggedIn state based on value from localStorage
    return localStorage.getItem("isAdminLoggedIn") === "true";
  });
  const navigate = useNavigate();

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth", // Optional: smooth scroll animation
  //   });
  // };

  const handleAdminLogin = async (event) => {
    event.preventDefault();

    try {
      const emailInput = document.getElementById("email").value;
      const passwordInput = document.getElementById("password").value;

      const response = await axios.post(
        "https://kcoat.onrender.com/admin-login",
        {
          email: emailInput,
          password: passwordInput,
        }
      );

      console.log(response.data);
      // Successful authentication
      toast.success("Login successful!");
      localStorage.setItem("isAdminLoggedIn", "true");
      setIsAdminLoggedIn(true);
      setTimeout(() => {
        navigate("/kcoat");
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        const status = error.response.status;
        if (status === 404) {
          toast.error("Wrong Email");
        } else if (status === 401) {
          toast.error("Wrong password");
        } else {
          console.error("Server Error:", error);
          toast.error("An unexpected error occurred. Please try again later.");
        }
      } else {
        console.error("Network Error:", error);
        toast.error(
          "A network error occurred. Please check your internet connection."
        );
      }
    }
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    setIsAdminLoggedIn(false);
    navigate("/admin-login");
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  // const handleCancel = () => {
  //   setEditingProduct(null);
  // };

  const handleSave = async (editedProduct) => {
    if (!isAdminLoggedIn) {
      // If admin is not logged in, show error message and return
      toast.error("Admin is not logged in.");
      return;
    }
    try {
      // Send edited product details to the server using PUT request
      await axios.put(
        `https://kcoat.onrender.com/products/${editedProduct.Productid}`,
        editedProduct
      );
      // Update the editingProduct state to null after successful save
      setEditingProduct(null);
      // You can add more actions if needed, like showing a success message
    } catch (error) {
      console.error("Error saving product:", error);
      throw new Error("Failed to save product.");
    }
  };

  const handleDelete = async (product) => {
    try {
      // Show confirmation dialog before deleting the product
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this product?"
      );
      if (!confirmDelete) {
        return; // Do nothing if user cancels deletion
      }

      // Send DELETE request to the server to delete the product
      if (confirmDelete) {
        await axios.delete(
          `https://kcoat.onrender.com/products/${product.Productid}`
        );

        // Show success message using React Toastify
        toast.success("Product deleted successfully!");

        // You can add more actions if needed
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      throw new Error("Failed to delete product.");
    }
  };

  return (
    <AdminContext.Provider
      value={{
        editingProduct,
        handleEdit,
        handleSave,
        handleDelete,
        ToastContainer,
        handleAdminLogin,
        isAdminLoggedIn,
        handleAdminLogout,
        // handleCancel,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
