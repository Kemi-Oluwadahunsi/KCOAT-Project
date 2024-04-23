import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ProductContext } from "../../../hooks/ProductContext";
const Customerbase = () => {
  const {loadings, usersProfile} = useContext(ProductContext);

  return (
    <>
      <div className="flex flex-col gap-10">
        <div>
          {loadings ? (
            <div className="loader"></div>
          ) : (
            <div>
              <table className="w-full">
                <thead className=" bg-tertiary text-primary text-xl font-oxygen font-normal">
                  <tr>
                    <th className="border-l border-categoryborder2 py-2 w-[40%]">
                      Customer Name
                    </th>
                    <th className="border-l border-categoryborder2 py-2">
                      Phone Number
                    </th>
                    <th className="border-l border-categoryborder2 py-2">
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
                  {usersProfile.map((user) => (
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
                      <td className="border-l border-categoryborder2 px-[2em] font-medium font-oxygen h-[3rem] text-center">
                        {user.email}
                      </td>
                      <td className="border-l border-categoryborder2 px-[1em]  font-medium h-[3rem] text-center">
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

export default Customerbase;
