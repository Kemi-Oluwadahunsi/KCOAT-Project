import { ProductContext } from "../../../hooks/ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginImage from "../../assets/login.png";
import Button from "../StaticComponents/Button";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { login} = useContext(ProductContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const emailInput = document.getElementById("email").value;
      const passwordInput = document.getElementById("password").value;

      const response = await axios.post("https://kcoat.onrender.com/login", {
        email: emailInput,
        userpassword: passwordInput,
      });
      // setIsLoggedIn(localStorage.setItem("isLoggedIn", true));
      login(emailInput);

      console.log(response.data);
    
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        const status = error.response.status;
        if (status === 404) {
          toast.error("User not found. Do you want to create an account?");
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
      <div className="flex items-center justify-center xs:h-auto md:h-auto h-[43rem] relative xs:top-[8rem] md:top-[7rem] top-[5rem] ">
        <div className="flex w-4/5 my-auto">
          <div className="flex xs:hidden w-[50%] ">
            <img
              src={LoginImage}
              alt="LoginImage"
              className="rounded-tr-[0.625em] rounded-br-[0.625em] object-cover"
            />
          </div>

          <div className=" flex flex-col xs:gap-5 md:gap-10 gap-20 xs:pb-8 md:pb-8 xs:px-4 md:px-8 px-16 pt-10 border border-border xs:w-[100%] w-[50%] rounded-tl-[0.625em] rounded-bl-[0.625em] xs:rounded-tr-[0.625em] xs:rounded-br-[0.625em]">
            <div className="flex flex-col xs:gap-[.5em] gap-[1em]">
              <h3 className=" font-tertiary font-normal xs:text-[2em] text-[2.25em] xs:text-center justify-center">
                Login
              </h3>
              <p className="text-createaccount xs:text-[.9em] font-secondary font-bold">
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
                  className="w-full rounded-[3em] px-4 xs:py-2 py-3 border border-border focus:outline-none focus:border-createaccount "
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
                  className="w-full rounded-[3em] text-[1.2em] xs:py-2 px-4 py-3 border border-border focus:outline-none focus:border-createaccount "
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  color="#A6A6A6"
                  className="text-xl xs:text-sm absolute top-12 cursor-pointer xs:left-[87%] left-[90%]"
                  onClick={togglePasswordVisibility}
                />
              </div>

              <div
                className="flex justify-center items-center w-full "
                onClick={handleLogin}
              >
                <div className="flex font-oxygen justify-center xs:mt-0 mt-[1rem] hover:scale-110 w-1/2 py-1 xs:text-base text-xl bg-tertiary font-normal rounded-xl">
                  <Button>Login</Button>
                </div>
              </div>

              <Link to="/Forget">
                <p className="font-secondary font-medium text-[1em] text-password text-center mt-5 cursor-pointer">
                  Forgot password?
                </p>
              </Link>
            </form>
          </div>
        </div>
        <div className="z-[10000] pt-[20em]">
          <ToastContainer position="top-right" autoClose={2000} />
        </div>
      </div>
    </div>
  );
};

export default Login;
