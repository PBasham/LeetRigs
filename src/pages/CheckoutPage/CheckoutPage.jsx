import { useState, useEffect } from 'react'
import CheckoutArea from "../../components/CheckoutArea/CheckoutArea";
import * as OrderApi from "../../utilities/orders-api.js"


export default function CheckoutPage() {

    const [cart, setCart] = useState([])
    
    useEffect(function() {
        (async function getUserCart(){
            const userCart = await OrderApi.findCart()
            setCart(userCart)
        })()
    }, [])


return (
    <div className="checkout-page-div">
        <h1>CheckOut</h1>
        <div className="checkout-order">
            <CheckoutArea cart={cart} setCart={setCart}/>
        </div>

    </div>
)
}