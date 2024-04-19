import axios from "axios";
import Button from "../StaticComponents/Button";
import userdp from "../../assets/Ellipse-4.svg";
import { useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "../../../hooks/ProductContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EditProfile = () => {
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
    if (e.target.name === "image") {
      // If the input is an image file, set the image state
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleImageClick = () => {
    // When the image icon is clicked, trigger a click event on the file input
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataWithImage = new FormData(); // Create FormData object
      // Append form data to include the image file
      formDataWithImage.append("image", formData.image);
      formDataWithImage.append("firstName", formData.firstName);
      formDataWithImage.append("lastName", formData.lastName);
      formDataWithImage.append("email", formData.email);
      formDataWithImage.append("phoneNumber", formData.phoneNumber);
      formDataWithImage.append("address", formData.address);
      formDataWithImage.append("state", formData.state);

      await axios.put(
        `https://kcoat.onrender.com/user-profile/${userProfile.customerId}`,
        formDataWithImage,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type to multipart/form-data for file upload
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
  return (
    <div className="pt-[8rem] px-[20rem] py-[5em] font-oxygen">
      <form action="" onSubmit={handleSubmit}>
        <div className="">
          <div className=" flex flex-col gap-8 items-center justify-center rounded-3xl py-[2em] px-[5em] ">
            <div onClick={handleImageClick} style={{ cursor: "pointer" }}>
              <img src={userdp} alt="" />
              {/* <img src={formData.image} alt="User-image" /> */}
              {/* <input
                type="file"
                ref={fileInputRef} // Attach the ref to the file input
                style={{ display: "none" }} // Hide the file input
                name="image"
                onChange={handleChange}
                accept="image/*"
                className="rounded-full w-2 h-2 bg-bland"
              />*/}
            </div>
            <div className="flex flex-col items-center gap-4 text-[1.5em] font-bold  justify-center">
              <h1>
                {formData.firstName} {formData.lastName}
              </h1>
              <p>{formData.address}</p>
            </div>
          </div>

          <div className="flex flex-col gap-[5em]">
            <div className="flex flex-col gap-[2em]">
              <h2 className="text-[1.5em] font-bold">Account Settings</h2>

              <div className="flex flex-col gap-[1.5em]">
                <h2 className="text-[1.1em] font-bold">Profile Information</h2>

                <div className="flex flex-col gap-[1.5em]">
                  <div className="flex justify-between  gap-[5em] w-full">
                    <div className="flex flex-col gap-3 basis-[50%]">
                      <label>First Name</label>
                      <input
                        className="border border-border w-full  px-4 py-3 rounded-[1.5em] outline-createaccount"
                        placeholder="Hannah"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex basis-[50%] flex-col gap-3">
                      <label>Last Name</label>
                      <input
                        className="border border-border w-full px-4 py-3 rounded-[1.5em] outline-createaccount"
                        placeholder="Daniels"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between gap-[5em] w-full">
                    <div className="flex basis-[50%] flex-col gap-3">
                      <label>Email Address</label>
                      <input
                        className="border border-border px-4 py-3 rounded-[1.5em] outline-createaccount"
                        placeholder="hannahdaniels@gmail.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex flex-col basis-[50%] gap-3">
                      <label>Phone</label>
                      <input
                        className="border border-border px-4 py-3 rounded-[1.5em] outline-createaccount"
                        placeholder="+2348084400000"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[1.5em]">
                <h2 className="text-[1.1em] font-bold">Change Password</h2>

                <div action="" className="flex w-full gap-[5em] ">
                  <div className="flex flex-col gap-3 basis-[50%]">
                    <label htmlFor="password">New Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="***********"
                      className="border border-border w-full px-4 py-3 rounded-[1.5em] outline-createaccount"
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
                      className="border border-border w-full px-4 py-3 rounded-[1.5em] outline-createaccount"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[1.5em]">
                <h2 className="text-[1.1em] font-bold">Address</h2>

                <div className="flex flex-col gap-[1.5em]">
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
                      className="border border-border px-4 py-3 rounded-[1.5em] outline-createaccount w-[50%]"
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
      <div className="z-[10000] pt-[20em]">
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  );
};

export default EditProfile;
