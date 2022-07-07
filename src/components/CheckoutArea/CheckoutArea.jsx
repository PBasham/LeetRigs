import CartLineItem from "../CartLineItems/CartLineItems"
import * as OrderApi from '../../utilities/orders-api'


export default function CheckoutArea({ cart, setCart }) {
  if (!cart) return null;
  
  console.log(cart.lineItems)
  // const lineItems = cart.lineItems.map(item =>
    // <CartLineItem
    //   lineItem={item}
    //   // isPaid={order.isPaid}
    //   // handleChangeQty={handleChangeQty}
    //   key={item._id}
    // />
  // );

    
  return (
    <div>
      <h1>My Cart</h1>
      { cart.lineItems[0].item.title }
      {/* <>
        <div>
          {lineItems.length ?
            <>
              {lineItems}
            </>
            :
            <div>No items in cart</div>
            }
      </div>
     </> */}
    </div>
  )
}