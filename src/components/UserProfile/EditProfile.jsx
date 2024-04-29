import axios from "axios";
import Button from "../StaticComponents/Button";
// import userdp from "../../assets/Ellipse-4.svg";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../hooks/ProductContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Upload from "./Upload";

// import Upload from "./Upload";

const EditProfile = () => {
  const { userProfile } = useContext(ProductContext);
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    state: "",
    image: "",
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
        image: imageUrl || "",
      });
    }
  }, [userProfile]);

  // const handleImageChange = (newImageUrl) => {
  //   setFormData({ ...formData, image: newImageUrl });
  //   setImageUrl(newImageUrl);
  //   console.log("Image URL:", newImageUrl);
  // };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `https://kcoat.onrender.com/user-profile/${userProfile.customerId}`,
        formData
      );
      if (response.status === 200) {
        toast.success("Profile edited successfully!");
        setTimeout(() => {
          navigate("/user-profile");
        }, 4000);
        setFormSubmitted(true);
      } else {
        toast.error("Error updating user profile. Please try again.");
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  return (
    <div className="pt-[8rem] xs:px-[2rem] md:px-[10rem] px-[20rem] py-[5em] font-oxygen">
      <form action="" onSubmit={handleSubmit}>
        <div className="">
          <div className="border flex flex-col xs:gap-4 gap-8 items-center justify-center rounded-3xl py-[2em] xs:px-4 px-[5em] ">
            <div style={{ cursor: "pointer" }}>
              {formSubmitted ? (
                <img
                  src={formData.image}
                  className="w-[10rem] h-[10rem] md:h-[7rem] md:w-[12rem] xs:w-[8rem] xs:h-[8rem] object-cover border-2 border-tertiary rounded-full ml-4"
                  alt="User-image"
                />
              ) : (
                <div>
                  <Upload setImageUrl={setImageUrl} />
                </div>
              )}
            </div>
            {/* <div style={{ cursor: "pointer" }}>
              <img
                src={userdp}
                className="w-[10rem] h-[10rem] md:h-[7rem] md:w-[12rem] xs:w-[8rem] xs:h-[8rem] object-cover border-2 border-tertiary rounded-full ml-4"
                alt="User-image"
              />
            </div> */}
            <div className="flex flex-col items-center gap-4 xs:text-base text-[1.5em] font-bold  justify-center">
              <h1>
                {formData.firstName} {formData.lastName}
              </h1>
              <p className="xs:pl-8">{formData.address}</p>
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
