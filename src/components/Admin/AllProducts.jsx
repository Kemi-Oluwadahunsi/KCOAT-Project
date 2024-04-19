import save from "../../assets/u_save.svg";
import { useContext } from "react";
import { ProductContext } from "../../../hooks/ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

const AllProducts = () => {
  const { products, loading } = useContext(ProductContext);
  return (
    <>
      <div className="flex flex-col gap-10">
        <div>
          {loading ? (
            <div className="loader"></div>
          ) : (
            <div>
              <table className="w-full">
                <thead className=" bg-tertiary text-primary text-xl font-oxygen font-normal">
                  <tr>
                    <th className="border-l border-categoryborder2 py-2 w-[40%]">
                      Products
                    </th>
                    <th className="border-l border-categoryborder2 py-2">
                      Prices
                    </th>
                    <th className="border-l border-categoryborder2 py-2">
                      Quantity
                    </th>
                    <th className="border-l border-categoryborder2 py-2 w-[25%]">
                      Edit Products
                    </th>
                  </tr>
                </thead>
                <tbody className="text-stats">
                  {products.map((product) => (
                    <tr
                      key={product.Productid}
                      className="border-b border-categoryborder2"
                    >
                      <td className="border-l border-categoryborder2 flex justify-between items-center px-[2em] font-medium font-oxygen h-[6rem]">
                        <h2>Emerald Eaarings green</h2>
                        <div>
                          <img
                            src={product.ProductImage}
                            alt="product-image"
                            // width={80}
                            // height={30}
                            className="w-[8rem] h-[5rem]"
                          />
                        </div>
                      </td>
                      <td className="border-l border-categoryborder2 px-[2em] font-medium font-tertiary h-[3rem] text-center">
                        N{product.ProductPrice}
                      </td>
                      <td className="border-l border-categoryborder2 px-[2em] font-medium font-tertiary h-[3rem] text-center">
                        {product.Quantity}
                      </td>
                      <td className="border-l border-categoryborder2 px-[1em] text-primary font-medium h-[3rem]">
                        <div className="flex justify-between items-center font-oxygen gap-3 ">
                          <div className="flex gap-4 bg-tertiary basis-[50%] px-2 rounded-[0.2em] py-1 ">
                            <img src={save} alt="" />
                            <button>Edit</button>
                          </div>
                          <div className="flex gap-4 bg-delete px-3 basis-[50%] rounded-[0.2em] py-1">
                            <img src={save} alt="" />
                            <button>Delete</button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="flex gap-4 items-center justify-center w-full">
          <button>
            <FontAwesomeIcon
              icon={faAngleDoubleLeft}
              className=" text-categoryborder2 text-lg"
            />
          </button>
          <div>
            <button className="border border-categoryborder2 px-3 py-1">
              1
            </button>
            <button className="border border-categoryborder2 px-3 py-1">
              2
            </button>
            <button className="border border-categoryborder2 px-3 py-1">
              3
            </button>
          </div>
          <button>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className=" text-categoryborder2 text-lg"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
