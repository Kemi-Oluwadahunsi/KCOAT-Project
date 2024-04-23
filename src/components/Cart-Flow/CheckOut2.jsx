
import { useState } from "react";
import Button from "../StaticComponents/Button";

const CheckOut2 = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [checkoutUrl, setCheckoutUrl] = useState(null);
  const [checkout, setCheckOut] = useState(false);

   const handleCheckout = async () => {
     try {
       setLoading(true);
       setCheckOut(true);

       // Retrieve cartItems from local storage
       const cartItems = JSON.parse(localStorage.getItem("cartItems"));
       if (!cartItems || cartItems.length === 0) {
         throw new Error("Cart is empty");
       }
       const response = await fetch(
         "https://kcoat.onrender.com/create-checkout-session",
         {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
             // Provide customerId, email, and cartItems data
             customerId: "customerId", 
             cartItems: cartItems,
           }),
         }
       );
       const data = await response.json();
       setCheckoutUrl(data.url);

       localStorage.removeItem("cartItems");

       setLoading(false);
     } catch (error) {
       console.error("Error initiating checkout:", error);
       setError(error.message);
       setLoading(false);
     }
   };
  let display;
  if (!checkout) {
    display = "Checkout";
  } else if (checkout) {
    if (loading) {
      display = <p className="loader"></p>;
    } else {
      display = <a href={checkoutUrl}>Proceed to Checkout</a>;
    }
  } else {
    display = <>Error: {error}</>;
  }

  return (
    <div>
      <div
        className="flex justify-center xs:text-[0.9em] items-center font-secondary font-medium hover:scale-105 bg-tertiary rounded-xl"
        onClick={handleCheckout}
        disabled={loading}
      >
        <Button>{display}</Button>
      </div>

    </div>
  );
};

export default CheckOut2;
