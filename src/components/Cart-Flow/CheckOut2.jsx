// // import axios from "axios"

import { useState } from "react";

// // import { url} from "..slices/api"
// const CheckOut2 = ({cartItems}) => {
    

//     const handleCheckout = () => {console.log(cartItems)
//     //   const {data} = await axios.post("https://kcoat.onrender.com/create-checkout-session",{})
//     //   console.log(data)
//     //   window.location.href = data.url;
//     }

//   return (
//     <div>
//           {/* Use action="/create-checkout-session.php" if your server is PHP based. */}
//     <form onClick={() => handleCheckout()}>
//       <button type="submit">Checkout</button>
//     </form>
//     </div>
//   )
// }

// export default CheckOut2

// import {  useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe("YOUR_PUBLIC_STRIPE_KEY");

// const CheckoutPage = ({ cartItems }) => {
//   const [error, setError] = useState(null);

//   const handleCheckout = async () => {
//     const stripe = await stripePromise;
//     const response = await fetch(
//       "https://your-backend-url.com/create-payment-intent",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ cartItems }),
//       }
//     );

//     const data = await response.json();

//     const result = await stripe.redirectToCheckout({
//       sessionId: data.sessionId,
//     });

//     if (result.error) {
//       setError(result.error.message);
//     }
//   };

//   return (
//     <div>
//       {error && <div>{error}</div>}
//       {/* Display cart items here */}
//       <button onClick={handleCheckout}>Checkout</button>
//     </div>
//   );
// };

// export default CheckoutPage;



const CheckOut2 = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [checkoutUrl, setCheckoutUrl] = useState(null);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      // Retrieve cartItems from local storage
      const cartItems = JSON.parse(localStorage.getItem("cartItems"));
      if (!cartItems || cartItems.length === 0) {
        throw new Error("Cart is empty");
      }
      const response = await fetch("https://kcoat.onrender.com/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Provide customerId, email, and cartItems data
          customerId: "CUSTOMER_ID", // You can replace with actual customerId if needed
          cartItems: cartItems,
        }),
      });
      const data = await response.json();
      setCheckoutUrl(data.url);
      setLoading(false);
    } catch (error) {
      console.error("Error initiating checkout:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleCheckout} disabled={loading}>
        Checkout
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {checkoutUrl && (
        <p>
          <a href={checkoutUrl}>Proceed to Checkout</a>
        </p>
      )}
    </div>
  );
};

export default CheckOut2;