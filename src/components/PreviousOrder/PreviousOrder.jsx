import PreviousOrderItems from '../PreviousOrderItems/PreviousOrderItems';
import { createContext } from 'react';
import './PreviousOrder.css';
import '../CartLineItems/CartLineItems.css';

const archived = createContext();

// Display order price, date of transaction (updated),
export default function PreviousOrder({ pastOrder }) {
    const orderItems = pastOrder.lineItems.map((orderItem) => (
        <PreviousOrderItems orderItem={orderItem} key={orderItem._id} />
    ));

    return (
        <>
            <div className="checkout-cart-border">
                {orderItems.length ? (
                    <>
                        <div className="checkout-cart">

                            <div className='invoice'>
                                {/* <div className="order-details"> */}
                                Invoice Details
                                {/* </div> */}

                            </div>
                            <div className="po">
                                Placed on:{' '}
                                {pastOrder.createdAt.split('T')[0]}
                            </div>
                            <span className='invoice-number'>
                                Invoice #:{' '}
                                <strong>{pastOrder._id}</strong>
                            </span>

                            <div className="order-total">
                                Total amount: ${pastOrder.orderTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </div>
                            <div className="order-items">
                                {orderItems}
                            </div>
                        </div>
                    </>
                ) : (
                    <div>No Previous Orders</div>
                )}
            </div>
        </>
    );
}
