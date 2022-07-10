import React from 'react';
import "./PreviousOrderItems.css"
import PastOrdersPage from "../../pages/PastOrdersPage/PastOrdersPage"


export default function PreviousOrderItems({ orderItem }) {
	return (
    <>
      
      <div className='order-id'>
        Model #: <strong>{orderItem._id}</strong>
      </div>
			<div className="order-item-container">
				Placed on: {orderItem.item.createdAt.split('T')[0]}
				<div className="order-item-name">
					{orderItem.item.title}
				</div>
				<div className="order-item-price">
					Price: ${orderItem.item.price}
        </div>
        <div className='order-item-qty'>
           QTY: {orderItem.qty}
        </div>
				<div>
					<img
						className="order-item-pic"
						src={orderItem.item.image}
						alt="itempic"
					/>
        </div>
			</div>
		</>
	);
}
