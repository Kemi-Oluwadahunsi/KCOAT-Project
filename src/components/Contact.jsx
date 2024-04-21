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
    <div className="pt-[5em] flex flex-col gap-[3rem] border-l-8 border-simple1">
      <div
        className=" flex flex-col gap-3 items-center justify-center h-[20em] "
        style={{
          backgroundImage: `url(${img01})`,
        }}
      >
        <h1 className=" font-bold text-tertiary font-tertiary text-[2.5em]">
          Contact
        </h1>
        <div className="flex gap-[2em] font-oxygen font-bold text-color">
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
        <h3 className="text-5xl fontbold font-lso text-categoryborder">
          Get In Touch With Us
        </h3>
        <p className="font-oxygen text-simple1 w-[40%] mx-auto">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="flex justify-between items-start px-[10em]">
        <div className="basis-[30%] mt-[10em] py-[3em]">
          <ul className="flex flex-col gap-[2em] ">
            <li className="flex flex-col gap-[2em]">
              <div className="flex gap-[1em]">
                <img src={img03} alt="Address Icon" />
                <p className="font-lso text-simple1 text-lg">Address</p>
              </div>
              <p className="font-oxygen text-base">Lagos, Nigeria</p>
            </li>

            <li className="flex flex-col gap-[2em]">
              <div className="flex gap-[1em]">
                <img src={img04} alt="Phone Icon" />
                <p className="font-lso text-simple1 text-lg">Phone</p>
              </div>
              <p className="font-oxygen">Mobile: +(234)8133425123</p>
            </li>

            <li className="flex flex-col gap-[2em]">
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

        <div className=" bg-tertiary2 w-full basis-[60%] px-8 pt-[8em] pb-[3em]">
          <form
            className="flex flex-col gap-[3em] px-[5em]"
            ref={formRef}
            onSubmit={sendEmail}
            id="form"
          >
            <div className=" flex flex-col gap-[2em]">
              <div className="flex flex-col gap-[1em]">
                <label
                  htmlFor="name"
                  className="required text-categoryborder font-oxygen text-lg font-medium"
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
                  className="border rounded-lg border-border outline-createaccount px-4 py-6  text-color"
                />
              </div>

              <div className="flex flex-col gap-[1em]">
                <label
                  htmlFor="email"
                  className="required text-categoryborder font-oxygen text-lg font-medium"
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
                  className="border rounded-lg border-border outline-createaccount px-4 py-6  text-color"
                />
              </div>

              <div className="flex flex-col gap-[1em]">
                <label
                  htmlFor="subject"
                  className=" text-categoryborder font-oxygen text-lg font-medium "
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
                  className="border rounded-lg border-border outline-createaccount px-4 py-6  text-color"
                />
              </div>

              <div className="flex flex-col gap-[1em]">
                <label
                  htmlFor="message"
                  className="required text-categoryborder font-oxygen text-lg font-medium"
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
                  className="border rounded-lg border-border outline-createaccount px-4 py-6  text-color"
                ></textarea>
              </div>
            </div>

            <Button
              type="submit"
              className={`flex items-center justify-center w-[15em] bg-simple1 text-tertiary2 hover:scale-105 font-oxygen text-2xl py-1 px-5 rounded-xl mx-auto cursor-pointer`}
            >
              Submit
            </Button>
            {error && "Error"}
            {success && ""}
          </form>
        </div>
      </div>
      <div className="z-[10000] pt-[20em]">
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  );
};

export default Contact;
