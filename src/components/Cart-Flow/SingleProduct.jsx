// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import SingleProductPage from "./SingleProductPage";

// const SingleProduct = () => {
//   const [product, setProduct] = useState({});

//   const [isLoading, setIsLoading] = useState(true);
//   const { Productid } = useParams();

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await axios.get(
//           `https://kcoat.onrender.com/products/${Productid}`
//         );
//         console.log("Product ID:", Productid);
//         setProduct(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//         setIsLoading(false);
//       }
//     };
//     fetchProductDetails();
//   }, [Productid]);

//   //   if (!product) {
//   //     return <div>Loading...</div>;
//   //   }

//   return (
//     <div>
//       {isLoading ? (
//         <div className="loader pt-[20em]"></div>
//       ) : (
//         <SingleProductPage product={product} />
//       )}
//     </div>
//   );
// };

// export default SingleProduct;

// // import { useEffect } from "react";
// // import { useParams } from "react-router-dom";

// // const SingleProduct = () => {
// //   const { Productid } = useParams();

// //   useEffect(() => {
// //     console.log("Product ID:", Productid);
// //   }, [Productid]);

// //   return <div>{Productid}</div>;
// // };

// // export default SingleProduct;

import SingleProductPage from "./SingleProductPage";

const SingleProduct = ( product ) => {
  return (
    <div>
      {product ? (
        <SingleProductPage product={product} />
      ) : (
        <div className="loader pt-[20em]"></div>
      )}
    </div>
  );
};

export default SingleProduct;
