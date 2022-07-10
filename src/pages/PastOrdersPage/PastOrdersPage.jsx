import * as OrderApi from '../../utilities/orders-api';
import { useEffect, useState } from 'react';
import PreviousOrder from '../../components/PreviousOrder/PreviousOrder';
import PreviousOrderItems from '../../components/PreviousOrderItems/PreviousOrderItems';


export default function PastOrdersPage() {
	const [previousOrders, setPreviousOrders] = useState([]);

	useEffect(function () {
		(async function getUserOrders() {
			let userOrders = await OrderApi.pastOrders();
			setPreviousOrders(userOrders);
		})();
	}, []);

	const pastOrders = previousOrders.map((previousOrder) => (
		<PreviousOrder pastOrder={previousOrder} key={previousOrder._id} />
		
	));

	return (
		<div>
			PAST ORDERS
			{pastOrders}
		</div>
	);
}
