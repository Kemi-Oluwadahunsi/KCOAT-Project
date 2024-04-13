import { ProductContext } from "../../../hooks/ProductContext";
// import { useHistory } from "react-router-dom";
import { CartContext } from "../../../hooks/CartContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useQuantity } from "../../../hooks/CartContext";

import {
  faMinus,
  faPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../StaticComponents/Button";
import { CiStar } from "react-icons/ci";
import Delivery from "../../assets/group.svg";
import Deliver from "../../assets/3d-rotate.svg";
import Caret from "../../assets/caret.svg";

const SingleProductsPage = () => {

  const { Productid } = useParams();
  const { fetchProductById, loading } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext); 
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await fetchProductById(Productid);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [Productid, fetchProductById]);

  const handleAddToCart = () => {
    if (product) {
      const productData = {
        id: product.Productid,
        productImage: product.ProductImage,
        productName: product.ProductName,
        productPrice: product.ProductPrice,
      };
      addToCart(productData, quantity);
    }
  };

  // const { product, quantity } = productState;

  const incrementQuantity = () => {
    setQuantity(quantity + 1); // Increment quantity by 1
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Decrement quantity by 1, if greater than 1
    }
  };

  // const handleAddToCart = () => {
  //   if (product) {
  //     const productData = {
  //       id: product.ProductId, // Corrected to product.Productid
  //       productImage: product.ProductImage,
  //       productName: product.ProductName,
  //       productPrice: product.ProductPrice,
  //       quantity: pquantity,
  //     };
  //   addToCart(productData);
  //   }
  // };

  if (!product || loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="loader "></div>;
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div
          className=" flex flex-col gap-[10em] pt-[10rem] border-l-8 border-simple1"
          key={product.ProductId}
        >
          <div className=" flex w-full px-[10em] gap-[15em]">
            <div className="basis-[40%]">
              <img
                src={product.ProductImage}
                alt="ProductImage"
                className="w-full object-contain"
              />
            </div>

            <div className=" flex flex-col gap-[1em] basis-[50%]">
              <div className="flex flex-col gap-2">
                <h2 className=" text-categoryborder font-tertiary text-[2.25em] text-center">
                  {product.ProductName}
                </h2>

                <div className="flex gap-4 items-center">
                  <p className="text-tertiary tex-2xl font-tertiary">
                    N{product.ProductPrice}
                  </p>
                  <img
                    src={Caret}
                    alt="caret"
                    className="text-tertiary text-2xl place-self-center"
                  />
                  <div className="flex ">
                    <CiStar className="text-tertiary text-xl" />
                    <CiStar className="text-tertiary text-xl" />
                    <CiStar className="text-tertiary text-xl" />
                    <CiStar className="text-tertiary text-xl" />
                    <CiStar className="text-tertiary text-xl" />
                  </div>
                  <p>(0 review)</p>
                </div>
              </div>
              <hr className="my-[2.5em] text-hr" />

              <p className="font-oxygen text-secondary leading-7">
                {product.ProductDescription}
              </p>

              <div className="mt-10 flex flex-col gap-[5em]">
                <div className="flex justify-between">
                  <div className="flex justify-between w-[10em] items-center border rounded-[3em] border-minus px-3 py-2 text-center font-bold ">
                    {/* <button className="text-minus text-[2em]">-</button> */}
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="text-plus text-lg font-oxygen cursor-pointer"
                      onClick={decrementQuantity}
                    />
                    <div className="font-oxygen text-lg text-color">
                      {quantity}
                    </div>
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="text-plus text-lg font-oxygen cursor-pointer"
                      onClick={incrementQuantity}
                    />
                  </div>

                  <div
                    className=" flex basis-[70%] bg-tertiary items-center justify-center rounded-2xl"
                    onClick={handleAddToCart}
                  >
                    <Button className={`font-medium font-oxygen bg-[none]`}>
                      ADD TO CART
                    </Button>
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      color="white"
                      className=" z-20"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-4">
                      <img src={Delivery} alt="" />
                      <p>Nation wide delivery avaible</p>
                    </div>

                    <div className="flex gap-4">
                      <img src={Deliver} alt="" />
                      <p>Delivers in: 3-7 Working Days Shipping </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-[5em] flex flex-col gap-[1em] bg-feedback">
            <h3 className="text-tertiary font-tertiary text-[2.25em]">
              Description
            </h3>
            <div className="flex flex-col gap-[2em] font-secondary text-secondary">
              <p className="font-oxygen w-[70%] text-[1.1em] leading-7">
                {product.ProductDescription}
              </p>

              <ul className="ml-4">
                <li className=" list-disc">Comfortable bag</li>
                <li className=" list-disc">Luxurious and sophisticated </li>
                <li className=" list-disc">Not a common brand</li>
                <li className=" list-disc">Duarable</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProductsPage;
