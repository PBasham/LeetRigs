import * as OrderApi from '../../utilities/orders-api';
import { useEffect, useState } from 'react';
import PreviousOrder from '../../components/PreviousOrder/PreviousOrder';
import PreviousOrderItems from '../../components/PreviousOrderItems/PreviousOrderItems';
import './PastOrdersPage.css'


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
		<div className='past-orders'>
			<h1>Previous Orders</h1>
			{pastOrders}
		</div>
	);
}
