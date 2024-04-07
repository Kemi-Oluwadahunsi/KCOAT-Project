import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItems from "../Cart-Flow/cartproducts";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import CheckCircle from "../../assets/check-circle.svg";
import Button from "../Button";
import products from "../Products/AllproductsItems/allproducts";
import Cards from "../LandingpageComponents/MostPopularProductSections/Cards";
import { Link } from "react-router-dom";


const CartPage = () => {
  const mostPopular = products.map((item) => (
    <Cards
      key={item.id}
      id={item.id}
      image={item.image}
      title={item.title}
      cart={item.cart}
      price={item.price}
    />
  ));
  return (
    <div className="flex flex-col gap-[10em] pt-[10em] px-[7.5em]">
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
              {CartItems.map((product) => (
                <tr
                  className="border border-t-0 border-b-1 border-l-0 border-r-0 border-border text-center h-20"
                  key={product.id}
                >
                  <td className="w-[10%] font-bold cursor-pointer">
                    <span className="font-oxygen text-color text-sm">X</span>
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
                    {/* <span>{product.quantity}</span> */}
                    <div className="flex justify-between items-center border rounded-[3em] border-minus px-3 py-2 w-[80%] text-center mx-auto font-bold ">
                      {/* <button className="text-minus text-[2em]">-</button> */}
                      <FontAwesomeIcon
                        icon={faMinus}
                        className="text-plus text-lg font-oxygen cursor-pointer"
                      />
                      <div className="font-oxygen text-lg text-color">1</div>
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="text-plus text-lg font-oxygen cursor-pointer"
                      />
                    </div>
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

        <div className="w-[30%] flex flex-col gap-10 border border-cartborder h-[fit-content] pb-10  rounded-xl mt-10">
          <table>
            <thead className="bg-background">
              <tr className="text-xl text-color font-oxygen">
                <th className="flex items-start py-6 px-5 font-normal">
                  Cart Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="flex flex-col text-xl text-color font-oxygen gap-[3em] px-5 mt-10">
                <td>SUBTOTAL</td>
                <td>TOTAL</td>
              </tr>
            </tbody>
          </table>

          <Link to="/checkout">
            <div className="flex items-center justify-center">
              <div className="flex bg-tertiary gap-1  items-center w-[70%] justify-center rounded-xl p-1 hover:scale-110 ">
                <Button>Proceed To Checkout</Button>
                <img src={CheckCircle} alt="" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-10 px-10">
          <h1 className="text-tertiary font-bold font-tertiary text-[2.5em]">
            You May Also Like
          </h1>

          <div className="grid grid-cols-4 justify-center gap-[4rem] ">
            {mostPopular}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
