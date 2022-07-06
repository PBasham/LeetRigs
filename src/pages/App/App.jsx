/*========================================
        Import Dependencies
========================================*/
import React, { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
import { getUser } from '../../utilities/users-service';
/*========================================
Import Pages
========================================*/
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from "../../pages/AuthPage/AuthPage.jsx"
import ItemPage from "../../pages/ItemPage/ItemPage.jsx"
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

/*========================================
        import css
========================================*/
import './App.css';


function App() {

const [user, setUser] = useState(getUser())

const [showItemDetail, setShowItemDetail] = useState(false)

return (
<div className="App">
        { user ? <NavBar /> : null }
        {showItemDetail ? <ItemDetail /> : null}
        {user ?
                <>
                <Routes>
                        <Route path="/items" element={<ItemPage setShowItemDetail={setShowItemDetail}/>} />
                        <Route path="/*" element={<Navigate to="/items" />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>
                </>
        :
        <AuthPage setUser={setUser}/>}
</div>
);
}

export default App;