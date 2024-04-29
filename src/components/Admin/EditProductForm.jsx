import { useContext, useEffect, useRef, useState } from "react";
import { AdminContext } from "../../../hooks/AdminContextPage";

const EditProductForm = ({ product }) => {
  const [editedProduct, setEditedProduct] = useState({
    Productid: "",
    ProductName: "",
    ProductPrice: "",
    ProductDescription: "",
    ProductCategory: "",
    SubCategory: "",
    ProductImage: "",
    Quantity: 0,
  });

  const { handleSave,handleCancel } = useContext(AdminContext);

  useEffect(() => {
    setEditedProduct(product);
  }, [product]);

const handleInputChange = (e) => {
  const { name, value } = e.target;
   console.log("name:", name);
   console.log("value:", value);
  setEditedProduct((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};
  

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(editedProduct);
  };

  // const handleCancel = () => {
  //   setEditingProduct(null);
  // };

    const formRef = useRef(null);

    useEffect(() => {
      setEditedProduct(product);
    }, [product]);

    useEffect(() => {
      const handleOutsideClick = (e) => {
        if (formRef.current && !formRef.current.contains(e.target)) {
          // Click occurred outside of the form, handle closing the form
          handleCancel();
        }
      };

      // Add event listener for clicks on the document body
      document.body.addEventListener("click", handleOutsideClick);

      // Cleanup function to remove event listener when component unmounts
      return () => {
        document.body.removeEventListener("click", handleOutsideClick);
      };
    }, []);

  return (
    <div className="bg-tertiary4 text-nextpage absolute top-[27%] z-50 xs:right-2 right-10 xs:w-[20rem] w-[30rem] ">
      <h2 className="font-bold text-2xl text-center">Edit Product</h2>
      <form className="flex flex-col gap-7 p-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label>Product Name:</label>
          <input
            type="text"
            name="ProductName"
            value={editedProduct.ProductName}
            onChange={handleInputChange}
            className="pl-2 py-1 border-2 border-border outline-categoryborder rounded-md text-color"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Product Price:</label>
          <input
            type="text"
            name="ProductPrice"
            value={editedProduct.ProductPrice}
            onChange={handleInputChange}
            className="pl-2 py-1 border-2 border-border outline-categoryborder rounded-md text-color"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Product Description:</label>{" "}
          <textarea
            type="text"
            name="ProductDescription"
            value={editedProduct.ProductDescription}
            onChange={handleInputChange}
            className="pl-2 py-1 border-2 border-border outline-categoryborder rounded-md text-color"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Product Category:</label>
          <input
            type="text"
            name="ProductCategory"
            value={editedProduct.ProductCategory}
            onChange={handleInputChange}
            className="pl-2 py-1 border-2 border-border outline-categoryborder rounded-md text-color"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>SubCategory:</label>
          <input
            type="text"
            name="SubCategory"
            value={editedProduct.SubCategory}
            onChange={handleInputChange}
            className="pl-2 py-1 border-2 border-border outline-categoryborder rounded-md text-color"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Product Image:</label>
          <input
            type="text"
            name="ProductImage"
            value={editedProduct.ProductImage}
            onChange={handleInputChange}
            className="pl-2 py-1 border-2 border-border outline-categoryborder rounded-md text-color"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Product Quantity:</label>
          <input
            type="number"
            name="Quantity"
            value={editedProduct.Quantity}
            onChange={handleInputChange}
            className="pl-2 py-1 border-2 border-border outline-categoryborder rounded-md text-color"
          />
        </div>

        <div className="flex gap-4 text-primary">
          <button
            type="submit"
            className="px-4 py-2 bg-tertiary rounded-lg cursor-pointer"
          >
            Save
          </button>

          <button
            type="delete"
            onClick={handleCancel}
            className="px-4 py-2 bg-delete rounded-lg cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductForm;
