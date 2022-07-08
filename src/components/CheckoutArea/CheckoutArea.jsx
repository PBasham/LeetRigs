import CartLineItem from "../CartLineItems/CartLineItems"
import * as OrderApi from '../../utilities/orders-api'

import "..//CartLineItems/CartLineItems.css"
import { async } from "q";

export default function CheckoutArea({ cart, setCart }) {
  if (!cart) return null
  /*========================================
          Functions
  ========================================*/
  const handleChangeQty = async (itemId, newQty) => {
    const updatedCart = await OrderApi.updateCart(itemId, newQty)
      setCart(updatedCart)
  }
  //==== end functions ====//

  // this function will updated the quantity of items in the cart when a + or - increment button is selected.
  // console.log(cart.lineItems)

  const lineItems = cart.lineItems.map(item =>
    <CartLineItem
    lineItem={item}
    key={item._id}
    isPaid={cart.isPaid}
    handleChangeQty={handleChangeQty}
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