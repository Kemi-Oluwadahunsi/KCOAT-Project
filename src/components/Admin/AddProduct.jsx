import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Upload from "./Upload";

const AddProduct = () => {
  // State variables for forms
  const [ProductName, setProductName] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [ProductPrice, setProductPrice] = useState(0);
  const [ProductCategory, setProductCategory] = useState("");
  const [SubCategory, setSubCategory] = useState("");
  const [Quantity, setQuantity] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);


   const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("ProductName", ProductName);
      formData.append("ProductDescription", ProductDescription);
      formData.append("ProductPrice", ProductPrice);
      formData.append("ProductCategory", ProductCategory);
      formData.append("SubCategory", SubCategory);
      formData.append("Quantity", Quantity);
      formData.append("ProductImage", imageUrl);

  const response = await axios.post(
        "https://kcoat.onrender.com/products",
        formData
      );

      if (response.status === 200) {
        toast.success("Product added successfully!");
        setProductName("");
        setProductDescription("");
        setProductPrice("");
        setProductCategory("");
        setSubCategory("");
        setQuantity("");
        
      } else {
        toast.error("Failed to add product. Please try again.");
      }
    } catch (error) {
      console.error("An error occured:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="w-full
    "
    >
      <div className="flex flex-col w-[50%] pl-[4em]">
        <div className="">
          <h1 className="text-[2.5rem] font-lso text-categoryborder">
            Add New Product
          </h1>
        </div>

        <div>
          
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-categoryborder font-oxygen text-lg font-medium">
                  Choose File:
                </label>
                {/* <input
                  type="file"
                  value={imageUrl}
                  onChange={(e) => setProductImage(e.target.files[0])}
                  className="border rounded-lg border-simple1 outline-simple1
                      file:bg-simple1 file:border-none file:py-2  file:font-oxygen"
                /> */}
              </div>

              {/* add new product form */}

              <div>
                <Upload
                  setImageUrl={setImageUrl} // Pass the setImageUrl function as a prop
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-categoryborder font-oxygen text-lg font-medium">
                  Product Title:
                </label>
                <input
                  type="text"
                  value={ProductName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="p-2 border rounded-lg border-simple1 outline-simple1"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-categoryborder font-oxygen text-lg font-medium">
                  Product Description:
                </label>
                <textarea
                  value={ProductDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  className="p-2 border rounded-lg border-simple1 outline-simple1"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-categoryborder font-oxygen text-lg font-medium">
                  Product Price:
                </label>
                <input
                  type="number"
                  value={ProductPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  className="p-2 border rounded-lg border-simple1 outline-simple1"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-categoryborder font-oxygen text-lg font-medium">
                  Product Category:
                </label>
                <input
                  type="text"
                  value={ProductCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                  className="p-2 border rounded-lg border-simple1 outline-simple1"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-categoryborder font-oxygen text-lg font-medium">
                  SubCategory:
                </label>
                <input
                  type="text"
                  value={SubCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  className="p-2 border rounded-lg border-simple1 outline-simple1"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-categoryborder font-oxygen text-lg font-medium">
                  Product Quantity:
                </label>
                <input
                  type="number"
                  value={Quantity}
                  onChange={(e) => setQuantity(parseFloat(e.target.value))}
                  className="p-2 border rounded-lg border-simple1 outline-simple1"
                  required
                />
              </div>
              {/*for the buttonns below the container NOTE: Button Component not working here */}
               <div className="flex justify-center space-x-4">
                <button
                  type="submit"
                  className={`px-4 py-2 border text-primary border-simple1 
                  bg-tertiary outline-simple1 rounded-xl`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Adding..." : "Add Product"}
                  <FontAwesomeIcon icon={faPlus} className="ml-2" />
                </button>
              </div>
            </form>

        </div>

        {/* )} */}
      </div>
      <div className="z-[10000] pt-[20em] xs:pt-0 md:pt-0">
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  );
};

export default AddProduct;
