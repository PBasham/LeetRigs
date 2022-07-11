/*========================================
        import dependencies
========================================*/
import CartLineItem from "../CartLineItems/CartLineItems"
import * as OrderApi from '../../utilities/orders-api'
import { useNavigate } from "react-router-dom";
/*========================================
import css
========================================*/
import "..//CartLineItems/CartLineItems.css"

export default function CheckoutArea({ cart, setCart }) {

  const navigate = useNavigate()

  if (!cart) return null
  /*========================================
          Functions
  ========================================*/
  const handleChangeQty = async (itemId, newQty) => {
    const updatedCart = await OrderApi.updateCart(itemId, newQty)
    setCart(updatedCart)
  }

  const handleCheckout = async () => {
    await OrderApi.checkoutCart()
    navigate("/orders")
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
      <div className="cart-area">
        <div className="checkout-cart-border">
          <div className="checkout-cart">
            {lineItems.length ?
              <>
                {lineItems}
                <div className="cart-total">
                  Order Total: ${cart.orderTotal.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  <button onClick={handleCheckout} className="checkout-btn">Checkout</button>
                </div>
              </>
              :
              <p className="">No items in cart</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}