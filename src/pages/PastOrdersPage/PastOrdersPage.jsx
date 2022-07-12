import * as OrderApi from '../../utilities/orders-api';
import { useEffect, useState } from 'react';
import PreviousOrder from '../../components/PreviousOrder/PreviousOrder';
import PreviousOrderItems from '../../components/PreviousOrderItems/PreviousOrderItems';
import './PastOrdersPage.css';
import '../../components/CartLineItems/CartLineItems.css';

export default function PastOrdersPage({ toggleActiveNavBtn }) {
	const [previousOrders, setPreviousOrders] = useState([]);

	useEffect(function () {
		(async function getUserOrders() {
			let userOrders = await OrderApi.pastOrders();
			setPreviousOrders(userOrders);
		})();
		toggleActiveNavBtn(1);
	}, []);

	const pastOrders = previousOrders.map((previousOrder) => (
		<PreviousOrder pastOrder={previousOrder} key={previousOrder._id} />
	));

	return (
		<div className="past-orders">
			<h1>Previous Orders</h1>
			<div className="cart-area">
				<div className="checkout-cart-border">
					<div className="checkout-cart">
						{pastOrders.length > 0 ? (
							pastOrders
						) : (
							<p className="cart-total">
								No orders on record
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
