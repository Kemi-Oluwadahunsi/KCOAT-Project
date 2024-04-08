import img01 from "../assets/Hanger.png";
import img02 from "../assets/chevron.png";
import img03 from "../assets/Map.png";
import img04 from "../assets/phone.png";
import img05 from "../assets/clock-.jpg";

const Contact = () => {
  return (
    <div className="overflow-hidden border-l-8 border-simple1">
      <div className="relative pt-40 flex items-center justify-center ">
        <div
          className="absolute inset-0 filter blur-[2px] mx-2.5"
          style={{
            backgroundImage: `url(${img01})`,
            height: "316px",
            width: "100%",
          }}
        ></div>
        <h1 className="absolute text-simple1 text-4xl font-oxygen font-normal mt-8">
          Contact
        </h1>
        <h2 className="absolute flex items-center text-categoryborder text-base mt-28">
          <span>Home</span>
          <img
            src={img02}
            alt="Chevron Right"
            className="inline-block mx-2 w-4 h-4"
          />
          <span>Contact</span>
        </h2>
      </div>
      <div className="text-center">
        <h3 className="text-5xl mt-48 fontbold font-lso text-categoryborder">
          Get In Touch With Us
        </h3>
        <p className="text-base font-oxygen mt-2 text-simple1 mb-[2.9rem]">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>
      </div>

      <div className="lg:flex lg:justify-center lg:items-start">
        <div className="frame-155 w-full lg:w-276 h-549 mt-14">
          <div className="ml-36 p-28">
            <ul>
              <li className="flex items-center">
                <div>
                  <p className="font-lso text-simple1 mb-9 text-lg">
                    <img
                      src={img03}
                      alt="Address Icon"
                      className="inline-block w-6 h-4 mr-6"
                    />
                    Address
                  </p>
                  <p className="font-oxygen text-base mb-9">Lagos, Nigeria</p>
                </div>
              </li>
              <li className="flex items-center">
                <div>
                  <p className="font-lso text-simple1 mb-9 text-lg">
                    <img
                      src={img04}
                      alt="Phone Icon"
                      className="inline-block w-6 h-4 mr-6"
                    />
                    Phone
                  </p>
                  <p className="font-oxygen text-base mb-9">
                    Mobile: +(234)8133425123
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <div>
                  <p className="font-lso text-simple1 mb-9 text-lg">
                    <img
                      src={img05}
                      alt="Time Icon"
                      className="inline-block w-6 h-4 mr-6"
                    />
                    Working Time
                  </p>
                  <p className="font-oxygen text-base">
                    Monday-Friday: 9:00am - 7:00pm
                    <br />
                    Saturday-Sunday: 9:00am-8:00pm
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="frame-59 bg-tertiary2 w-full lg:w-[39.6rem] mt-4 lg:mt-0 ml-0 lg:ml-12.5rem mr-52 px-8">
          <form className="p-4">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-categoryborder font-oxygen font-[1rem] mb-2 pt-[7.4rem]"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded-lg border-solid border-opacity-50 border-createaccount px-4 py-2 w-[33rem] h-[4rem] text-createaccount"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-categoryborder font-oxygen font-[1rem] mb-2"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded-lg border-solid text-createaccount border-opacity-50 border-createaccount px-4 py-2 w-[33rem] h-[4rem]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-categoryborder font-oxygen font-[1rem] mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="border rounded-lg border-solid border-opacity-50 border-createaccount px-4 py-2 w-[33rem] h-[4rem]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-categoryborder font-oxygen font-[1rem] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="border rounded-lg border-solid border-opacity-50 border-createaccount px-4 py-2 w-[33rem] h-[7.5rem]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="border-3 bg-simple1 text-tertiary2 font-oxygen text-base py-3.5 px-5 rounded-xl w-[19.5rem] mx-auto hover:scale-90"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
