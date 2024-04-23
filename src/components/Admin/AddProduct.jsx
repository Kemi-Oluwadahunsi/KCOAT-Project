import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const AddProduct = () => {
  // State variables for forms
  const [ProductName, setProductName] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductCategory, setProductCategory] = useState("");
  const [SubCategory, setSubCategory] = useState("")
  const [Quantity, setQuantity] = useState("");
  const [ProductImage, setProductImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  //   const [isFormOpen, setIsFormOpen] = useState(false);

  // Form submission function
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // FormData object

    try {
      setIsSubmitting(true);
      const cloudinaryResponse = await uploadImageToCloudinary(ProductImage);

      const imageUrl = cloudinaryResponse.data.secure_url;
      const formData = new FormData();
      formData.append("ProductName", ProductName);
      formData.append("ProductDescription", ProductDescription);
      formData.append("ProductCategory", ProductCategory);
      formData.append("SubCategory", SubCategory);
      formData.append("ProductPrice", ProductPrice);
      formData.append("Quantity", Quantity);
      formData.append("ProductImage", imageUrl);

      await uploadImageToCloudinary(formData.image);

      const response = await axios.post(
        "https://kcoat.onrender.com/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setSuccess("Product added successfully!");
        // Clear form data
        setProductName("");
        setProductDescription("");
        setProductPrice("");
        setProductCategory("");
        setSubCategory("");
        setQuantity("");
        setProductImage(null);
      } else {
        setError("Failed to add product. Please try again.");
      }
    } catch (error) {
      setError("Failed to add product. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const uploadImageToCloudinary = async (imageFile) => {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "wq90ysos"); // Replace with your Cloudinary upload preset

    return await axios.post(
      "https://api.cloudinary.com/v1_1/dcqybedxj/image/upload",
      formData
    );
  };

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    // When the image icon is clicked, trigger a click event on the file input
    fileInputRef.current.click();
  };

  return (
    <div
      className="w-full
    "
    >
      <div className="flex flex-col w-[50%] pl-[4em]">
        <div className="">
          <h1 className="text-[2.5rem] font-lso text-categoryborder">
            Add A New Product
          </h1>
        </div>
        {/* For success or error messages */}
        {success && (
          <div className="bg-tertiary text-primary p-2 rounded-md">
            {success}
          </div>
        )}
        {error && (
          <div className="bg-delete text-primary p-2 rounded-md">{error}</div>
        )}

        {/* For choose file*/}
        {/* {isFormOpen && ( */}
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="flex flex-col gap-2" onClick={handleImageClick}>
            <label className="text-categoryborder font-oxygen text-lg font-medium">
              Choose File:
            </label>
            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) => setProductImage(e.target.files[0])}
              className="border rounded-lg border-simple1 outline-simple1
                      file:bg-simple1 file:border-none file:py-2  file:font-oxygen"
            />
          </div>
          {/* add new product form */}
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
        {/* )} */}
      </div>
    </div>
  );
};

export default AddProduct;
