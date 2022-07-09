import * as OrderApi from '../../utilities/orders-api';
import { useEffect, useState } from 'react';
import PreviousOrder from '../../components/PreviousOrder/PreviousOrder';

export default function PastOrdersPage() {
	const [previousOrders, setPreviousOrders] = useState([]);

	useEffect(function () {
		(async function getUserOrders() {
			let userOrders = await OrderApi.pastOrders();
      setPreviousOrders(userOrders);
      
		})();
	}, []);

  const pastOrders = previousOrders.map(previousOrder =>
    
    <PreviousOrder
    pastorder={previousOrder}
    key={previousOrder._id}
    // isPaid={cart.isPaid}
    // handleChangeQty={handleChangeQty}
    />
    );

	return (
		<>
			<div>MY PAST ORDERS</div>
      {pastOrders}
		</>
	);
}
