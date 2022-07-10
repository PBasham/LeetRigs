import PreviousOrderItems from '../PreviousOrderItems/PreviousOrderItems';
import { createContext } from 'react';
import "./PreviousOrder.css"

const archived = createContext();

export default function PreviousOrder({ pastOrder }) {
	const orderItems = pastOrder.lineItems.map((orderItem) => (
		<PreviousOrderItems orderItem={orderItem} key={orderItem._id} />
	));

  return (
    <>
    <div>
      {/* <PreviousOrder pastOrder={pastOrder} /> */}
        <div className="cart-area">
          <div className='order-details'>
            Invoice Details
            </div>
				{orderItems.length ? (
          // <div>Order Details</div>
            <>
          <div className="checkout-cart">{orderItems}</div>
              <div>Order Total: MATH GOES HERE(its late...)</div>
              </>
          ) : (
            <div>No Previous Orders</div>
            )}
        </div>
        </div>
        
            </>
	);
}
