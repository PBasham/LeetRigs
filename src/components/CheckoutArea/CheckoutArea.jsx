export default function CheckoutArea({ cart, setCart, handleAddToOrder, user }) {

  <h1>Checkout Area</h1>

  return (
    <div className="checkout">
      <h1>My Cart</h1>
      <p>{ cart._id }</p>
      <p>{ cart.createdAt }</p>
    </div>
  )
}