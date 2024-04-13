import Button from "../StaticComponents/Button";
import userdp from "../../assets/Ellipse-4.svg";
import { Link } from "react-router-dom";

const MainProfile = () => {
  return (
    <div className="pt-[8rem] px-[15em]">
      <div className="flex flex-col gap-[3em] font-oxygen pb-[5em]">
        <div className="flex justify-between">
          <h1 className="text-color text-[2rem] font-bold">My Profile</h1>
          <Link to="/edit-profile">
            <Button
              className={
                " text-tertiary2 w-[10em] bg-tertiary rounded-lg flex items-center justify-center hover:scale-105 text-lg"
              }
            >
              Edit
            </Button>
          </Link>
        </div>

        <div className=" flex gap-8 border border-tertiary rounded-3xl py-[2em] px-[5em] ">
          <div>
            <img src={userdp} alt="User-Image" />
          </div>
          <div className="flex flex-col gap-4 text-[1.5em] font-bold  justify-center">
            <h1>Hannah Daniels</h1>
            <p>No, 145 lamb street, ikeja lagos,nigeria.</p>
          </div>
        </div>

        <div className="flex flex-col gap-8 border border-tertiary rounded-3xl py-[3em] px-[5em]">
          <h2 className="text-[1.5em] font-bold">Personal Information</h2>

          <div>
            <div className="flex flex-col gap-[4em]">
              <div className="flex justify-between  gap-[10em] w-full">
                <div className="flex flex-col gap-3 basis-[50%]">
                  <h2>First Name</h2>
                  <div className="border border-border w-full  px-4 py-3 rounded-[1.5em]">
                    Hannah
                  </div>
                </div>

                <div className="flex basis-[50%] flex-col gap-3">
                  <h2>Last Name</h2>
                  <div className="border border-border w-full px-4 py-3 rounded-[1.5em]">
                    Daniels
                  </div>
                </div>
              </div>

              <div className="flex justify-between gap-[10em] w-full">
                <div className="flex basis-[50%] flex-col gap-3">
                  <h2>Email Address</h2>
                  <div className="border border-border px-4 py-3 rounded-[1.5em]">
                    hannahdaniels@gmail.com
                  </div>
                </div>

                <div className="flex flex-col basis-[50%] gap-3">
                  <h2>Phone</h2>
                  <div className="border border-border px-4 py-3 rounded-[1.5em]">
                    +2348084400000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col border border-tertiary rounded-3xl py-[2em] px-[5em]">
          <div className="flex flex-col gap-[2em]">
            <h2 className="text-[1.5em] font-bold">Address</h2>
            <div className="flex flex-col justify-between gap-[3em]">
              <div className="flex flex-col gap-3 basis-[50%]">
                <h2>State</h2>
                <div className="border border-border px-4 py-3 rounded-[1.5em] w-[50%]">
                  Lagos
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h2>Delivery Address</h2>
                <div className="border border-border px-4 py-3 rounded-[1.5em] w-[70%]">
                  No 142, Lamb Street, Ikeja, Lagos, Nigeria.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProfile;
