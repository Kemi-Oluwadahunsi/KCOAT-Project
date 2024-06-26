import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignupImage from "../../assets/signup.png";
import Button from "../StaticComponents/Button";
import {
  faCheck,
  faEye,
  faEyeSlash,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const USER_REGEX = /^[a-zA-Z][a-zA-Z\s-]{1,23}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Signup = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [isMatchPwdVisible, setIsMatchPwdVisible] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    try {
      const response = await axios.post("https://kcoat.onrender.com/register", {
        cusName: user,
        email: email,
        password: pwd,
      });
      console.log(response.data);
      setSuccess(true);
      toast.success("Signup successful!");
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        const status = error.response.status;
        if (status === 409) {
          toast.error("Customer with this email already exists");
        } else {
          toast.error("Error in creating customer");
        }
      } else {
        toast.error(
          "An error occurred while signing up. Please try again later."
        );
      }
    }
  };

  return (
    <div className="border-l-8 border-simple1 md:w-[100%]">
      <div className="justify-center flex h-auto xs:h-auto md:h-auto w-[100%] md:w-[90%] md:pb-[2rem] xs:pt-[6rem] md:pt-[7rem] pt-[5rem]   mx-auto">
        {success ? (
          <section className=" pb-8 pt-4 ">
            <div
              className="w-[100%] py-[4em] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]
          rounded-[1em] flex flex-col xs:gap-4 gap-[3em] px-[2rem]"
            >
              <h1 className="text-white xs:text-2xl text-4xl">
                Success! Please Sign in
              </h1>
              <Link to="/login">
                <div className="flex items-center justify-center w-full">
                  <div className="flex font-oxygen justify-center hover:scale-110 xs:hover:scale-0 w-1/2 py-1 bg-tertiary font-normal rounded-xl xs:text-lg text-xl">
                    <Button>Sign In</Button>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        ) : (
          <div className="flex items-center xs:pt-[2rem] justify-center md:h-auto xs:h-auto h-[45rem] xs:pb-8">
            <div className="flex xs:mx-auto my-auto">
              <div className="flex xs:hidden w-[50%]">
                <img
                  src={SignupImage}
                  alt="SignupImage"
                  className="rounded-tr-[0.625em] rounded-br-[0.625em] object-cover"
                />
              </div>
              <div className=" flex flex-col xs:gap-8 gap-16 xs:px-4 px-10 xs:pt-4 pt-10 pb-1 border border-border xs:w-[90%] w-[50%] rounded-tl-[0.625em] rounded-bl-[0.625em] xs:rounded-tr-[0.625em] xs:rounded-br-[0.625em] xs:ml-4 xs:pb-8">
                <div className="flex flex-col gap-[1em]">
                  <h3 className=" font-tertiary font-normal xs:text-[1.5em] text-[2.25em] xs:text-center justify-center">
                    Signup
                  </h3>
                  <p className="text-createaccount xs:text-sm font-secondary font-bold">
                    Already Have an account?{" "}
                    <Link to="/login">
                      <span className="font-bold text-bland underline underline-offset-4">
                        Login.
                      </span>
                    </Link>
                  </p>
                </div>

                <section>
                  <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                  >
                    {" "}
                    {errMsg}{" "}
                  </p>
                  <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                    <div className="flex xs:flex-col gap-7 w-[100%] ">
                      {/* Username and Validation */}
                      <div className="flex flex-col w-[50%] xs:w-[100%]">
                        <div className="flex flex-col gap-2 w-full">
                          <label
                            htmlFor="username"
                            className="font-secondary font-medium text-color"
                          >
                            Full name
                            <span className={validName ? "valid" : "hide"}>
                              <FontAwesomeIcon
                                className="ml-2"
                                icon={faCheck}
                              />
                            </span>
                            <span
                              className={
                                validName || !user ? "hide" : "invalid"
                              }
                            >
                              <FontAwesomeIcon icon={faTimes} />
                            </span>
                          </label>
                          <input
                            type="text/number"
                            placeholder="First-name Last-name"
                            className=" rounded-[3em] xs:text-base text-[1.2em] px-4 xs:py-2 py-3 border border-border focus:outline-none focus:border-createaccount "
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                          ></input>
                        </div>
                        <p
                          id="uidnote"
                          className={
                            userFocus && user && !validName
                              ? "instructions"
                              : "offscreen"
                          }
                        >
                          <FontAwesomeIcon
                            className="ml-2 text-xs"
                            icon={faInfoCircle}
                          />
                          <span className="ml-1 text-xs">
                            4 to 24 characters.
                            <br />
                            Letters, numbers, underscores, hyphens allowed.
                          </span>
                        </p>
                      </div>

                      {/* Email and Validation */}
                      <div className="flex flex-col gap-2 xs:w-[100%] w-[50%]">
                        <label
                          htmlFor="email"
                          className="font-secondary font-medium text-color"
                        >
                          Email
                          <span className={validEmail ? "valid" : "hide"}>
                            <FontAwesomeIcon className="ml-2" icon={faCheck} />
                          </span>
                          <span
                            className={
                              validEmail || !email ? "hide" : "invalid"
                            }
                          >
                            <FontAwesomeIcon icon={faTimes} />
                          </span>
                        </label>
                        <input
                          type="text/number"
                          placeholder="Grace.joel@xmail.com"
                          className="w-full rounded-[3em] xs:text-base text-[1.2em] px-4 xs:py-2 py-3 border border-border focus:outline-none focus:border-createaccount "
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          required
                          aria-invalid={validEmail ? "false" : "true"}
                          aria-describedby="emailnote"
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
                        />

                        <p
                          id="emailnote"
                          className={
                            emailFocus && email && !validEmail
                              ? "instructions"
                              : "offscreen"
                          }
                        >
                          <FontAwesomeIcon
                            className="ml-2 text-xs"
                            icon={faInfoCircle}
                          />
                          <span className="ml-1 text-xs">
                            Please enter a valid email address.
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Password and Validation */}
                    <div className="flex xs:flex-col gap-7 w-[100%]">
                      <div className="flex flex-col flex-1">
                        <div className="flex flex-col gap-2 w-full relative ">
                          <label
                            htmlFor="password"
                            className="font-secondary font-medium text-color"
                          >
                            Password
                            <span className={validPwd ? "valid" : "hide"}>
                              <FontAwesomeIcon
                                className="ml-2"
                                icon={faCheck}
                              />
                            </span>
                            <span
                              className={validPwd || !pwd ? "hide" : "invalid"}
                            >
                              <FontAwesomeIcon icon={faTimes} />
                            </span>
                          </label>

                          <div className="relative">
                            <input
                              type={isPwdVisible ? "text" : "password"}
                              placeholder="******"
                              className="rounded-[3em] xs:text-base text-[1.2em] xs:py-2 px-4 py-3 border border-border focus:outline-none focus:border-createaccount w-full"
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
                              className="text-xl xs:text-sm absolute top-3 right-4"
                              onClick={() =>
                                setIsPwdVisible(
                                  (prevIsVisible) => !prevIsVisible
                                )
                              }
                            >
                              {isPwdVisible ? (
                                <FontAwesomeIcon icon={faEye} color="#A6A6A6" />
                              ) : (
                                <FontAwesomeIcon
                                  icon={faEyeSlash}
                                  color="#A6A6A6"
                                />
                              )}
                            </div>
                          </div>
                          <p
                            id="pwdnote"
                            className={` adjustWidth ${
                              pwdFocus && !validPwd
                                ? "instructions"
                                : "offscreen"
                            }`}
                          >
                            <FontAwesomeIcon
                              className="text-color text-xs ml-2"
                              icon={faInfoCircle}
                            />
                            <span className="ml-1 text-xs">
                              8 to 24 characters. <br />
                              Must include uppercase and lowercase letters, a
                              number and a special character. <br />
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
                            <span
                              className={
                                validMatch && matchPwd ? "valid" : "hide"
                              }
                            >
                              <FontAwesomeIcon
                                className="ml-2"
                                icon={faCheck}
                              />
                            </span>
                            <span
                              className={
                                validMatch || !matchPwd ? "hide" : "invalid"
                              }
                            >
                              <FontAwesomeIcon icon={faTimes} />
                            </span>
                          </label>
                          <input
                            type={isMatchPwdVisible ? "text" : "password"}
                            placeholder="******"
                            className="w-full rounded-[3em] xs:text-base text-[1.2em] xs:py-2 px-4 py-3 border border-border focus:outline-none focus:border-createaccount "
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
                            className="text-xl xs:text-sm absolute top-12 left-[85%]"
                            onClick={() =>
                              setIsMatchPwdVisible(
                                (prevIsVisible) => !prevIsVisible
                              )
                            }
                          >
                            {isMatchPwdVisible ? (
                              <FontAwesomeIcon icon={faEye} color="#A6A6A6" />
                            ) : (
                              <FontAwesomeIcon
                                icon={faEyeSlash}
                                color="#A6A6A6"
                              />
                            )}
                          </div>
                        </div>
                        <div>
                          <p
                            id="confirmnote"
                            className={
                              matchFocus && !validMatch
                                ? "instructions"
                                : "offscreen"
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

                    <div className="flex gap-2 items-center justify-center w-full">
                      <input
                        type="checkbox"
                        className="text-md w-4 h-4"
                        required
                      />
                      <span className="font-secondary xs:text-[0.8em] text-[0.95em] text-subtext font-medium">
                        I have read and agreed to the Terms of Service and
                        <Link to="/privacy-policy">
                          <span className="font-bold text-bland">
                            {" "}
                            Privacy Policy
                          </span>
                        </Link>
                      </span>
                    </div>

                    <div className="flex justify-center items-center w-full ">
                      <div className="flex font-oxygen justify-center hover:scale-105 xs:w-3/4 w-1/2 xs; py-1 bg-tertiary font-normal rounded-xl xs:text-base text-xl">
                        <Button className={`border-0`}>Shop Now</Button>
                      </div>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
        )}
        <div className="z-[10000]">
          <ToastContainer position="top-right" autoClose={5000} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
