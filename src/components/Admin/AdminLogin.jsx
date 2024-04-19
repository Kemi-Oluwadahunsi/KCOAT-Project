import {

  faEye,
  faEyeSlash,
  faLongArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminImage from "../../assets/adminlogin.png";
import { useState } from "react";
import Button from "../StaticComponents/Button";

const AdminLogin = () => {
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  //  const scrollToTop = () => {
  //    window.scrollTo({
  //      top: 0,
  //      behavior: "smooth", // Optional: smooth scroll animation
  //    });
  //  };

  return (
    <div className="pt-[7rem] flex items-center justify-center pb-[3em]">
      <div className="flex w-[70%] border border-border rounded-2xl">
        <div className="w-[50%]">
          <img src={AdminImage} alt="" />
        </div>

        <div className=" flex  w-[50%] py-[2em]">
          <form action="" className="w-full px-[3em] flex flex-col gap-[3em]">
            <div className="w-full flex flex-col gap-8">
              <h1 className="text-tertiary3 text-3xl font-lso mt-4 mb-4 flex items-center justify-center w-full">
                Admin Login
              </h1>

              <div className="flex flex-col gap-2 w-full relative">
                <label
                  htmlFor="email"
                  className="font-secondary font-medium text-color"
                >
                  Enter Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="gracey@gmail.com"
                  className=" rounded-[3em] text-[1.2em] px-4 py-3 border border-border focus:outline-none focus:border-createaccount w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="font-secondary font-medium text-color"
                >
                  Enter Your Password
                </label>
                <div>
                  <input
                    type={isPwdVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="********"
                    className=" rounded-[3em] text-[1.2em] px-4 py-3 border border-border focus:outline-none focus:border-createaccount w-full"
                  />

                  <div
                    className="text-xl absolute top-11 right-4"
                    onClick={() =>
                      setIsPwdVisible((prevIsVisible) => !prevIsVisible)
                    }
                  >
                    {isPwdVisible ? (
                      <FontAwesomeIcon icon={faEye} color="#A6A6A6" />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} color="#A6A6A6" />
                    )}
                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 items-center justify-center">
                <h4>Forgot your password?</h4>
                <div className="flex gap-4">
                  <input type="checkbox" />
                  <p>Remember me</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex justify-center items-center w-full ">
                  <div className="flex font-oxygen justify-center hover:scale-105 w-1/2 py-1 bg-tertiary font-normal rounded-xl text-xl">
                    <Button className={`border-0`}>Login</Button>
                  </div>
                </div>

                <div className="flex gap-4 items-center justify-center">
                  <FontAwesomeIcon
                    icon={faLongArrowLeft}
                    className="text-tertiary"
                  />
                  <p className="font-oxygen">
                    Go back to <span className="font-tertiary">KCOAT</span>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
