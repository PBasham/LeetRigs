/*========================================
        Import dependencies
========================================*/
import { useState } from "react"
import { Link } from "react-router-dom"
/*========================================
        import pages
========================================*/
import CheckoutPage from "../../pages/CheckoutPage/CheckoutPage"
import UserLogOut from "../UserLogOut/UserLogOut.jsx"
import UserProfilePage from "../../pages/UserProfilePage/UserProfilePage"
/*========================================
        import Css
========================================*/
import "../../index.css"
import "./NavBar.css"

export default function NavBar({ user, setUser, activeNavLink, toggleActiveNavBtn }) {
    // create useStates

    /*========================================
            functions
    ========================================*/
    const toggleActiveNavBtnStyle = (index) => {

        if (activeNavLink.buttons[index] === activeNavLink.activeButton) {
            return activeNavLink.buttons[index].name === "Cart" || activeNavLink.buttons[index].name === "Profile" ?

                activeNavLink.buttons[index].name === "Cart" ? 
                        "nav-btn cart nav-btn-active" 
                    : 
                        "nav-btn profile-link nav-btn-active" 
                : 
                    "nav-btn nav-btn-active"
            // return "nav-btn nav-btn-active"
        } else {

            return activeNavLink.buttons[index].name === "Cart" || activeNavLink.buttons[index].name === "Profile" ?

                activeNavLink.buttons[index].name === "Cart" ? 
                        "nav-btn cart" 
                    : 
                        "nav-btn profile-link" 
                : 
                    "nav-btn"
        }
    }

    /*=== FUNCTIONS END ===*/
    return (
        <div className="nav-bar">
            {activeNavLink.buttons.map((navButton, index) => (
                navButton.name === "Cart"  || navButton.name === "Profile" ? null :
                    <Link
                        key={index}
                        className={toggleActiveNavBtnStyle(index)}
                        to={navButton.to}
                        element={navButton.element}
                        onClick={() => {
                            toggleActiveNavBtn(index)
                        }}
                    >
                        {navButton.name}
                    </Link>

            ))}


            <span className="welcome">Welcome Back, {user.name}!</span>

            <div className="flex-end">
                <span className="number">1-337-LeetRigs</span>
                <Link
                    to="/checkout"
                    element={<CheckoutPage />}
                    className={toggleActiveNavBtnStyle(3)}
                    onClick={() => {
                        toggleActiveNavBtn(3)
                    }}
                >
                </Link>
                <Link
                    to="/profile"
                    element={<UserProfilePage />}
                    className={toggleActiveNavBtnStyle(4)}
                    onClick={() => {
                        toggleActiveNavBtn(4)
                    }}
                >
                </Link>

                {/* This is the Log Out Button */}
                <UserLogOut user={user} setUser={setUser} />

            </div>
        </div>
    )
}