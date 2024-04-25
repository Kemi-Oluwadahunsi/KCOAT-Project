import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { ProductContext } from "../../../hooks/ProductContext";
const Customerbase = () => {
  const { loadings, usersProfile } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);

  const customersPerPage = 5;

  // Calculate index of the first and last products on the current page
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;

  const currentCustomers = usersProfile.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

   const paginate = (pageNumber) => {
     setCurrentPage(pageNumber);
   };

  return (
    <>
      <div className="flex flex-col gap-10">
        <div>
          {loadings ? (
            <div className="loader"></div>
          ) : (
            <div>
              <table className="w-[100%">
                <thead className=" bg-tertiary text-primary text-xl font-oxygen font-normal">
                  <tr>
                    <th className="border-l border-categoryborder2 py-2 w-[40%]">
                      Customer Name
                    </th>
                    <th className="border-l border-categoryborder2 py-2">
                      Phone Number
                    </th>
                    <th className="border-l border-categoryborder2 py-2 md:w-[10%]">
                      Email
                    </th>
                    <th className="border-l border-categoryborder2 py-2 w-[25%]">
                      Address
                    </th>

                    <th className="border-l border-categoryborder2 py-2 w-[25%]">
                      ID
                    </th>
                  </tr>
                </thead>
                <tbody className="text-stats">
                  {currentCustomers.map((user) => (
                    <tr
                      key={user.customerId}
                      className="border-b border-categoryborder2"
                    >
                      <td className="border-l border-categoryborder2 px-[2em] font-medium font-oxygen h-[3rem] text-center">
                        {user.firstName} {user.lastName}
                      </td>
                      <td className="border-l border-categoryborder2 px-[2em] font-medium font-oxygen h-[3rem] text-center">
                        {user.phoneNumber}
                      </td>
                      <td className="border-l border-categoryborder2 px-[2em] md:px-0 font-medium font-oxygen h-[3rem] text-center">
                        {user.email}
                      </td>
                      <td className="border-l border-categoryborder2 px-[1em] md:px-2  font-medium h-[3rem] text-center">
                        {user.address}
                      </td>
                      <td className="border-l border-categoryborder2 px-[1em]  font-medium h-[3rem] text-center">
                        {user.customerId}
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
              ...Array(Math.ceil(usersProfile.length / customersPerPage)).keys(),
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
            disabled={indexOfLastCustomer >= usersProfile.length}
          >
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className=" text-categoryborder text-lg"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Customerbase;
