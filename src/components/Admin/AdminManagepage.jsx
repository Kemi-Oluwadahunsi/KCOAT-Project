import AdminSidebar from "./AdminSidebar";
import users from "../../assets/u_users-alt.svg";
import shopping from "../../assets/u_shopping-bag.svg";
import bell from "../../assets/bell-active-outline.svg";
import AllProducts from "./AllProducts";
import Dashboard from "./Dashboard";
import Sales from "./Sales";
import Feedbacks from "./Feedbacks";
import Customerbase from "./Customerbase";
import { useContext, useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import salesData from "./soldItems";
import { ProductContext } from "../../../hooks/ProductContext";
import { AdminContext } from "../../../hooks/AdminContextPage";

const AdminManagepage = () => {
  const {handleAdminLogout} = useContext(AdminContext)
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  const [totalSales, setTotalSales] = useState(0);
  // const [totalUsers, setTotalUsers] = useState(0);
  const { products, totalUsers } = useContext(ProductContext);
  
  const totalProducts = products.length;
  // Calculate total sales amount
  const calculateTotalSales = () => {
    let totalAmount = 0;
    salesData.forEach((sale) => {
      totalAmount += parseInt(sale.total.replace(",", ""));
    });
    return totalAmount;
  };

  // Set total sales amount
  const updateTotalSales = () => {
    const total = calculateTotalSales();
    setTotalSales(total);
  };

  useEffect(() => {
    updateTotalSales();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  // Function to set the selected menu
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    // scrollToTop()
  };
  // Render the component based on the selected menu
  const renderComponent = () => {
    switch (selectedMenu) {
      case "dashboard":
        return <Dashboard />;
      case "products":
        return <AllProducts />;
      case "addproduct":
        return <AddProduct />;
      case "sales":
        return <Sales />;
      case "customers":
        return <Customerbase />;
      case "feedbacks":
        return <Feedbacks />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <div className="pt-[8rem] xs:px-0 md:px-0 px-[4em] ">
      <div className="flex md:gap-4 gap-[3em]">
        <div className="basis-[20%] md:basis-[17%]">
          <AdminSidebar
            handleMenuClick={handleMenuClick}
            handleAdminLogout={handleAdminLogout}
          />
        </div>

        <div className="basis-[80%] pt-[2em] flex flex-col gap-[3em]">
          <div className="flex justify-between">
            <div>
              <img src={shopping} alt="" />
              <div>
                <p>Total Sales</p>
                <p className="font-poppins font-bold text-2xl text-stats">
                  N{totalSales}
                </p>
              </div>
            </div>

            <div>
              <img src={shopping} alt="" />
              <div>
                <p>Total Products</p>
                <p className="font-poppins font-bold text-2xl text-stats">
                  {totalProducts}
                </p>
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
                <p className="font-poppins font-bold text-2xl text-stats">
                  {totalUsers}
                </p>
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
