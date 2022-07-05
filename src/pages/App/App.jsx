/*========================================
        Import Dependencies
========================================*/
import React from 'react';
import {  Routes, Route, Navigation } from "react-router-dom"
import NavBar from '../../components/NavBar/NavBar';
/*========================================
        Import Pages
========================================*/
import ItemPage from '../ItemPage/ItemPage';



/*========================================
        import css
========================================*/
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemPage />
    </div>
  );
}

export default App;
