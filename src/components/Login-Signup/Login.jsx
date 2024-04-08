import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginImage from "../../assets/login.png";
import Button from "../Button";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = ({ setIsLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const emailInput = document.getElementById("email").value;
      const passwordInput = document.getElementById("password").value;

      const response = await axios.post("https://kcoat-1.onrender.com/login", {
        email: emailInput,
        userpassword: passwordInput,
      });

      console.log(response.data);
       setIsLoggedIn(true);
      navigate("/");
       toast.success("Login successful!");
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        const status = error.response.status;
        if (status === 404) {
          toast.error("Username not found. Do you want to create an account?");
        } else if (status === 401) {
          toast.error("Wrong password");
        } else {
          console.error("Server Error:", error);
          toast.error("An unexpected error occurred. Please try again later.");
        }
      } else {
        console.error("Network Error:", error);
        toast.error(
          "A network error occurred. Please check your internet connection."
        );
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="h-screen border-l-8 border-simple1">
      <div className="flex items-center justify-center h-[43rem] relative top-[5rem]">
        <div className="flex w-4/5 my-auto">
          <div className="flex  ">
            <img
              src={LoginImage}
              alt="LoginImage"
              className="rounded-tr-[0.625em] rounded-br-[0.625em]"
            />
          </div>

          <div className=" flex flex-col gap-20 px-16 pt-10 border border-border w-[50%] rounded-tl-[0.625em] rounded-bl-[0.625em]">
            <div className="flex flex-col  gap-[1em]">
              <h3 className=" font-tertiary font-normal text-[2.25em] justify-center">
                Login
              </h3>
              <p className="text-createaccount font-secondary font-bold">
                Don&apos;t have an account,{" "}
                <Link to="/signup">
                  <span className="font-bold text-bland underline underline-offset-4">
                    SignUp.
                  </span>
                </Link>
              </p>
            </div>

            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-secondary font-normal text-color">
                  Enter Your Email
                </label>
                <input
                  type="text/number"
                  id="email"
                  placeholder="Grace.joel@xmail.com"
                  required
                  className="w-full rounded-[3em] px-4 py-3 border border-border focus:outline-none focus:border-createaccount "
                />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="font-secondary font-normal text-color">
                  Enter Your Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="******"
                  required
                  className="w-full rounded-[3em] text-[1.2em] px-4 py-3 border border-border focus:outline-none focus:border-createaccount "
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  color="#A6A6A6"
                  className="text-xl absolute top-12 cursor-pointer left-[90%]"
                  onClick={togglePasswordVisibility}
                />
              </div>

              <div
                className="flex justify-center items-center w-full "
                onClick={handleLogin}
              >
                <div className="flex font-oxygen justify-center mt-[1rem] hover:scale-110 w-1/2 py-1 text-xl bg-tertiary font-normal rounded-xl">
                  <Button>Login</Button>
                </div>
              </div>

              <p className="font-secondary font-medium text-[1em] text-password text-center mt-5 cursor-pointer">
                Forgot password?
              </p>
            </form>
          </div>
        </div>
        <div className="z-[10000] pt-[20em]">
          <ToastContainer position="top-right" autoClose={5000} />
        </div>
      </div>
    </div>
  );
};

export default Login;
