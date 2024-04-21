import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../StaticComponents/Input";
import DarkCircle from "../../assets/dark-circle.svg";
import Trophy from "../../assets/trophy1.svg";
import Guarantee from "../../assets/guarantee.svg";
import Service from "../../assets/customer-support.svg";
import { Link, useLocation } from "react-router-dom";
import CheckOut2 from "../Cart-Flow/CheckOut2";
import { useContext } from "react";
import { ProductContext } from "../../../hooks/ProductContext";

const Checkout = () => {
  const { userProfile } = useContext(ProductContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const location = useLocation();
  const { cartItems } = location.state || { cartItems: [] };

  if (!cartItems) {
    return <div>Error: Cart items not found!</div>;
  }

  const subtotal = cartItems.reduce(
    (total, item) => total + item.productPrice * item.quantity,
    0
  );

  const total = subtotal;

  return (
    <div className="pt-[5em] flex flex-col gap-[7em] border-l-8 border-simple1">
      <div className="flex flex-col gap-[7em]">
        <div className="checkoutbg flex flex-col gap-3 items-center justify-center">
          <h1 className="font-bold text-tertiary font-tertiary text-[2.5em]">
            Checkout
          </h1>
          <div className="flex gap-[2em] font-oxygen font-bold text-color">
            <Link to="/">
              <h3>Home</h3>
            </Link>
            <FontAwesomeIcon icon={faChevronRight} />
            <Link to="/cart">
              <h3>Cart</h3>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex w-full pl-[5em]">
        <div>
          <div className="w-30% py-5 px-[5em] flex flex-col gap-5">
            <h1 className="text-tertiary font-tertiary font-bold text-[2em]">
              Billing Address
            </h1>

            {userProfile && (
              <form
                key={userProfile.customerId}
                className="flex flex-col gap-[2em]"
              >
                <div className="flex justify-between gap-[1em] w-full">
                  <div className="flex flex-col gap-3">
                    <label htmlFor="">First name</label>
                    <div
                      type="text"
                      className=" border w-[12em] border-categoryborder2 p-4 rounded-xl"
                    >
                      {userProfile.firstName}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="">Last name</label>
                    <div
                      type="text"
                      className=" border w-[12em] border-categoryborder2 p-4 rounded-xl"
                    >
                      {userProfile.lastName}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="">Company name (optional)</label>
                  <Input type="text" className="w-full" />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="">Country / Region</label>
                  <Input type="text" />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="">Street address</label>
                  <div
                    type="text/number"
                    className=" border w-full border-categoryborder2 p-4 rounded-xl"
                  >
                    {userProfile.address}{" "}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="">Town / City</label>
                  <div
                    type="text"
                    className=" border w-full border-categoryborder2 p-4 rounded-xl"
                  >
                    {userProfile.state}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="">Phone</label>
                  <div
                    type="number"
                    className=" border w-full border-categoryborder2 p-4 rounded-xl"
                  >
                    {userProfile.phoneNumber}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="">Email Address</label>
                  <div
                    type="email"
                    className=" border w-full border-categoryborder2 p-4 rounded-xl"
                  >
                    {userProfile.email}{" "}
                  </div>
                </div>

                <div>
                  <Input type="text" placeholder="Additional information" />
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-[2em] w-[60%] mx-10">
          <div className=" border border-cartborder rounded-xl h-[fit-content]">
            <table className="w-full">
              <thead className="py-10 bg-background">
                <tr className="text-xl text-color font-normal font-oxygen py-10">
                  <th className="py-10"></th>
                  <th className="flex justify-start py-5 pl-[10%] font-normal">
                    Products
                  </th>
                  <th className="font-normal">Unit Price</th>
                  <th className="font-normal">Quantity</th>
                  <th className="font-normal">Total</th>
                </tr>
              </thead>

              <tbody className="">
                {cartItems.map((product, index) => (
                  <tr
                    className="border border-t-0 border-b-1 border-l-0 border-r-0 border-border text-center h-20"
                    key={product.id}
                  >
                    <td className="w-[10%] font-bold cursor-pointer">
                      <span className="font-oxygen text-color text-lg">
                        {index + 1}.
                      </span>
                    </td>
                    <td className=" flex items-center justify-evenly py-5">
                      <img
                        src={product.productImage}
                        width={50}
                        alt=""
                        className=" w-[70px] h-[70px] object-cover rounded-lg"
                      />
                      <span className=" flex items-start w-[50%] text-secondary font-oxygen">
                        {product.productName}
                      </span>
                    </td>

                    <td className="w-[15%] font-bold font-tertiary text-tertiary">
                      <span>N{product.productPrice}</span>
                    </td>

                    <td className="w-[15%]">
                      <div className="font-oxygen text-lg text-color">
                        {product.quantity}
                      </div>
                    </td>

                    <td className="w-[15%]">
                      <span className="font-bold font-tertiary text-tertiary">
                        N{product.productPrice * product.quantity}.00
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-5 w-[70%] pb-[5em]">
              <div className="flex justify-between w-full">
                <p className="font-poppins text-color text-xl">Subtotal</p>
                <p className=" font-bold font-tertiary text-tertiary">
                  N{subtotal}.00
                </p>
              </div>

              <div className="flex justify-between w-full">
                <p className="flex items-center justify-center w-[3em] font-poppins text-color text-xl">
                  Total
                </p>
                <p className="font-bold font-tertiary text-tertiary">
                  N{total}.00
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center px-[5em] gap-[5em]">
              <div className="flex flex-col w-[80%] gap-10">
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex gap-5">
                    <img src={DarkCircle} alt="" />
                    <p className=" font-poppins text-[1.2em] font-medium text-color">
                      Card Payment
                    </p>
                  </div>
                  <p className=" font-oxygen text-justify text-createaccount">
                    Make your payment using your card.. Please use your Order ID
                    as the payment reference. Your order will not be shipped
                    until the funds have cleared in our account.
                  </p>
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <div className="flex gap-5">
                    <input type="radio" />
                    <p className=" font-poppins text-[1.2em] font-medium text-createaccount">
                      Card Payment
                    </p>
                  </div>

                  <p className=" font-oxygen text-justify text-subtext">
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our{" "}
                    <span className="font-oxygen text-color font-bold">
                      privacy policy.
                    </span>
                  </p>
                </div>
              </div>

              <div className=" flex  justify-center" onClick={scrollToTop}>
                <div className="w-[60%] font-medium text-xl bg-tertiary py-2 rounded-2xl flex items-center justify-center">
                  <CheckOut2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-feedback flex justify-between p-[5em]">
        <div className="flex gap-4 ">
          <img src={Trophy} alt="" />
          <div className="flex flex-col gap-1">
            <h1 className="font-tertiary font-bold text-[2.5em]">
              High Quality
            </h1>
            <p className="font-oxygen text-[1.2em] text-color">
              crafted from top materials
            </p>
          </div>
        </div>

        <div className="flex gap-4 ">
          <img src={Guarantee} alt="" />
          <div className="flex flex-col gap-1">
            <h1 className="font-tertiary text-[2.5em]">Delivery Service</h1>
            <p className="font-oxygen text-[1.2em] text-color">
              Fast and Efficient
            </p>
          </div>
        </div>

        <div className="flex gap-4 ">
          <img src={Service} alt="" />
          <div className="flex flex-col gap-1">
            <h1 className="font-tertiary font-bold text-[2.5em]">
              24 / 7 Support
            </h1>
            <p className="font-oxygen text-[1.2em] text-color">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
