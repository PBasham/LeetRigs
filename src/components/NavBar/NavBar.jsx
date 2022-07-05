import "../../index.css"
import "./NavBar.css"

export default function NavBar(props) {
    return (
        <div className="nav-bar">
            <button className="nav-btn flex-start">Home</button>
            <button className="nav-btn flex-start">Order History</button>
            <button className="nav-btn flex-end cart">Cart</button>
        </div>
    )
}