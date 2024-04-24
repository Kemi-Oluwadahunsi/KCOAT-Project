import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import sales from "./soldItems";
const Sales = () => {
  const [loading] = useState(false);

  return (
    <div>
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
                      <th className="border-l border-categoryborder2 py-2 w-[20%]">
                        Customer Name
                      </th>
                      <th className="border-l border-categoryborder2 py-2">
                        Phone Number
                      </th>
                      <th className="border-l border-categoryborder2 py-2 w-[60%]">
                        Item(s) Bought
                      </th>
                      <th className="border-l border-categoryborder2 py-2 w-[30%]">
                        Total Amount (#)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-stats">
                    {sales.map((sale) => (
                      <tr
                        key={sale.id}
                        className="border-b border-categoryborder2"
                      >
                        <td className="border-l border-categoryborder2 flex justify-between items-center px-[2em] font-medium font-oxygen h-[6rem]">
                          <div>{sale.cusName}</div>
                        </td>
                        <td className="border-l border-categoryborder2 px-[2em] font-medium font-oxygen h-[3rem] text-center">
                          {sale.phone}
                        </td>
                        <td className="border-l border-categoryborder2  font-medium font-oxygen h-[3rem] text-center">
                          {sale.itemsBought.map((eachItem) => (
                            <div key={eachItem.id} className="flex gap-6">
                              <div className="pb-1">
                                <img
                                  src={eachItem.image}
                                  alt="image"
                                  className="w-[3em] h-[2em] object-cover"
                                  
                                />
                              </div>

                              <p className="w-[50%]">{eachItem.title}</p>
                              <p>N{eachItem.price}</p>
                              <p>{eachItem.quantity}</p>
                              <p>N{eachItem.total}</p>
                            </div>
                          ))}
                        </td>
                        <td className="border-x border-categoryborder2 px-[1em] text-lg font-medium h-[3rem]">
                          N{sale.total}
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
    </div>
  );
};

export default Sales;
