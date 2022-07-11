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
import PastOrdersPage from "../../pages/PastOrdersPage/PastOrdersPage"
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
    const [AboutUsActive, setAboutUsActive] = useState(false)

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
    const AboutUsClicked = () => {
        allInactive()
        setAboutUsActive(!AboutUsActive)
    }

    const allInactive = () => {
        setHomeActive(false)
        setOrderHistoryActive(false)
        setCheckoutPageActive(false)
        setAboutUsActive(false)
    }
    
    return (
        
        <div className="nav-bar">
            {!homeActive ?
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

            {!orderHistoryActive ?
                <Link 
                    to="/pastorders" 
                    element={<PastOrdersPage />}
                    onClick={orderHistoryClicked}
                    >
                <button className="nav-btn flex-start">
                    Order History
                </button>
                 </Link> 
                :
                <button className="nav-btn flex-start nav-btn-active">
                    Order History
                </button>
            }

                {/* {!About ? */}
                <Link 
                    to="/about" 
                    // element={<AboutUsPage />}
                    onClick={AboutUsClicked}
                    >
                <button className="nav-btn flex-start">
                    Order History
                </button>
                 </Link> 
                :
                <button className="nav-btn flex-start nav-btn-active">
                    Order History
                </button>
            
            {user}
            <span className="number welcome">Welcome Back, Me!</span>
            {/* {console.log(req.user)} */}
            {/* <button className="nav-btn flex-start">Order History</button> */}
                
            <div className="flex-end">
                <span className="number">1-337-LeetRigs</span>
                {/* This is the Log Out Button */}
                {!checkoutPageActive ?
                    <Link
                        to="/checkout"
                        element={<CheckoutPage />}
                        onClick={checkoutPageClicked}
                    >
                        <button
                            className="nav-btn cart">
                        </button>
                    </Link>
                    :
                    <button
                        className="nav-btn cart nav-btn-active">
                    </button>
                }
                
                <UserLogOut user={user} setUser={setUser} />

            </div>
        </div>
    )
}