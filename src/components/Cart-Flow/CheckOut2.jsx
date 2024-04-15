
const CheckOut2 = () => {
  return (
    <div>
          {/* Use action="/create-checkout-session.php" if your server is PHP based. */}
    <form action="/create-checkout-session" method="POST">
      <button type="submit">Checkout</button>
    </form>
    </div>
  )
}

export default CheckOut2