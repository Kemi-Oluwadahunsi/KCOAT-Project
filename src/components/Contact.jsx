import img01 from "../assets/Hanger.png";
import img03 from "../assets/Map.png";
import img04 from "../assets/phone.png";
import img05 from "../assets/bi_clock-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "./StaticComponents/Button";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleFormSubmit = () => {
    toast.success("Message submitted successfully");
  };

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6xfcc2g",
        "template_l56kvhh",
        formRef.current,
        "aRO-sklNECVerBfsH"
      )
      .then(
        (result) => {
          setSuccess(true);
          setError(false);
          console.log(result);

          // Reset the form fields
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          handleFormSubmit();
        },
        (error) => {
          setError(true);
          setSuccess(false);
          console.log("Error sending email:", error);
        }
      );
  };
  return (
    <div className="pt-[5em] flex flex-col xs:gap-[1em] md:gap-[2rem] gap-[3rem] border-l-8 border-simple1">
      <div
        className=" flex flex-col gap-3 items-center justify-center h-[20em] "
        style={{
          backgroundImage: `url(${img01})`,
        }}
      >
        <h1 className=" font-bold text-tertiary font-tertiary text-[2.5em]">
          Contact
        </h1>
        <div className="flex items-center justify-center xs:gap-[1em] gap-[2em] text-[1.2em] font-oxygen font-bold text-bland">
          <Link to="/">
            <h3>Home</h3>
          </Link>
          <FontAwesomeIcon icon={faChevronRight} />
          <Link to="/all-products">
            <h3>Products</h3>
          </Link>
        </div>
      </div>

      <div className=" flex flex-col gap-4 text-center">
        <h3 className="text-5xl xs:text-3xl fontbold font-lso text-categoryborder">
          Get In Touch With Us
        </h3>
        <p className="font-oxygen xs:text-sm text-simple1 xs:w-[90%] w-[40%] mx-auto">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="flex xs:flex-col justify-between items-start xs:px-[2rem] md:px-[5rem] px-[10em]">
        <div className="basis-[30%] xs:basis-[100%] xs:mt-[0] md:mt-[3rem] mt-[10em] xs:py-[1em] py-[3em]">
          <ul className="flex flex-col xs:gap-[1em] gap-[2em] ">
            <li className="flex flex-col xs:gap-[1em] gap-[2em]">
              <div className="flex gap-[1em]">
                <img src={img03} alt="Address Icon" />
                <p className="font-lso text-simple1 text-lg">Address</p>
              </div>
              <p className="font-oxygen text-base">Lagos, Nigeria</p>
            </li>

            <li className="flex flex-col xs:gap-[1em] gap-[2em]">
              <div className="flex gap-[1em]">
                <img src={img04} alt="Phone Icon" />
                <p className="font-lso text-simple1 text-lg">Phone</p>
              </div>
              <p className="font-oxygen">Mobile: +(234)8133425123</p>
            </li>

            <li className="flex flex-col xs:gap-[1em] gap-[2em]">
              <div className="flex gap-[1em]">
                <img src={img05} alt="Time Icon" />
                <p className="font-lso text-simple1 text-lg">Working Time</p>
              </div>

              <div className="flex flex-col gap-2 font-oxygen">
                <p>Monday-Friday: 9:00am - 7:00pm</p>
                <p>Saturday-Sunday: 9:00am-8:00pm</p>
              </div>
            </li>
          </ul>
        </div>

        <div className=" bg-tertiary2 w-full xs:basis-[100%] basis-[60%] xs:px-0 px-8 xs:pt-[2em] md:pt-[3em] pt-[8em] xs:pb-[1em] pb-[3em]">
          <form
            className="flex flex-col xs:gap-[1em] gap-[3em] xs:px-[2em] md:px-[3em] px-[5em]"
            ref={formRef}
            onSubmit={sendEmail}
            id="form"
          >
            <div className=" flex flex-col xs:gap-[1em] gap-[2em]">
              <div className="flex flex-col xs:gap-[0.5em] gap-[1em]">
                <label
                  htmlFor="name"
                  className="required text-categoryborder font-oxygen xs:text-base text-lg font-medium"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Swiss Merry"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border rounded-lg border-border outline-createaccount xs:py-3 md:py-3 px-4 py-6  text-color"
                />
              </div>

              <div className="flex flex-col gap-[1em]">
                <label
                  htmlFor="email"
                  className="required text-categoryborder font-oxygen xs:text-base text-lg font-medium"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@dot.com"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border rounded-lg border-border outline-createaccount xs:py-3 md:py-3 px-4 py-6  text-color"
                />
              </div>

              <div className="flex flex-col gap-[1em]">
                <label
                  htmlFor="subject"
                  className=" text-categoryborder font-oxygen xs:text-base text-lg font-medium "
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border rounded-lg border-border outline-createaccount xs:py-3 md:py-3 px-4 py-6  text-color"
                />
              </div>

              <div className="flex flex-col gap-[1em]">
                <label
                  htmlFor="message"
                  className="required text-categoryborder font-oxygen xs:text-base text-lg font-medium"
                >
                  Message
                </label>
                <textarea
                  type="message"
                  id="message"
                  name="message"
                  rows="10"
                  placeholder="Feel free to us for product inquiry or complaint. Thank you!"
                  autoComplete="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border rounded-lg border-border outline- xs:py-0 md:py-3 px-4 py-6  text-color"
                ></textarea>
              </div>
            </div>

            <Button
              type="submit"
              className={`flex items-center justify-center xs:w-[8em] md:w-[10em] w-[15em] bg-simple1 text-tertiary2 hover:scale-105 font-oxygen xs:text-lg text-2xl xs:py-0 py-1 px-5 rounded-xl mx-auto cursor-pointer`}
            >
              Submit
            </Button>
            {error && "Error"}
            {success && ""}
          </form>
        </div>
      </div>
      <div className="z-[10000] pt-[20em] xs:pt-0 md:pt-0">
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  );
};

export default Contact;
