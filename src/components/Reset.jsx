import sideImage from "../assets/Resetpw.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex py-[7rem] px-[10rem] border-l-8 border-simple1">
      <div className=" basis-[50%] w-fit">
        <img src={sideImage} alt="Reset Password" className="w-full " />
      </div>
      <div className=" flex flex-col gap-8 basis-[50%] border border-solid border-border rounded-l-md px-[3rem] pt-[1rem]">
        <div className="">
          <h2 className=" text-tertiary3 text-3xl font-lso mt-4 mb-4">
            Reset Your Password
          </h2>
          <p className=" text-createaccount w-[60%]">
            The verification email will be sent to the mail box. Please check
            it.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="newPassword"
              className=" font-oxygen text-tertiary3 font-medium"
            >
              Enter New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              className=" p-3 border rounded-full border-solid border-opacity-50 border-createaccount w-full "
            />
          </div>
          <div className=" flex flex-col gap-1">
            <label
              htmlFor="confirmPassword"
              className=" font-oxygen text-tertiary3 font-medium"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="p-3 border rounded-full border-solid border-opacity-50 border-createaccount w-full"
            />
          </div>
          <div className="flex items-center justify-center">
            <div className=" flex justify-center mt-[2em] hover:scale-105 w-[19rem] bg-tertiary rounded-xl">
              <Button
                type="submit"
                className={`border-3 bg-simple1 text-tertiary2 font-oxygen  justify-center py-1 text-xl`}
              >
                Send
              </Button>
            </div>
          </div>
        </form>

        <div>
        <Link to="#">
          <button className="mt-4 text-sm font-oxygen text-tertiary4 cursor-pointer hover:scale-110">
          Back to login
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
