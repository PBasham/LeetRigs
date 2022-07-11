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
import AboutUsPage from "../../pages/AboutUsPage/AboutUsPage.jsx"
/*========================================
        import Css
========================================*/
import "../../index.css"
import "./NavBar.css"

export default function NavBar({ user, setUser }) {
    // create useStates

    /*========================================
            functions
    ========================================*/
    const handleNavBtnClick = () => {

    }

    return (

        <div className="nav-bar">
            <Link
                to="/Home"
                element={<ItemPage />}
                onClick={handleNavBtnClick}
                className="nav-btn flex-start"
            >
                Home
            </Link>


            <Link
                to="/pastorders"
                element={<PastOrdersPage />}
                onClick={handleNavBtnClick}
                className="nav-btn flex-start"
            >
                Order History
            </Link>

            <Link
                to="/about"
                element={<AboutUsPage />}
                onClick={handleNavBtnClick}
                className="nav-btn flex-start"
            >
                    About Us
            </Link>


            <span className="number welcome">Welcome Back, {user.name}!</span>

            <div className="flex-end">
                <span className="number">1-337-LeetRigs</span>
                {/* This is the Log Out Button */}
                    <Link
                        to="/checkout"
                        element={<CheckoutPage />}
                        onClick={handleNavBtnClick}
                        className="nav-btn cart"
                    >
                    </Link>

                <UserLogOut user={user} setUser={setUser} />

            </div>
        </div>
    )
}