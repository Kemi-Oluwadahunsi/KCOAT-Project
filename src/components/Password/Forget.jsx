// import { useState } from "react";
import Button from "../StaticComponents/Button";
import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handlePasswordSend = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://kcoat.onrender.com/forgot-password", {
        email: email,
      });
      setEmail("");
      toast.success("Password reset email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Enter a valid email address");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="xs:flex items-center pt-[7rem] xs:pb-0 xs:px-4 pb-[3em] flex justify-center border-l-8 xs:border-l-0 border-simple1 h-screen">
      <div className="h-full md:h-auto xs:h-fit xs:pb-8 bg-white border border-solid border-border rounded-md shadow-lg px-[2rem] xs:pt-4 pt-[4rem] flex flex-col md:gap-[1em] xs:gap-[1em] gap-[2rem]">
        <div className="flex flex-col xs:gap-[2em] gap-[5em]">
          <h2 className=" text-tertiary3 xs:text-2xl text-3xl font-lso flex justify-center">
            Forget Password
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col xs:gap-[2em] gap-[5rem]"
          >
            <div className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className=" font-oxygen text-tertiary3 font-medium"
              >
                Enter Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="gracey@xmail.com"
                onChange={(e) => setEmail(e.target.value)}
                className="outline-createaccount gap-4 p-4 border rounded-full border-solid border-opacity-50 border-createaccount  xs:py-2 py-3 text-createaccount"
              />
            </div>

            <div
              className="flex items-center justify-center"
              onClick={handlePasswordSend}
            >
              <div className=" flex justify-center mt-[2em] hover:scale-105 xs:w-[10rem] w-[19rem] bg-tertiary rounded-xl">
                <Button
                  type="submit"
                  className={`border-3 bg-simple1 text-tertiary2 font-oxygen flex items-center justify-center xs:py-0 xs:text-lg py-1 text-xl`}
                >
                  Send Link
                </Button>
              </div>
            </div>
          </form>
        </div>
        <p className="text-sm text-tertiary4 flex justify-center gap-2 ">
          Don&apos;t receive the link?
          <a
            href="#"
            className="font-oxygen text-simple1  hover:scale-105 underline underline-offset-4 decoration-tertiary"
            onClick={handlePasswordSend}
          >
            Resend
          </a>
        </p>

        <p className="font-bold xs:text-[.9em]">
          Note: Can&apos;t find message in inbox? Kindly check your{" "}
          <span className="text-tertiary">spam </span>or{" "}
          <span className="text-tertiary"> junk </span>
          folder.
        </p>
      </div>
      <div className="z-[10000] pt-[20em] xs:pt-0">
        <ToastContainer position="top-right" autoClose={5000} />
      </div>
    </div>
  );
};

export default ForgotPassword;
