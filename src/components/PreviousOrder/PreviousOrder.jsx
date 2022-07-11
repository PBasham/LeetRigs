import PreviousOrderItems from '../PreviousOrderItems/PreviousOrderItems';
import { createContext } from 'react';
import "./PreviousOrder.css"

const archived = createContext();


// Display order price, date of transaction (updated), 
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
              <div className="checkout-cart">
                <div className='invoice-id'>
                  Invoice #: {pastOrder._id}
                </div>
                <div className='order-total'>
                  Total amount: ${pastOrder.orderTotal}
                </div>
                <div className='placed-on'>
                  Placed on: {pastOrder.createdAt.split('T')[0]}
                </div>
                <div className='order-items'>
                {orderItems}
                </div>
              </div>
              </>
          ) : (
            <div>No Previous Orders</div>
            )}
        </div>
        </div>
        
            </>
	);
}
