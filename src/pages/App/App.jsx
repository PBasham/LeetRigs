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

/*========================================
        import css
========================================*/
import './App.css';


function App() {
<<<<<<< HEAD
  
  const [user, setUser] = useState(getUser())
  return (
          <div className="App">
                  {user ? 
                  <>        
                  <Routes>
                                  <Route
                                          path="/items"
                                          element={<ItemPage
                                          user={user}
                                          setUser={setUser} />} />
                                  </Routes>
                                  
                          </>
                          :
                          <AuthPage setUser={setUser} />}
    </div>
  );
=======
const [user, setUser] = useState(getUser())

return (
<div className="App">
        <NavBar />
        {user ?
                <>
                <Routes>
                <Route path="/items" element={<ItemPage />} />
                <Route path="/*" element={<Navigate to="/items" />} />
                </Routes>
                </>
        :
        <AuthPage setUser={setUser}/>}
</div>
);
>>>>>>> main
}

export default App;
