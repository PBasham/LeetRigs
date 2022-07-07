export default function CheckoutArea({ cart, setCart }) {
  return (
    <div className="checkout">
      <h1>My Cart</h1>
      <p>{ cart._id }</p>
      <p>{ cart.createdAt }</p>
    </div>
  )
}