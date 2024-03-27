import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignupImage from "../../assets/signup.png";
import Button from "../Button";
import {
  faCheck,
  faEye,
  faEyeSlash,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const USER_REGEX = /^[a-zA-z][a-zA-Z0-9-_]{3,23}$/;
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
    console.log(user, pwd);
    setSuccess(true);
  };

  return (
    <>
      <div className=" grid h-screen w-full place-content-center relative top-[4rem]">
        {success ? (
          <section>
            <h1 className="text-white text-4xl">Success!</h1>
            <span className="text-white text-4xl mt-10">
              <Link to="/login">Sign In</Link>
            </span>
          </section>
        ) : (
          <div className="flex items-center justify-center h-[45rem]">
            <div className="flex my-auto">
              <div className="flex  ">
                <img
                  src={SignupImage}
                  alt="SignupImage"
                  className="rounded-tr-[0.625em] rounded-br-[0.625em]"
                />
              </div>

              <div className=" flex flex-col gap-16 px-10 pt-10 pb-1 border border-border w-[50%] rounded-tl-[0.625em] rounded-bl-[0.625em]">
                <div className="flex flex-col  gap-[1em]">
                  <h3 className=" font-tertiary font-normal text-[2.25em] justify-center">
                    Signup
                  </h3>
                  <p className="text-createaccount font-secondary font-bold">
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
                    <div className="flex gap-7">
                      {/* Username and Validation */}
                      <div className="flex flex-col">
                        <div className="flex flex-col gap-2">
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
                            placeholder="Grace Joel"
                            className="w-[16em] rounded-[3em] px-4 py-3 border border-border focus:outline-none focus:border-createaccount "
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
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="email"
                          className="font-secondary font-medium text-color"
                        >
                          Email
                        </label>
                        <input
                          type="text/number"
                          placeholder="Grace.joel@xmail.com"
                          className="w-[16em] rounded-[3em] px-4 py-3 border border-border focus:outline-none focus:border-createaccount "
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

                    <div className="flex gap-7 w-[100%]">
                      {/* Password and Validation */}

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
                            className="text-xl absolute top-12 left-[85%]"
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
                      <input type="checkbox" className="text-md w-4 h-4" />
                      <span className="font-secondary text-[0.95em] text-subtext font-medium">
                        I have read and agreed to the Terms of Service and
                        Privacy Policy
                      </span>
                    </div>

                    <div className="flex justify-center items-center w-full ">
                      <div className="flex font-oxygen justify-center hover:scale-110 w-1/2 py-1 bg-tertiary font-normal rounded-xl text-xl">
                        <Button>Shop Now</Button>
                      </div>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
        )}
        ;
      </div>
    </>
  );
};

export default Signup;
