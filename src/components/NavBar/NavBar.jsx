/*========================================
        Import dependencies
========================================*/
import { Link } from "react-router-dom"

/*========================================
        import Pages
========================================*/
import CheckoutPage from "../../pages/CheckoutPage/CheckoutPage"
import ItemPage from "../../pages/ItemPage/ItemPage"
/*========================================
        import Css
========================================*/
import "../../index.css"
import "./NavBar.css"

export default function NavBar(props) {
    return (
        <div className="nav-bar">
            <Link  to="/Home" element={<ItemPage />}><button className="nav-btn flex-start">Home</button></Link>
            <button className="nav-btn flex-start">Order History</button>

            <div className="flex-end">
                <button className="nav-btn">LogOut</button>
                <Link  to="/checkout" element={<CheckoutPage />}><button className="nav-btn cart">Cart</button></Link>
            </div>
        </div>
    )
}