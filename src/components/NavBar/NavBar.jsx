import "../../index.css"
import "./NavBar.css"

export default function NavBar(props) {
    return (
        <div className="nav-bar">
            <button className="nav-btn">Home</button>
            <button className="nav-btn">Order History</button>
            <button className="nav-btn cart">Cart</button>
        </div>
    )
}