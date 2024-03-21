import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginImage from "../../../assets/login.png";
import Button from "../../Button";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-[45rem]">
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
              Do not have an account,
              <span className="font-bold text-bland">SignUp.</span>
            </p>
          </div>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-secondary font-normal text-color">
                Enter Your Email or Phone Number
              </label>
              <input
                type="text/number"
                placeholder="Grace.joel@xmail.com"
                className="w-full rounded-[3em] px-4 py-3 border border-border focus:outline-none focus:border-createaccount "
              />
            </div>

            <div className="flex flex-col gap-2 relative">
              <label className="font-secondary font-normal text-color">
                Enter Your Password
              </label>
              <input
                type="password"
                placeholder="******"
                className="w-full rounded-[3em] text-[1.2em] px-4 py-3 border border-border focus:outline-none focus:border-createaccount "
              />
              <FontAwesomeIcon icon={faEye} color="#A6A6A6" className="text-2xl absolute top-11 left-[90%]" />
            </div>

            <div className="flex justify-center items-center w-full ">
              <div className="flex font-oxygen justify-center mt-[1rem] hover:scale-110 w-1/2 bg-tertiary font-normal rounded-xl">
                <Button>Login</Button>
              </div>
            </div>

            <p className="font-secondary font-medium text-[1em] text-password text-center mt-5">
              Forgot password?
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
