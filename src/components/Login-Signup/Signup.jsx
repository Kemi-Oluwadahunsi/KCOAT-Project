import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignupImage from "../../assets/signup.png";
import Button from "../Button";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
  return (
    <div className="flex items-center justify-center h-[45rem]">
      <div className="flex w-4/5 my-auto">
        <div className="flex  ">
          <img
            src={SignupImage}
            alt="SignupImage"
            className="rounded-tr-[0.625em] rounded-br-[0.625em]"
          />
        </div>

        <div className=" flex flex-col gap-16 px-10 pt-10 border border-border w-[50%] rounded-tl-[0.625em] rounded-bl-[0.625em]">
          <div className="flex flex-col  gap-[1em]">
            <h3 className=" font-tertiary font-normal text-[2.25em] justify-center">
              Signup
            </h3>
            <p className="text-createaccount font-secondary font-bold">
              Already Have an account?{" "}
              <span className="font-bold text-bland">Login.</span>
            </p>
          </div>

          <form className="flex flex-col gap-8">
            <div className="flex gap-7">
              <div className="flex flex-col gap-2">
                <label className="font-secondary font-medium text-color">
                  Full name
                </label>
                <input
                  type="text/number"
                  placeholder="Grace Joel"
                  className="w-[16em] rounded-[3em] px-4 py-3 border border-border focus:outline-none focus:border-createaccount "
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-secondary font-medium text-color">
                  Email
                </label>
                <input
                  type="text/number"
                  placeholder="Grace.joel@xmail.com"
                  className="w-[16em] rounded-[3em] px-4 py-3 border border-border focus:outline-none focus:border-createaccount "
                />
              </div>
            </div>

            <div className="flex gap-7">
              <div className="flex flex-col gap-2 relative">
                <label className="font-secondary font-medium text-color">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="******"
                  className="w-full rounded-[3em] text-[1.2em] px-4 py-3 border border-border focus:outline-none focus:border-createaccount "
                />
                <FontAwesomeIcon
                  icon={faEye}
                  color="#A6A6A6"
                  className="text-xl absolute top-12 left-[85%]"
                />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="font-secondary font-medium text-color">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="******"
                  className="w-full rounded-[3em] text-[1.2em] px-4 py-3 border border-border focus:outline-none focus:border-createaccount "
                />
                <FontAwesomeIcon
                  icon={faEye}
                  color="#A6A6A6"
                  className="text-xl absolute top-12 left-[85%]"
                />
              </div>
            </div>

            <div className="flex gap-2 items-center justify-center">
              <input type="checkbox" className="text-md w-4 h-4"/>
              <span className="font-secondary text-subtext font-medium">
                I have read and agreed to the Terms of Service and Privacy
                Policy
              </span>
            </div>

            <div className="flex justify-center items-center w-full ">
              <div className="flex font-oxygen justify-center hover:scale-110 w-1/2 py-1 bg-tertiary font-normal rounded-xl text-xl">
                <Button>Shop Now</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;