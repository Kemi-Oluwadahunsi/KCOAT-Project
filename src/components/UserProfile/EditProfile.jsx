import userdp from "../../assets/Ellipse-4.svg";
import Button from "../StaticComponents/Button";
const EditProfile = () => {
  return (
    <div className="pt-[8rem] px-[20rem] py-[5em] font-oxygen">
      <div className="">
        <div className=" flex flex-col gap-8 items-center justify-center rounded-3xl py-[2em] px-[5em] ">
          <div>
            <img src={userdp} alt="User-Image" />
          </div>
          <div className="flex flex-col items-center gap-4 text-[1.5em] font-bold  justify-center">
            <h1>Hannah Daniels</h1>
            <p>No, 145 lamb street, ikeja lagos,nigeria.</p>
          </div>
        </div>

        <div className="flex flex-col gap-[5em]">
          <div className="flex flex-col gap-[2em]">
            <h2 className="text-[1.5em] font-bold">Account Settings</h2>

            <div className="flex flex-col gap-[1.5em]">
              <h2 className="text-[1.1em] font-bold">Profile Information</h2>

              <form className="flex flex-col gap-[1.5em]">
                <div className="flex justify-between  gap-[5em] w-full">
                  <div className="flex flex-col gap-3 basis-[50%]">
                    <label>First Name</label>
                    <input
                      className="border border-border w-full  px-4 py-3 rounded-[1.5em] outline-createaccount"
                      required
                      placeholder="Hannah"
                    />
                  </div>

                  <div className="flex basis-[50%] flex-col gap-3">
                    <label>Last Name</label>
                    <input
                      className="border border-border w-full px-4 py-3 rounded-[1.5em] outline-createaccount"
                      required
                      placeholder="Daniels"
                    />
                  </div>
                </div>

                <div className="flex justify-between gap-[5em] w-full">
                  <div className="flex basis-[50%] flex-col gap-3">
                    <label>Email Address</label>
                    <input
                      className="border border-border px-4 py-3 rounded-[1.5em] outline-createaccount"
                      required
                      placeholder="hannahdaniels@gmail.com
                    "
                    />
                  </div>

                  <div className="flex flex-col basis-[50%] gap-3">
                    <label>Phone</label>
                    <input
                      className="border border-border px-4 py-3 rounded-[1.5em] outline-createaccount"
                      required
                      placeholder="+2348084400000"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="flex flex-col gap-[1.5em]">
              <h2 className="text-[1.1em] font-bold">Change Password</h2>

              <form action="" className="flex w-full gap-[5em] ">
                <div className="flex flex-col gap-3 basis-[50%]">
                  <label htmlFor="password">New Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="***********"
                    className="border border-border w-full px-4 py-3 rounded-[1.5em] outline-createaccount"
                    required
                  />
                </div>

                <div className="flex flex-col gap-3 basis-[50%]">
                  <label htmlFor="password">Confirm Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="***********"
                    className="border border-border w-full px-4 py-3 rounded-[1.5em] outline-createaccount"
                    required
                  />
                </div>
              </form>
            </div>

            <div className="flex flex-col gap-[1.5em]">
              <h2 className="text-[1.1em] font-bold">Address</h2>

              <div className="flex flex-col gap-[1.5em]">
                <div className="flex flex-col gap-[1em]">
                  <label htmlFor="password">Delivery Address</label>
                  <textarea
                    cols="5"
                    placeholder="Your address"
                    className="border border-border w-full px-4 py-3 rounded-[1.5em] outline-createaccount"
                    required
                  />
                </div>

                <div className="flex flex-col gap-[1em]">
                  <label htmlFor="password">State</label>
                  <input
                    placeholder="Your state"
                    className="border border-border px-4 py-3 rounded-[1.5em] outline-createaccount w-[50%]"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className={`flex items-center justify-center w-[15em] bg-simple1 text-tertiary2 font-oxygen text-xl py-1 px-5 rounded-xl mx-auto hover:scale-105 cursor-pointer`}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
