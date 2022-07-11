import React from 'react';
import "./PreviousOrderItems.css"
import PastOrdersPage from "../../pages/PastOrdersPage/PastOrdersPage"
import "../CartLineItems/CartLineItems.css"

//
export default function PreviousOrderItems({ orderItem }) {
    return (
            <div className="checkout-cart-item">
                <div className="cart-title-div">
                    {orderItem.item.title}
                </div>
                <div className="item-price-amount">
                    Price: ${orderItem.item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
                <div className='order-item-quantity'>
                    QTY: {orderItem.qty}
                </div>

                <img
                    className="cart-item-img"
                    src={orderItem.item.image}
                    alt="itempic"
                />

            </div>
    );
}

