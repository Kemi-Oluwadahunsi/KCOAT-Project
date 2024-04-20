import axios from "axios";
import { createContext, useState } from "react";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [editingProduct, setEditingProduct] = useState(null);

 
  const handleEdit = (product) => {
    setEditingProduct({ ...product });
  };

 const handleSave = async (editedProduct) => {
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
      // Send DELETE request to the server to delete the product
      await axios.delete(`https://kcoat.onrender.com/products/${product.Productid}`);
      // You can add more actions if needed, like showing a success message
    } catch (error) {
      console.error("Error deleting product:", error);
      throw new Error("Failed to delete product.");
    }
  };

  return (
    <AdminContext.Provider
      value={{ editingProduct, handleEdit, handleSave, handleDelete }}
    >
      {children}
    </AdminContext.Provider>
  );
};

