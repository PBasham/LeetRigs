import CartLineItem from "../CartLineItems/CartLineItems"
import * as OrderApi from '../../utilities/orders-api'

import "..//CartLineItems/CartLineItems.css"

export default function CheckoutArea({ cart, setCart }) {
  if (!cart) return null
  // console.log(cart.lineItems)
  const lineItems = cart.lineItems.map(item =>
    <CartLineItem
      lineItem={item}
      key={item._id}
      // isPaid={order.isPaid}
      // handleChangeQty={handleChangeQty}
    />
  );

    
  return (
    <div>
      <h1>My Cart</h1>
        <div>
          {lineItems.length ?
            <div className="checkout-cart">
              {lineItems}
            </div>
            :
            <div>No items in cart</div>
            }
      </div>
    </div>
  )
}