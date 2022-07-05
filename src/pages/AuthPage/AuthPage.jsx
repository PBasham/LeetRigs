import { useState } from 'react';
import './AuthPage.css'
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpFrom from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
    <div>
      <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG In'}</h3>
    </div>
    {showLogin ? <LoginForm setUser={setUser}/> : <SignUpFrom setUser={setUser}/>}
    </main>
  )
}