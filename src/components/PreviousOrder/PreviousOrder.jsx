import PreviousOrderItems from '../PreviousOrderItems/PreviousOrderItems';
import { createContext } from 'react';

const archived = createContext();

export default function PreviousOrder({ pastOrder }) {
	const orderItems = pastOrder.lineItems.map((orderItem) => (
		<PreviousOrderItems orderItem={orderItem} key={orderItem._id} />
	));

	return (
    <div>
      {/* <PreviousOrder pastOrder={pastOrder} /> */}
			<div className="cart-area">
				{orderItems.length ? (
					<div className="checkout-cart">{orderItems}</div>
				) : (
					<div>No Previous Orders</div>
				)}
			</div>
		</div>
	);
}
