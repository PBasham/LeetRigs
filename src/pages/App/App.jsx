/*========================================
        Import Dependencies
========================================*/
import React, { useState } from 'react';
import {  Routes, Route, Navigation } from "react-router-dom"
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
/*========================================
        Import Pages
========================================*/
import AuthPage from "../../pages/AuthPage/AuthPage.jsx"
import ItemPage from "../../pages/ItemPage/ItemPage.jsx"

/*========================================
        import css
========================================*/
import './App.css';

const [user, setUser] = useState(getUser())

function App() {
  return (
    <div className="App">
      <NavBar />
       {user ? <ItemPage /> : <AuthPage />}
    </div>
  );
}

export default App;
