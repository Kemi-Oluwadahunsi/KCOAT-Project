import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItems from "../Cart-Flow/cartproducts";
import Input from "./Input";

const Checkout = () => {
  return (
    <div className="pt-[5em]">
      <div className="flex flex-col gap-[7em]">
        <div className="checkoutbg flex flex-col gap-3 items-center justify-center">
          <h1 className="font-bold text-tertiary font-tertiary text-[2.5em]">
            Checkout
          </h1>
          <div className="flex gap-[2em] font-oxygen font-bold text-color">
            <h3>Home</h3>
            <FontAwesomeIcon icon={faChevronRight} />
            <h3>Cart</h3>
          </div>
        </div>

        <div className="flex w-full pl-[5em]">
          <div>
            <div className="w-30% py-5 px-[5em] flex flex-col gap-5">
              <h1 className="text-tertiary font-tertiary font-bold text-[2em]">
                Billing Address
              </h1>

              <form action="" className="flex flex-col gap-[2em]">
                <div className="flex justify-between gap-[1em]">
                  <div className="flex flex-col gap-3">
                    <label htmlFor="">First name</label>
                    <Input type="text" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="">Last name</label>
                    <Input type="text" />
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
                  <Input type="text/number" />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="">Town / City</label>
                  <Input type="text" />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="">Phone</label>
                  <Input type="number" />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="">Email Address</label>
                  <Input type="email" />
                </div>

                <div>
                  <Input type="text" placeholder="Additional information" />
                </div>
              </form>
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
                  {CartItems.map((product) => (
                    <tr
                      className="border border-t-0 border-b-1 border-l-0 border-r-0 border-border text-center h-20"
                      key={product.id}
                    >
                      <td className="w-[10%] font-bold cursor-pointer">
                        <span className="font-oxygen text-color text-sm">
                          X
                        </span>
                      </td>
                      <td className=" flex items-center justify-evenly py-5">
                        <img
                          src={product.image}
                          width={50}
                          alt=""
                          className=" w-[70px] h-[70px] object-cover rounded-lg"
                        />
                        <span className=" flex items-start w-[50%] text-secondary font-oxygen">
                          {product.title}
                        </span>
                      </td>

                      <td className="w-[15%] font-bold font-tertiary text-tertiary">
                        <span>N{product.price}</span>
                      </td>

                      <td className="w-[15%]">
                        <div className="font-oxygen text-lg text-color">1</div>
                      </td>

                      <td className="w-[15%]">
                        <span className="font-bold font-tertiary text-tertiary">
                          {/* ${product.price * product.quantity} */}N
                          {product.price}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <div className="flex justify-between w-[70%]">
                <p className="font-poppins text-color text-xl">Subtotal</p>
                <p>N115</p>
              </div>

              <div className="flex justify-between w-[70%]">
                <p className="flex items-center justify-center w-[3em] font-poppins text-color text-xl">Total</p>
                <p>N115</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
