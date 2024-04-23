import Button from "../StaticComponents/Button";
import Success from "../../assets/Group-1.svg";
import { Link } from "react-router-dom";
const PaymentSuccessPage = () => {
  return (
    <div className="pt-[5em] h-screen flex justify-center">
      <div className="flex items-center justify-center w-full">
        <div
          className="w-[60%] xs:w-[90%] xs:py-8 py-[4em] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]
          rounded-[1em]"
        >
          <div className="flex flex-col xs:gap-4 gap-[3em] items-center justify-center w-full">
            <div>
              <img src={Success} alt="Payment-success" className="xs:w-[70%]"/>
            </div>
            <div className="flex flex-col gap-[1em] items-center justify-center w-[58%] text-center">
              <h2 className="text-color font-tertiary font-bold text-[2.5rem]">
                Thank You!
              </h2>

              <p className="font-medium text-[1.1em]">
                Your order has been confirmed & it is on the way. Check your
                email for the details.
              </p>
            </div>

            <div className="flex xs:flex-col xs:justify-center xs:gap-4 gap-[3em]">
              <Link to="/">
                <div className="w-[15em] xs:w-[13em] flex justify-center items-center font-secondary font-medium hover:scale-105 py-1 bg-tertiary rounded-xl">
                  <Button>Go to Homepage</Button>
                </div>
              </Link>

              <Link to="/cart">
                <div className="w-[15em] xs:w-[13em] flex justify-center items-center font-secondary font-medium hover:scale-105 py-1 bg-tertiary rounded-xl">
                  <Button>Continue Shopping</Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
