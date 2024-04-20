import { useEffect, useState } from "react";

const EditProductForm = ({ product, onSave, onCancel }) => {
const [editedProduct, setEditedProduct] = useState({
  Productid: "",
  ProductName: "",
  ProductPrice: "",
  ProductDescription: "",
  ProductCategory: "",
  SubCategory: "",
  ProductImage: "",
  ProductSize: 0,
  Quantity: 0,
});

 useEffect(() => {
   setEditedProduct(product);
 }, [product]);

 const handleInputChange = (e) => {
   const { name, value } = e.target;
   setEditedProduct({ ...editedProduct, [name]: value });
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   onSave(editedProduct);
 };

  return (
    <div className="bg-tertiary4 text-nextpage absolute top-[30%] right-10 w-[30rem] ">
      <h2 className="font-bold text-2xl text-center">Edit Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-7 p-4">
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
          <label>Product Size:</label>
          <textarea
            type="number"
            name="ProductSize"
            value={editedProduct.ProductSize}
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
        {/* Add more fields as needed */}
        <div className="flex gap-4 text-primary">
          <button type="submit" className="px-4 py-2 bg-tertiary rounded-lg">
            Save
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-delete rounded-lg"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductForm;
