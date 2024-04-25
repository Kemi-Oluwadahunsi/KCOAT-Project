import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import sales from "./soldItems";
const Sales = () => {
  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const salesPerPage = 5;

  const indexOfLastSales = currentPage * salesPerPage;
  const indexOfFirstSales = indexOfLastSales - salesPerPage;

  const currentSales = sales.slice(
    indexOfFirstSales,
    indexOfLastSales
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
                    {currentSales.map((sale) => (
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
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FontAwesomeIcon
                icon={faAngleDoubleLeft}
                className=" text-categoryborder text-lg"
              />
            </button>
            <div>
              {[
                ...Array(Math.ceil(sales.length / salesPerPage)).keys(),
              ].map((number) => (
                <button
                  key={number}
                  className={`border border-categoryborder2 px-3 py-1  ${
                    currentPage === number + 1 ? "bg-tertiary text-primary" : ""
                  }`}
                  onClick={() => paginate(number + 1)}
                >
                  {number + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastSales >= sales.length}
            >
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                className=" text-categoryborder text-lg"
              />
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default Sales;
