/*========================================
        Import dependencies
========================================*/
import { useState } from "react"
import { Link } from "react-router-dom"

/*========================================
        import Pages
========================================*/
import CheckoutPage from "../../pages/CheckoutPage/CheckoutPage"
import ItemPage from "../../pages/ItemPage/ItemPage"
import UserLogOut from "../UserLogOut/UserLogOut"
/*========================================
        import Css
========================================*/
import "../../index.css"
import "./NavBar.css"

export default function NavBar({ user, setUser }) {
    // create useStates
    const [homeActive, setHomeActive] = useState(true)
    const [orderHistoryActive, setOrderHistoryActive] = useState(false)
    const [checkoutPageActive, setCheckoutPageActive] = useState(false)

    /*========================================
            functions
    ========================================*/
    const homeClicked = () => {
        allInactive()
        setHomeActive(!homeActive)
    }
    const orderHistoryClicked = () => {
        allInactive()
        setOrderHistoryActive(!orderHistoryActive)
    }
    const checkoutPageClicked = () => {
        allInactive()
        setCheckoutPageActive(!checkoutPageActive)
    }

    const allInactive = () => {
        setHomeActive(false)
        setOrderHistoryActive(false)
        setCheckoutPageActive(false)
    }

    return (
        <div className="nav-bar">
            { !homeActive ?
            <Link
                to="/Home"
                element={<ItemPage />}
                onClick={homeClicked}
                className="nav-bar-linkbtn"
                >
                <button className="nav-btn flex-start">
                    Home
                </button>
            </Link>
            :
                <button className="nav-btn flex-start nav-btn-active">
                    Home
                </button>
            }


            <button className="nav-btn flex-start">Order History</button>

            <div className="flex-end">
                {/* This is the Log Out Button */}
                <UserLogOut user={user} setUser={setUser} />

                { !checkoutPageActive ?
                    <Link 
                        to="/checkout" 
                        element={<CheckoutPage />}
                        onClick={checkoutPageClicked}
                        >
                        <button 
                            className="nav-btn cart">
                            Cart
                        </button>
                    </Link>
                    :
                    <button 
                        className="nav-btn cart nav-btn-active">
                        Cart
                    </button>
                }
            </div>
        </div>
    )
}