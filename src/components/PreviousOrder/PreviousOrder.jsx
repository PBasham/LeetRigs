import PreviousOrderItems from "../PreviousOrderItems/PreviousOrderItems";

export default function PreviousOrder({ pastorder }) {

  const orderItems = pastorder.lineItems.map(orderItem =>
    <PreviousOrderItems
    orderItem={orderItem}
    key={orderItem._id}
    // isPaid={cart.isPaid}
    // handleChangeQty={handleChangeQty}
    />
    );

  return (
    <div>
        <div className="cart-area">
          {orderItems.length ?
            <div className="checkout-cart">
              {orderItems}
              
            </div>
            :
            <div>No Previous Orders</div>
            }
      </div>
    </div>
  )
}