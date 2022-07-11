/*========================================
        Import Dependencies
========================================*/
import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
import { getUser } from '../../utilities/users-service.js';
import * as OrderApi from "../../utilities/orders-api.js"

/*========================================
        Import Pages
========================================*/
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from "../../pages/AuthPage/AuthPage.jsx"
import ItemPage from "../../pages/ItemPage/ItemPage.jsx"
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import PastOrdersPage from '../PastOrdersPage/PastOrdersPage';
import AboutUsPage from '../AboutUsPage/AboutUsPage.jsx';

/*========================================
        import css
========================================*/
import './App.css';
import { func } from 'prop-types';


function App() {
    const [user, setUser] = useState(getUser())
    const [showItemDetail, setShowItemDetail] = useState(false)
    const [itemDetail, setItemDetail] = useState()
    const [activeNavLink, setActiveNavLink] = useState({
        activeButton: 0,
        buttons: [
            { id: 0, name: "Home", to: "/home", element: <ItemPage /> },
            { id: 1, name: "Order History", to: "/pastOrders", element: <PastOrdersPage /> },
            { id: 2, name: "About Us", to: "about", element: <AboutUsPage /> },
            { id: 3, name: "Cart", to: "/checkout", element: <CheckoutPage /> }
        ]
    })

    /*========================================
    functions
    ========================================*/
    
    const toggleActiveNavBtn = (index) => {
        setActiveNavLink({ ...activeNavLink, activeButton: activeNavLink.buttons[index] })
    }
    
    // function to add tiems to cart
const addItemToCartClick = (itemId) => {
    OrderApi.addToCart(itemId)
}

//===*** END FUNCTIONS***===//


return (
    <div className="App">
        {user ? <NavBar user={user} setUser={setUser} activeNavLink={activeNavLink} toggleActiveNavBtn={toggleActiveNavBtn} /> : null}
        {showItemDetail ? <ItemDetail setShowItemDetail={setShowItemDetail} itemDetail={itemDetail} addItemToCartClick={addItemToCartClick} /> : null}
        {user ?
            <>
                <Routes>
                    <Route path="/*" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<ItemPage setShowItemDetail={setShowItemDetail} setItemDetail={setItemDetail} addItemToCartClick={addItemToCartClick} toggleActiveNavBtn={toggleActiveNavBtn}/>} />
                    <Route path="/pastorders" element={<PastOrdersPage user={user} setUser={setUser} toggleActiveNavBtn={toggleActiveNavBtn}/>} />
                    <Route path="/about" element={<AboutUsPage user={user} setUser={setUser} toggleActiveNavBtn={toggleActiveNavBtn}/>} />
                    <Route path="/checkout" element={<CheckoutPage user={user} setUser={setUser} toggleActiveNavBtn={toggleActiveNavBtn}/>} />
                </Routes>
            </>
            :
            <AuthPage setUser={setUser} />}
    </div>
);
}

export default App;