import axios from "axios";
import Button from "../StaticComponents/Button";
// import userdp from "../../assets/Ellipse-4.svg";
import { useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "../../../hooks/ProductContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProfile = () => {
  const [progress, setProgress] = useState({ started: false, percentage: 0 });
  const [message, setMessage] = useState("");
  const { userProfile } = useContext(ProductContext);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    state: "",
    image: null,
  });

  useEffect(() => {
    if (userProfile) {
      setFormData({
        firstName: userProfile.firstName || "",
        lastName: userProfile.lastName || "",
        email: userProfile.email || "",
        phoneNumber: userProfile.phoneNumber || "",
        address: userProfile.address || "",
        state: userProfile.state || "",
        image: null,
      });
    }
  }, [userProfile]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleImageClick = () => {
    // When the image icon is clicked, trigger a click event on the file input
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
// if (!image) {
//   setMessage("Please select an image.");
//   toast.error(message);
// }
    try {
      const formDataWithImage = new FormData();
      formDataWithImage.append("firstName", formData.firstName);
      formDataWithImage.append("lastName", formData.lastName);
      formDataWithImage.append("email", formData.email);
      formDataWithImage.append("phoneNumber", formData.phoneNumber);
      formDataWithImage.append("address", formData.address);
      formDataWithImage.append("state", formData.state);
      formDataWithImage.append("image", formData.image);

      await uploadImageToCloudinary(formData.image);
      setMessage("Uploading...")     
      setProgress((prevState) => {
        return { ...prevState, started: true, percentage: 0 };
      }); 
      await axios.put(
        `https://kcoat.onrender.com/user-profile/${userProfile.customerId}`,
        formDataWithImage,
        {
          onUploadProgress: (progressEvent) => {
            toast.loading(
              setProgress((prevState) => {
                return {
                  ...prevState,
                  percentage: Math.round(progressEvent.progress * 100),
                };
              })
            );
          },
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Profile edited successful!");
      setTimeout(() => {
        navigate("/user-profile");
      }, 4000);
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  const uploadImageToCloudinary = async (imageFile) => {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "joznqvva"); // Replace with your Cloudinary upload preset

    return await axios.post(
      "https://api.cloudinary.com/v1_1/dcqybedxj/image/upload",
      formData
    );
  };

  return (
    <div className="pt-[8rem] xs:px-[2rem] md:px-[10rem] px-[20rem] py-[5em] font-oxygen">
      <form action="" onSubmit={handleSubmit}>
        <div className="">
          <div className=" flex flex-col xs:gap-4 gap-8 items-center justify-center rounded-3xl py-[2em] xs:px-0 px-[5em] ">
            <div onClick={handleImageClick} style={{ cursor: "pointer" }}>
              {/* <img src={userdp} alt="" /> */}
              <img src={formData.image} alt="User-image" />
              <input
                type="file"
                ref={fileInputRef}
                name="image"
                onChange={handleImageChange}
                accept="image/*"
                className="rounded-full w-20 h-20 bg-bland"
              />

              {progress.started && (
                <progress max="100" value={progress.percentage}></progress>
              )}
              {message && <span className="text-tertiary">{message}</span>}
            </div>
            <div className="flex flex-col items-center gap-4 xs:text-base text-[1.5em] font-bold  justify-center">
              <h1>
                {formData.firstName} {formData.lastName}
              </h1>
              <p>{formData.address}</p>
            </div>
          </div>

          <div className="flex flex-col xs:gap-[2em] gap-[5em]">
            <div className="flex flex-col xs:gap-[1em] gap-[2em]">
              <h2 className="text-[1.5em] xs:text-[1.2em] font-bold">
                Account Settings
              </h2>

              <div className="flex flex-col  gap-[1.5em]">
                <h2 className="text-[1.1em] font-bold">Profile Information</h2>

                <div className="flex flex-col xs:gap-[1em] gap-[1.5em]">
                  <div className="flex xs:flex-col justify-between xs:gap-[1em] gap-[5em] w-full">
                    <div className="flex flex-col gap-3 basis-[50%]">
                      <label>First Name</label>
                      <input
                        className="border border-border w-full  xs:py-2  px-4 py-3 rounded-[1.5em] outline-createaccount"
                        placeholder="Hannah"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex basis-[50%] flex-col gap-3">
                      <label>Last Name</label>
                      <input
                        className="border border-border w-full px-4 xs:py-2  py-3 rounded-[1.5em] outline-createaccount"
                        placeholder="Daniels"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="flex xs:flex-col justify-between xs:gap-[1em] gap-[5em] w-full">
                    <div className="flex  xs:basis-[100%] basis-[50%] flex-col gap-3">
                      <label>Email Address</label>
                      <input
                        className="border border-border px-4 xs:py-2 py-3 rounded-[1.5em] outline-createaccount"
                        placeholder="hannahdaniels@gmail.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex flex-col basis-[50%] gap-3">
                      <label>Phone</label>
                      <input
                        className="border border-border px-4  xs:py-2 py-3 rounded-[1.5em] outline-createaccount"
                        placeholder="+2348084400000"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col xs:gap-[1em] gap-[1.5em]">
                <h2 className="text-[1.1em] font-bold">Change Password</h2>

                <div
                  action=""
                  className="flex xs:flex-col w-full xs:gap-[1em] gap-[5em] "
                >
                  <div className="flex flex-col gap-3 basis-[50%]">
                    <label htmlFor="password">New Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="***********"
                      className="border border-border w-full  xs:py-2 px-4 py-3 rounded-[1.5em] outline-createaccount"
                      value={formData.newPassword}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-col gap-3 basis-[50%]">
                    <label htmlFor="password">Confirm Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="***********"
                      className="border border-border w-full px-4 xs:py-2 py-3 rounded-[1.5em] outline-createaccount"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col xs:gap-[1em] gap-[1.5em]">
                <h2 className="text-[1.1em] font-bold">Address</h2>

                <div className="flex flex-col xs:gap-[1em] gap-[1.5em]">
                  <div className="flex flex-col gap-[1em]">
                    <label htmlFor="password">Delivery Address</label>
                    <textarea
                      cols="5"
                      placeholder="Your address"
                      className="border border-border w-full px-4 py-3 rounded-[1.5em] outline-createaccount"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-col gap-[1em]">
                    <label htmlFor="password">State</label>
                    <input
                      placeholder="Your state"
                      className="border border-border xs:py-2 px-4 py-3 rounded-[1.5em] outline-createaccount xs:w-[100%] w-[50%]"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className={`flex items-center justify-center w-[15em] bg-simple1 text-tertiary2 font-oxygen text-xl py-1 px-5 rounded-xl mx-auto hover:scale-105 cursor-pointer`}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </form>
      <div className="z-[10000] pt-[20em] xs:pt-0 md:pt-0">
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  );
};

export default EditProfile;


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setIsSubmitting(true);
  //   const formData = {
  //     ProductName,
  //     ProductPrice,
  //     ProductDescription,
  //     Quantity,
  //     ProductCategory,
  //     SubCategory,
  //     ProductImage: imageUrl,
  //   };
  //   // Make a POST request to your backend endpoint with the form data
  //   fetch("https://kcoat.onrender.com/products", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });
    //    if (response.status === 200) {
    //     setSuccess("Product added successfully!");
    //     // Clear form data
    //     setProductName("");
    //     setProductDescription("");
    //     setProductPrice("");
    //     setProductCategory("");
    //     setSubCategory("");
    //     setQuantity("");
    //     setProductImage(null);
    //   } else {
    //     setError("Failed to add product. Please try again.");
    //   }
    // }
    
  // };