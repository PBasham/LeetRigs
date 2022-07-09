import { useState, useEffect } from 'react'
import CheckoutArea from "../../components/CheckoutArea/CheckoutArea";
import * as OrderApi from "../../utilities/orders-api.js"

import "./CheckoutPage.css"

export default function CheckoutPage({ user, setUser }) {

    const [cart, setCart] = useState(null)
    
    useEffect(function() {
        (async function getUserCart(){
            const userCart = await OrderApi.findCart()
            setCart(userCart)
        })()
    }, [])


return (
    <div className="checkout-page-div">
        <h1>Review order and Checkout</h1>
        <div className="checkout-order">
            <CheckoutArea
                cart={cart}
                setCart={setCart}
                />
        </div>

    </div>
)
}