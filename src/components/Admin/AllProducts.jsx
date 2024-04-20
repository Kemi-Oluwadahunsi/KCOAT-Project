import save from "../../assets/u_save.svg";
import { useContext, useState } from "react";
import { ProductContext } from "../../../hooks/ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import EditProductForm from "./EditProductForm";
import { AdminContext } from "../../../hooks/AdminContextPage";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const AllProducts = () => {
  const { products, loading } = useContext(ProductContext);
  const { editingProduct, handleEdit, handleDelete } = useContext(AdminContext);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 5;

  // Calculate index of the first and last products on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Slice the products array to display only the products for the current page
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Function to handle page navigation
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
                  {currentProducts.map((product) => (
                    <tr
                      key={product.Productid}
                      className="border-b border-categoryborder2"
                    >
                      <td className="border-l border-categoryborder2 flex justify-between items-center px-[2em] font-medium font-oxygen h-[6rem]">
                        <h2>{product.ProductName}</h2>
                        <div>
                          <img
                            src={product.ProductImage}
                            alt="product-image"
                            className="w-[8rem] h-[5rem] object-cover"
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
                          <div
                            className="flex gap-4 bg-tertiary basis-[50%] px-2 rounded-[0.2em] py-1 "
                            onClick={() => handleEdit(product)}
                          >
                            <img src={save} alt="" />
                            <button>Edit</button>
                            {editingProduct &&
                              editingProduct.Productid ===
                                product.Productid && (
                                <EditProductForm product={editingProduct} />
                              )}
                          </div>
                          <div
                            className="flex gap-4 bg-delete px-3 basis-[50%] rounded-[0.2em] py-1"
                            onClick={() => handleDelete(product)}
                          >
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
              ...Array(Math.ceil(products.length / productsPerPage)).keys(),
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
            disabled={indexOfLastProduct >= products.length}
          >
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className=" text-categoryborder text-lg"
            />
          </button>
        </div>
      </div>

      {/* <div className="z-[10000] pt-[20em]">
        <ToastContainer position="center" autoClose={2000} />
      </div> */}
    </>
  );
};

export default AllProducts;

// {
//     "Productid": "046f2333-5543-4592-a936-0757e7be9e3e",
//     "ProductName": "Casual Breathable Canvas",
//     "ProductDescription": "A sneaker",
//     "ProductPrice": "25000.00",
//     "ProductCategory": "men",
//     "ProductImage": "https://anyimage.io/storage/uploads/7b4e8eacf8f63b4ba19f8cf69a4038cf",
//     "ProductSize": 4546,
//     "Quantity": 12,
//     "SubCategory": "shoes",
//     "createdAt": "2024-04-06T18:17:37.000Z",
//     "updatedAt": "2024-04-06T18:17:37.000Z"
// }
