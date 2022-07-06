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

/*========================================
        import css
========================================*/
import './App.css';


function App() {
const [user, setUser] = useState(getUser())

return (
<div className="App">
        <NavBar />
        {user ?
                <>
                <Routes>
                        <Route path="/items" element={<ItemPage />} />
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