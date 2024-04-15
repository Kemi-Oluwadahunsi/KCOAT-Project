import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import CheckCircle from "../../assets/check-circle.svg";
import Button from "../StaticComponents/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../hooks/CartContext";

const CartPage = () => {
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    navigate("/checkout", { state: { cartItems: cartItems } });
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
    toast.success("Item deleted from cart!") // Removing item from cart
  };

  const handleClearCart = () => {
    clearCart();
    toast.success("Cart is empty!") // Removing all items from cart
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
    <>
      {loading ? (
        <div className="loader h-screen"></div>
      ) : (
        <div className="flex flex-col gap-[10em] pt-[10em] px-[7.5em] border-l-8 border-simple1">
          <div className="flex flex-col gap-8">
            <div className="flex w-full gap-[2em]">
              <div className="flex-1 border border-cartborder rounded-xl">
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
                    {cartItems.map((item) => (
                      <tr
                        className="border border-t-0 border-b-1 border-l-0 border-r-0 border-border text-center h-20"
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

                        <td className="w-[15%]">
                          {/* <span>{product.quantity}</span> */}
                          <div className="flex justify-between items-center border rounded-[3em] border-minus px-3 py-2 w-[80%] text-center mx-auto font-bold ">
                            {/* <button className="text-minus text-[2em]">-</button> */}
                            <FontAwesomeIcon
                              icon={faMinus}
                              className="text-plus text-lg font-oxygen cursor-pointer"
                              // onClick={handleDecrement}
                              onClick={() => handleDecrement(item.id)}
                            />
                            <div className="font-oxygen text-lg text-color">
                              {item.quantity}
                            </div>
                            <FontAwesomeIcon
                              icon={faPlus}
                              className="text-plus text-lg font-oxygen cursor-pointer"
                              // onClick={handleIncrement}
                              onClick={() => handleIncrement(item.id)}
                            />
                          </div>
                        </td>

                        <td className="w-[15%]">
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

              <div className="w-[30%] flex flex-col gap-10 border border-cartborder h-[fit-content] pb-10  rounded-xl mt-10">
                <table className="flex flex-col gap-4">
                  <thead className="bg-background">
                    <tr className="text-xl text-color font-oxygen">
                      <th className="flex items-start py-6 px-5 font-normal">
                        Cart Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="flex flex-col text-xl text-color font-oxygen gap-[2em] px-5">
                    <tr className="flex text-xl text-color font-oxygen justify-between px-5">
                      <td>SUBTOTAL</td>
                      <td>N{subtotal}.00</td>
                    </tr>
                    <tr className="flex text-xl text-color font-oxygen justify-between px-5">
                      <td>TOTAL</td>
                      <td>N{total}.00</td>
                    </tr>
                  </tbody>
                </table>

                <div onClick={handleProceedToCheckout}>
                  <div className="flex items-center justify-center">
                    <div className="flex bg-tertiary gap-1 text-[1.2rem] items-center w-[70%] justify-center rounded-xl p-1 hover:scale-110 ">
                      <Button>Proceed To Checkout</Button>
                      <img src={CheckCircle} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              <Link to="/all-products">
                <div className="flex justify-center items-center font-secondary font-medium hover:scale-105 py-1 w-[12em] bg-tertiary rounded-xl">
                  <Button>Continue Shopping</Button>
                </div>
              </Link>

              <div
                className="flex justify-center items-center font-secondary font-medium hover:scale-105 py-1 w-[8em] bg-tertiary rounded-xl"
                onClick={handleClearCart}
              >
                <Button>Clear Cart</Button>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-10 px-10">
              <h1 className="text-tertiary font-bold font-tertiary text-[2.5em]">
                You May Also Like
              </h1>

              <div className="grid grid-cols-4 justify-center gap-[4rem] ">
                {/* {mostPopular} */}
              </div>
            </div>
          </div>
          <div className="z-[10000] pt-[20em]">
            <ToastContainer position="top-right" autoClose={2000} />
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
