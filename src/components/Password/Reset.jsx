import { useEffect, useState } from "react";
import sideImage from "../../assets/Resetpw.jpg";
import { Link } from "react-router-dom";
import Button from "../StaticComponents/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faEye,
  faEyeSlash,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const ResetPassword = () => {
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [isMatchPwdVisible, setIsMatchPwdVisible] = useState(false);

 const token = new URLSearchParams(window.location.search).get('token'); //Extracts the last segment of the path

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pwd !== matchPwd) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.put(
        `https://kcoat.onrender.com/reset-password/${token}`,
        {
          password: pwd,
          confirmPassword: matchPwd,
        }
      );
      console.log(token);
      console.log(response.data);
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error resetting password:", error);
      toast.error("Error resetting password");
    }
  };

  // /reset-password/:token
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
          {/* <p className=" text-createaccount w-[60%]">
            A verification email will be sent to the mail box. Please check it.
          </p> */}
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex flex-col gap-7 w-[100%]">
            <div className="flex flex-col flex-1">
              <div className="flex flex-col gap-2 w-full relative ">
                <label
                  htmlFor="password"
                  className="font-secondary font-medium text-color"
                >
                  Enter New Password
                  <span className={validPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon className="ml-2" icon={faCheck} />
                  </span>
                  <span className={validPwd || !pwd ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>

                <div className="relative">
                  <input
                    type={isPwdVisible ? "text" : "password"}
                    placeholder="******"
                    className=" rounded-[3em] text-[1.2em] px-4 py-3 border border-border focus:outline-none focus:border-createaccount w-full"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                  ></input>

                  <div
                    className="text-xl absolute top-3 right-4"
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
                <p
                  id="pwdnote"
                  className={` adjustWidth ${
                    pwdFocus && !validPwd ? "instructions" : "offscreen"
                  }`}
                >
                  <FontAwesomeIcon
                    className="text-color text-xs ml-2"
                    icon={faInfoCircle}
                  />
                  <span className="ml-1 text-xs">
                    8 to 24 characters. <br />
                    Must include uppercase and lowercase letters, a number and a
                    special character. <br />
                    Allowed special characters:{" "}
                    <span aria-label="exclamation mark">!</span>
                    <span aria-label="at symbol">@</span>{" "}
                    <span aria-label="hashtag">#</span>{" "}
                    <span aria-label="dollar sign">$</span>{" "}
                    <span aria-label="percent">%</span>
                  </span>
                </p>
              </div>
            </div>

            {/* Confirm Password and Validation */}
            <div className="flex flex-col relative flex-1">
              <div className="flex flex-col gap-2 relative">
                <label
                  htmlFor="confirm_pwd"
                  className="font-secondary font-medium text-color"
                >
                  Confirm Password
                  <span className={validMatch && matchPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon className="ml-2" icon={faCheck} />
                  </span>
                  <span
                    className={validMatch || !matchPwd ? "hide" : "invalid"}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <input
                  type={isMatchPwdVisible ? "text" : "password"}
                  placeholder="******"
                  className="w-full rounded-[3em] text-[1.2em] px-4 py-3 border border-border focus:outline-none focus:border-createaccount "
                  id="confirm_pwd"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                ></input>

                <div
                  className="text-xl absolute top-11 right-4"
                  onClick={() =>
                    setIsMatchPwdVisible((prevIsVisible) => !prevIsVisible)
                  }
                >
                  {isMatchPwdVisible ? (
                    <FontAwesomeIcon icon={faEye} color="#A6A6A6" />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} color="#A6A6A6" />
                  )}
                </div>
              </div>
              <div>
                <p
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch ? "instructions" : "offscreen"
                  }
                >
                  <FontAwesomeIcon
                    className="text-gray-300 text-xs"
                    icon={faInfoCircle}
                  />
                  <span className="ml-1">
                    {" "}
                    Must match the first password input field.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className=" flex justify-center mt-[2em] hover:scale-105 w-[19rem] bg-tertiary rounded-xl">
              <Button
                type="submit"
                className={`border-3 bg-simple1 text-tertiary2 font-oxygen flex items-center justify-center py-1 text-xl`}
              >
                Send
              </Button>
            </div>
          </div>
        </form>

        <p className="mt-4 text-sm font-oxygen text-tertiary4 ">
          <Link to="/login" href="">
            Back to login
          </Link>
        </p>
      </div>
      <div className="z-[10000] pt-[20em]">
        <ToastContainer position="top-right" autoClose={5000} />
      </div>
    </div>
  );
};

export default ResetPassword;
