import { IoSettingsOutline } from "react-icons/io5";
import { LuBadgePercent } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const AdminSidebar = ({ handleMenuClick, handleAdminLogout }) => {
  const [activeMenu, setActiveMenu] = useState(""); // State to track active menu item

  // Function to handle menu click
  const handleClick = (menu) => {
    setActiveMenu(menu); // Set the active menu
    handleMenuClick(menu); // Call the handleMenuClick prop function
  };

  return (
    <div className="">
      <div className="flex flex-col px-[2em] bg-tertiary rounded-2xl h-[full] justify-between gap-[15rem] font-oxygen py-4">
        <div className="text-primary flex flex-col gap-[2em]">
          <h2>Menu</h2>
          <NavLink
            to="/kcoat/dashboard"
            onClick={() => handleClick("dashboard")}
          >
            <div
              className={`flex gap-4 items-center ${
                activeMenu === "dashboard" ? "border-b-2" : ""
              }`}
            >
              <MdDashboard />
              <p>Dashboard</p>
            </div>
          </NavLink>

          <NavLink to="/kcoat/products" onClick={() => handleClick("products")}>
            <div
              className={`flex gap-4 items-center ${
                activeMenu === "products" ? "border-b-2" : ""
              }`}
            >
              <RiShoppingBagLine />
              <p>Products</p>
            </div>
          </NavLink>

          <NavLink
            to="/kcoat/add-product"
            onClick={() => handleClick("addproduct")}
          >
            <div
              className={`flex gap-4 items-center ${
                activeMenu === "addproduct" ? "border-b-2" : ""
              }`}
            >
              <MdOutlineAddToPhotos />
              <p>Add New Product</p>
            </div>
          </NavLink>

          <NavLink to="/kcoat/sales" onClick={() => handleClick("sales")}>
            <div
              className={`flex gap-4 items-center ${
                activeMenu === "sales" ? "border-b-2" : ""
              }`}
            >
              <LuBadgePercent />
              <p>Sales</p>
            </div>
          </NavLink>

          <NavLink
            to="/kcoat/customers"
            onClick={() => handleClick("customers")}
          >
            <div
              className={`flex gap-4 items-center ${
                activeMenu === "customers" ? "border-b-2" : ""
              }`}
            >
              <FaUserAlt />
              <p>Customers</p>
            </div>
          </NavLink>

          <NavLink
            to="/kcoat/feedback-corner"
            onClick={() => handleClick("feedbacks")}
          >
            <div
              className={`flex gap-4 items-center ${
                activeMenu === "feedbacks" ? "border-b-2" : ""
              }`}
            >
              <BsFillChatSquareQuoteFill />
              <p>Feedback Corner</p>
            </div>
          </NavLink>
        </div>

        <div className="text-primary ">
          <div className="flex flex-col gap-[1em]">
            <h2>Others</h2>

            <div className="flex gap-4 items-center  hover:border-b">
              <IoSettingsOutline />
              <p>Settings</p>
            </div>

            <div
              className="flex gap-4 items-center  hover:border-b"
              onClick={handleAdminLogout}
            >
              <LuLogOut />
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
