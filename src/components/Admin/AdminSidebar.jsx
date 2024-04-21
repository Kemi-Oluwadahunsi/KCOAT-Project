import { IoSettingsOutline } from "react-icons/io5";
import { LuBadgePercent } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import { RiShoppingBagLine } from "react-icons/ri";
import { BiBarChart } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminSidebar = ({ handleMenuClick, handleAdminLogout }) => {
  return (
    <div className="">
      <div className="flex flex-col px-[2em] bg-tertiary rounded-2xl h-[full] justify-between gap-[15rem] font-oxygen py-4">
        <div className="text-primary flex flex-col gap-[2em]">
          <h2>Menu</h2>
          <NavLink
            to="/admin/dashboard"
            onClick={() => handleMenuClick("dashboard")}
          >
            <div className="flex gap-4 items-center  hover:border-b">
              <MdDashboard />
              <p>Dashboard</p>
            </div>
          </NavLink>

          <NavLink
            to="/admin/products"
            onClick={() => handleMenuClick("products")}
          >
            <div className="flex gap-4 items-center  hover:border-b">
              <RiShoppingBagLine />
              <p>Products</p>
            </div>
          </NavLink>

          <NavLink
            to="/add-product"
            onClick={() => handleMenuClick("addProduct")}
          >
            <div className="flex gap-4 items-center  hover:border-b">
              <MdOutlineAddToPhotos />
              <p>Add New Product</p>
            </div>
          </NavLink>

          <NavLink to="/admin/sales" onClick={() => handleMenuClick("sales")}>
            <div className="flex gap-4 items-center  hover:border-b">
              <LuBadgePercent />
              <p>Sales</p>
            </div>
          </NavLink>

          <NavLink
            to="/admin/customers"
            onClick={() => handleMenuClick("customers")}
          >
            <div className="flex gap-4 items-center  hover:border-b">
              <FaUserAlt />
              <p>Customers</p>
            </div>
          </NavLink>

          <NavLink
            to="/admin/feedback-corner"
            onClick={() => handleMenuClick("feedbacks")}
          >
            <div className="flex gap-4 items-center  hover:border-b">
              <BsFillChatSquareQuoteFill />
              <p>Feedback Corner</p>
            </div>
          </NavLink>

          <NavLink
            to="/admin/analytics"
            onClick={() => handleMenuClick("analytics")}
          >
            <div className="flex gap-4 items-center  hover:border-b">
              <BiBarChart />
              <p>Analytics</p>
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

            <div className="flex gap-4 items-center  hover:border-b" onClick={handleAdminLogout}>
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
