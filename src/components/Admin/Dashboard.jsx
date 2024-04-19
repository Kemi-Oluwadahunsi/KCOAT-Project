// import Success from "../../assets/Group-1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";
const Dashboard = () => {
  return (
    <div className=" flex justify-center">
      <div className="flex items-center justify-center w-full">
        <div
          className="w-[70%] py-[2em] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]
          rounded-[1em]"
        >
          <div className="flex flex-col gap-[3em] items-center justify-center w-full">
            <div>
              <FontAwesomeIcon
                icon={faUserLock}
                className="text-tertiary text-[8rem]"
              />
              {/* <img src={Success} alt="Payment-success" /> */}
            </div>
            <div className="flex flex-col gap-[1em] items-center justify-center w-[58%] text-center">
              <h2 className="text-color font-tertiary font-bold text-[2.5rem]">
               Welcome Admin!
              </h2>

              <p className="font-medium text-[1.1em]">
                You are welcome back.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
