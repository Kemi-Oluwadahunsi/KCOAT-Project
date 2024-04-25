import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import CheckCircle from "../../assets/check-circle.svg";
import Button from "../StaticComponents/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../../hooks/CartContext";
import { ProductContext } from "../../../hooks/ProductContext";

const CartPage = () => {
  const navigate = useNavigate();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false); // State to track login prompt modal
  const { isLoggedIn } = useContext(ProductContext);
  const handleProceedToCheckout = () => {
    if (isLoggedIn) {
      navigate("/checkout", { state: { cartItems: cartItems } });
    } else {
      setShowLoginPrompt(true);
    }
  };

  const {
    loading,
    cartItems,
    removeCartItemById,
    updateCartItemQuantity,
    clearCart,
  } = useContext(CartContext);

  const handleIncrement = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    if (item) {
      updateCartItemQuantity(productId, item.quantity + 1);
    }
  };

  const handleDecrement = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    if (item && item.quantity > 1) {
      updateCartItemQuantity(productId, item.quantity - 1);
    }
  };

  const handleRemoveItem = (productId) => {
    removeCartItemById(productId);
    toast.success("Item deleted from cart!"); // Removing item from cart
  };

  const handleClearCart = () => {
    clearCart();
    toast.success("Cart is empty!"); // Removing all items from cart
  };

  // Calculating subtotal
  const subtotal = parseFloat(
    cartItems
      .reduce(
        (total, item) => total + parseFloat(item.productPrice) * item.quantity,
        0
      )
      .toFixed(2)
  );

  // Calculate total
  const total = parseFloat(subtotal.toFixed(2));

  return (
    <div>
      {loading ? (
        <div className="loader h-screen"></div>
      ) : (
        <div className="flex flex-col xs:gap-[3em] gap-[10em] pt-[10em] xs:px-[1em] md:px-[2em] px-[7.5em] border-l-8 border-simple1">
          <div className="flex flex-col xs:gap-4 gap-8">
            <div className="flex xs:flex-col w-full xs:gap-[1em] gap-[2em]">
              <div className="flex-1 border border-cartborder rounded-xl sm:hidden xs:hidden">
                <table className="w-full ">
                  <thead className="py-10 bg-background">
                    <tr className="text-xl text-color font-normal font-oxygen py-10 ">
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
                    {cartItems.map((item) => (
                      <tr
                        className=" border-b border-border text-center h-20 "
                        key={item.id}
                      >
                        <td
                          className="w-[10%] md:w-[6%] font-bold cursor-pointer"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <span className="font-oxygen text-color text-sm">
                            X
                          </span>
                        </td>
                        <td className=" flex items-center justify-evenly py-5">
                          <img
                            src={item.productImage}
                            width={50}
                            alt=""
                            className=" w-[70px] h-[70px] object-cover rounded-lg"
                          />
                          <span className=" flex items-start w-[50%] text-secondary font-oxygen">
                            {item.productName}
                          </span>
                        </td>

                        <td className="w-[15%] font-bold font-tertiary text-tertiary">
                          <span>N{item.productPrice}</span>
                        </td>

                        <td className="w-[15%] md:w-[18%]">
                          {/* <span>{product.quantity}</span> */}
                          <div className="text-lg md-text-base flex justify-between items-center border rounded-[3em] border-minus px-3 py-2 md:py-1 w-[80%] md:w-[90%] text-center mx-auto font-bold ">
                            {/* <button className="text-minus text-[2em]">-</button> */}
                            <FontAwesomeIcon
                              icon={faMinus}
                              className="text-plus  font-oxygen cursor-pointer"
                              // onClick={handleDecrement}
                              onClick={() => handleDecrement(item.id)}
                            />
                            <div className="font-oxygen  text-color">
                              {item.quantity}
                            </div>
                            <FontAwesomeIcon
                              icon={faPlus}
                              className="text-plus  font-oxygen cursor-pointer"
                              // onClick={handleIncrement}
                              onClick={() => handleIncrement(item.id)}
                            />
                          </div>
                        </td>

                        <td className="w-[15%] pr-3 ">
                          <span className="font-bold font-tertiary text-tertiary">
                            {/* ${product.price * product.quantity} */}N
                            {item.productPrice * item.quantity}.00
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* mobile view */}
              <div className="lg:hidden md:hidden flex  border border-cartborder rounded-md">
                <table className="flex flex-col w-full mr-0 pr-2">
                  {cartItems.map((item) => (
                    <tr
                      className="flex text-center items-center justify-between border-b border-border w-[100%] py-2"
                      key={item.id}
                    >
                      <td
                        className="w-[10%] font-bold cursor-pointer"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <span className="font-oxygen text-color text-sm">
                          X
                        </span>
                      </td>

                      <td className="mx-auto">
                        <img
                          src={item.productImage}
                          alt=""
                          className=" w-[90px] h-[90px] object-cover rounded-lg"
                        />
                      </td>

                      <div className="flex flex-col gap-6 w-[60%]">
                        <td>
                          <span className="md:text-2xl text-color font-oxygen">
                            {item.productName}
                          </span>
                        </td>

                        <div className="flex gap-4">
                          <td>
                            <span className="md:text-xl font-tertiary text-tertiary">
                              N{item.productPrice}
                            </span>
                          </td>

                          <td className="w-[15%] xs:w-[100%]">
                            <div className="flex justify-between items-center border rounded-[3em] border-minus px-2 py-1 text-center mx-auto font-bold ">
                              {/* <button className="text-minus text-[2em]">-</button> */}
                              <FontAwesomeIcon
                                icon={faMinus}
                                className="text-plus text-sm font-oxygen cursor-pointer"
                                // onClick={handleDecrement}
                                onClick={() => handleDecrement(item.id)}
                              />
                              <div className="font-oxygen text-sm text-color">
                                {item.quantity}
                              </div>
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="text-plus text-sm font-oxygen cursor-pointer"
                                // onClick={handleIncrement}
                                onClick={() => handleIncrement(item.id)}
                              />
                            </div>
                          </td>
                        </div>
                      </div>
                    </tr>
                  ))}
                </table>
              </div>

              <div className="w-[30%] xs:w-[100%] flex flex-col gap-10 border border-cartborder h-[fit-content] xs:pb-5 pb-10  rounded-xl mt-10">
                <table className="flex flex-col gap-4">
                  <thead className="bg-background">
                    <tr className="text-xl xs:text-[1em] text-color font-oxygen">
                      <th className="flex items-start py-6 xs:py-2 px-5 font-normal">
                        Cart Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="flex flex-col xs:text-base text-xl text-color font-oxygen xs:gap-[1em] gap-[2em] px-5">
                    <tr className="flex   text-color font-oxygen justify-between px-5">
                      <td>SUBTOTAL</td>
                      <td className="font-oxygen">N{subtotal}.00</td>
                    </tr>
                    <tr className="flex text-color font-oxygen justify-between px-5">
                      <td>TOTAL</td>
                      <td>N{total}.00</td>
                    </tr>
                  </tbody>
                </table>

                <div onClick={handleProceedToCheckout}>
                  <div className="flex items-center justify-center">
                    <div className="flex bg-tertiary gap-1 text-[1.2rem] xs:text-base items-center xs:w-[90%] w-[70%] md:w-[90%] justify-center rounded-xl p-1 hover:scale-110 xs:hover:scale-0 ">
                      <Button>Proceed To Checkout</Button>
                      <img src={CheckCircle} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex xs:gap-3 gap-8">
              <Link to="/all-products">
                <div
                  className="flex justify-center xs:justify-start items-center font-secondary font-medium hover:scale-105 xs:hover:scale-0 xs:text-[0.9em] xs:w-[13em] py-1 w-[12em] bg-tertiary rounded-xl"
                >
                  <Button>Continue Shopping</Button>
                </div>
              </Link>

              <div
                className="flex justify-center items-center font-secondary font-medium hover:scale-105 xs:text-[0.9em] py-1 w-[8em] bg-tertiary rounded-xl"
                onClick={handleClearCart}
              >
                <Button>Clear Cart</Button>
              </div>
            </div>
          </div>

          {/* <div>
            <div className="flex flex-col gap-10 xs:px-4 px-10">
              <h1 className="text-tertiary font-bold font-tertiary xs:text-[1.5em] text-[2.5em]">
                You May Also Like
              </h1>

              <div className="grid grid-cols-4 justify-center gap-[4rem] ">
                {/* {mostPopular} */}
              {/* </div>
            </div>
          </div> */} 
          <div className="z-[10000] pt-[20em] xs:pt-0 md:pt-0">
            <ToastContainer position="top-right" autoClose={2000} />
          </div>
        </div>
      )}

      {showLoginPrompt && (
        <div className="absolute top-[40%] xs:left-[20%] left-[40%] bg-primary xs:right-[4em] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] rounded-2xl z-50 pb-[1em]">
          <div className=" flex flex-col xs:gap-[1em] gap-[2em] bg-white p-8 rounded-lg">
            <p className="text-xl xs:text-base">
              Please login or create an account to checkout.
            </p>
            <Link to="/login">
              <div className="flex items-center justify-center">
                <div className="w-[8em] flex justify-center items-center font-secondary font-medium py-1  bg-tertiary rounded-xl">
                  <Button>Login</Button>
                </div>
              </div>
            </Link>
          </div>
          <button
            onClick={() => setShowLoginPrompt(false)}
            className="-mt-[1em] ml-[2em] text-lg underline cursor-pointer"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
