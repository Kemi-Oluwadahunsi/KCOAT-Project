import AdminSidebar from "./AdminSidebar";
import users from "../../assets/u_users-alt.svg";
import shopping from "../../assets/u_shopping-bag.svg";
import bell from "../../assets/bell-active-outline.svg";
import AllProducts from "./AllProducts";
import Dashboard from "./Dashboard";
import Sales from "./Sales";
import Feedbacks from "./Feedbacks";
import Customerbase from "./Customerbase";
import { useState } from "react";
import Analytics from "./Analytics";
import AddNewProducts from "./AddNewProducts";

const AdminManagepage = () => {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  // Function to set the selected menu
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };
  // Render the component based on the selected menu
  const renderComponent = () => {
    switch (selectedMenu) {
      case "dashboard":
        return <Dashboard />;
      case "products":
        return <AllProducts />;
      case "addProduct":
        return <AddProduct />;
      case "sales":
        return <Sales />;
      case "customers":
        return <Customerbase />;
      case "feedbacks":
        return <Feedbacks />;
      case "analytics":
        return <Analytics />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <div className="pt-[8rem] px-[4em] ">
      <div className="flex gap-[3em]">
        <div className="basis-[20%]">
          <AdminSidebar handleMenuClick={handleMenuClick} />
        </div>

        <div className="basis-[80%] pt-[2em] flex flex-col gap-[5em]">
          <div className="flex justify-between">
            <div>
              <img src={shopping} alt="" />
              <div>
                <p>Total Sales</p>
                <p className="font-poppins font-bold text-2xl text-stats">
                  N0.00
                </p>
              </div>
            </div>

            <div>
              <img src={shopping} alt="" />
              <div>
                <p>Total Products</p>
                <p className="font-poppins font-bold text-2xl text-stats">0</p>
              </div>
            </div>

            <div>
              <img src={bell} alt="" />
              <div>
                <p>Notifications</p>
                <p className="font-poppins font-bold text-2xl text-stats">0</p>
              </div>
            </div>

            <div>
              <img src={users} alt="" />
              <div>
                <p>Total Visitors</p>
                <p className="font-poppins font-bold text-2xl text-stats">0</p>
              </div>
            </div>
          </div>

          {/* <AllProducts /> */}
          <div className="basis-[80%] pt-[2em] flex flex-col gap-[5em] pb-[5em]">
            {renderComponent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminManagepage;
