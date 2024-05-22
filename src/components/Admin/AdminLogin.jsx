import {
  faEye,
  faEyeSlash,
  faLongArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminImage from "../../assets/adminlogin.png";
import { useContext, useState } from "react";
import Button from "../StaticComponents/Button";
import { AdminContext } from "../../../hooks/AdminContextPage";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [isPwdVisible, setIsPwdVisible] = useState(false);

  const { ToastContainer, handleAdminLogin } = useContext(AdminContext);

  return (
    <div className="pt-[7rem] flex items-center justify-center pb-[3em] border-l-8 border-simple1">
      <div className="flex xs:w-[90%] w-[70%] border border-border rounded-2xl">
        <div className="w-[50%] xs:hidden">
          <img src={AdminImage} alt="" className=" h-full object-cover" />
        </div>

        <div className=" flex  w-[50%] xs:w-[100%] py-[2em]">
          <form
            action=""
            className="w-full px-[3em] flex flex-col gap-[3em]"
            onSubmit={handleAdminLogin}
          >
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
              <div className="flex flex-col gap-4">
                <div
                  className="flex justify-center items-center w-full"
                  onClick={handleAdminLogin}
                >
                  <div className="flex font-oxygen justify-center hover:scale-105 w-1/2 py-1 bg-tertiary font-normal rounded-xl text-xl">
                    <Button className={`border-0`}>Login</Button>
                  </div>
                </div>
                <Link to="/">
                  <div className="flex gap-4 items-center justify-center">
                    <FontAwesomeIcon
                      icon={faLongArrowLeft}
                      className="text-tertiary"
                    />
                    <p className="font-oxygen">
                      Go back to <span className="font-tertiary">KCOAT</span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="z-[10000] pt-[20em]">
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  );
};

export default AdminLogin;
