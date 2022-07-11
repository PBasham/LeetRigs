/*========================================
        Import Dependencies
========================================*/
import React, { useState } from 'react';
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


function App() {
    const [user, setUser] = useState(getUser())
    const [showItemDetail, setShowItemDetail] = useState(false)
    const [itemDetail, setItemDetail] = useState()

    /*========================================
    functions
    ========================================*/
    // function to add tiems to cart
    const addItemToCartClick = (itemId) => {
        OrderApi.addToCart(itemId)
    }
    //===*** END FUNCTIONS***===//


    return (
        <div className="App">
            {user ? <NavBar user={user} setUser={setUser} /> : null}
            {showItemDetail ? <ItemDetail setShowItemDetail={setShowItemDetail} itemDetail={itemDetail} addItemToCartClick={addItemToCartClick} /> : null}
            {user ?
                <>
                    <Routes>
                        <Route path="/*" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<ItemPage setShowItemDetail={setShowItemDetail} setItemDetail={setItemDetail} addItemToCartClick={addItemToCartClick} />} />
                        <Route path="/pastorders" element={<PastOrdersPage user={user} setUser={setUser} />} />
                        <Route path="/about" element={<AboutUsPage user={user} setUser={setUser} />} />
                        <Route path="/checkout" element={<CheckoutPage user={user} setUser={setUser} />} />
                    </Routes>
                </>
                :
                <AuthPage setUser={setUser} />}
        </div>
    );
}

export default App;