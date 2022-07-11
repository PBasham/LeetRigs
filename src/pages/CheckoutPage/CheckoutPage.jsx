import { useState, useEffect } from 'react'
import CheckoutArea from "../../components/CheckoutArea/CheckoutArea";
import * as OrderApi from "../../utilities/orders-api.js"

import "./CheckoutPage.css"

export default function CheckoutPage({ user, setUser, toggleActiveNavBtn}) {

    const [cart, setCart] = useState(null)
    
    useEffect(function() {
        (async function getUserCart(){
            const userCart = await OrderApi.findCart()
            setCart(userCart)
        })()
        toggleActiveNavBtn(3)
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
    <footer className='footer-return'>Return Policy: Free 30 day returns if you don't love your new rig!</footer>
    </div>
)
}