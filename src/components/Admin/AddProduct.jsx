import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import AdminSidebar from "./AdminSidebar";
import users from '../../assets/u_users-alt.svg';
import shopping from '../../assets/u_shopping-bag.svg';
import bell from '../../assets/bell-active-outline.svg';

const AddProduct = () => {
  // State variables for forms
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Form submission function
  const handleFormSubmit = async (event) => {
      event.preventDefault();
      
      // FormData object
      const formData = new FormData();
      formData.append('name', productName);
      formData.append('description', productDescription);
      formData.append('price', productPrice);
      formData.append('quantity', productQuantity);
      formData.append('image', productImage);

      try {
          setIsSubmitting(true);

          const response = await axios.post('/api/products', formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });

          if (response.status === 200) {
              setSuccess('Product added successfully!');
              // Clear form data
              setProductName('');
              setProductDescription('');
              setProductPrice('');
              setProductQuantity('');
              setProductImage(null);
          } else {
              setError('Failed to add product. Please try again.');
          }
      } catch (error) {
          setError('Failed to add product. Please try again.');
          console.error(error);
      } finally {
          setIsSubmitting(false);
      }
  };

  // Function to handle closing the form
  const handleClose = () => {
      console.log('Form closed');
      setIsFormOpen(false);
  };

  return (

      <div className="flex pt-[2rem]">
          <AdminSidebar/>
      <div className="flex-1 p-5">

              {/* Add new product section */}
          <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-categoryborder">Add a New Product</h1>
              <button onClick={handleClose}>
                  <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
          </div>
            {/* the heading*/}
      <div className="basis-[80%] pt-[2em] flex justify-between">
          <div className="flex items-center">
                <img src={shopping} alt="Total Sale" />
              <div>
                    <p className="font-oxygen">Total Sales</p>
                    <p className="font-poppins font-bold text-2xl text-stats">N0.00</p>
              </div>
            </div>
            <div className="flex items-center">
                <img src={users} alt="Total Visitors" />
                <div>
                          <p className="font-oxygen">Total Visitors</p>
                          <p className="font-poppins font-bold text-2xl text-stats">0</p>
                </div>
              </div>

              <div className="flex items-center">
                    <img src={bell} alt="Notifications"/>
                    <div>
                        <p className="font-oxygen">Notifications</p>
                        <p className="font-poppins font-bold text-2xl text-stats">0</p>
                    </div>
              </div>
              <div className="flex items-center">
                    <div>
                        <p className="font-oxygen">Total Orders</p>
                        <p className="font-poppins font-bold text-2xl text-stats">0</p>
                    </div>
              </div>
        </div>
             {/*The x icon not currently closing*/}
      <div className='flex flex-col w-[60%] mx-auto px-[8rem]'>
          <div className="inline-flex gap-[5em] p-[1em]">
              <h1 className="text-[2.5rem] font-lso text-categoryborder">Add A New Product</h1>
              <button onClick={handleClose} className="">
                  <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
          </div>
          {/* For success or error messages */}
              {success && <div className="bg-tertiary text-primary p-2 rounded-md">{success}</div>}
              {error && <div className="bg-delete text-primary p-2 rounded-md">{error}</div>}

                    {/* For choose file*/}
          <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="flex flex-col gap-2">
                  <label className="text-categoryborder font-oxygen text-lg font-medium"
                  >Choose File:</label>
                  <input
                      type="file"
                      onChange={(e) => setProductImage(e.target.files[0])}
                      className="border rounded-lg border-simple1 outline-simple1
                      file:bg-simple1 file:border-none file:py-2  file:font-oxygen"
                  />
              </div>
                       {/* add new product form */}
                  <div className="flex flex-col gap-2">
                      <label className="text-categoryborder font-oxygen text-lg 
                      font-medium">Product Title:</label>
                      <input
                          type="text"
                          value={productName}
                          onChange={(e) => setProductName(e.target.value)}
                          className="p-2 border rounded-lg border-simple1 outline-simple1"
                          required
                      />
                  </div>

          
          <div className="flex flex-col gap-2">
              <label className="text-categoryborder font-oxygen text-lg font-medium">Product Description:</label>
              <textarea
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  className="p-2 border rounded-lg border-simple1 outline-simple1"
                  required
              />
          </div>

          <div className="flex flex-col gap-2">
              <label className="text-categoryborder font-oxygen text-lg font-medium"
              >Product Price:</label>
              <input
                  type="number"
                  value={productPrice}
                  onChange={(e) => setProductPrice(parseFloat(e.target.value))}
                  className="p-2 border rounded-lg border-simple1 outline-simple1"
                  required
              />
          </div>

          <div className="flex flex-col gap-2">
              <label className="text-categoryborder font-oxygen text-lg font-medium"
              >Product Quantity:</label>
              <input
                  type="number"
                  value={productQuantity}
                  onChange={(e) => setProductQuantity(parseFloat(e.target.value))}
                  className="p-2 border rounded-lg border-simple1 outline-simple1"
                  required
              />
          </div>
                {/*for the buttonns below the container NOTE: Button Component not working here */}
          <div className="flex justify-center space-x-4">
              <button
                  type="button"
                  onClick={handleClose}
                  className="text-categoryborder font-oxygen text-lg border 
                  border-simple1 hover:scale-105 rounded-xl px-4 py-2 cursor-pointer"
              >
                  Close
              </button>
                    
              <button
                  type="submit"
                  className={`px-4 py-2 border text-primary border-simple1 
                  bg-tertiary outline-simple1 rounded-xl`}
                  disabled={isSubmitting}
              >
                  {isSubmitting ? 'Adding...' : 'Add Product'}
                  <FontAwesomeIcon icon={faPlus} className="ml-2" />
              </button>
          </div>
      </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;