import { useState } from 'react';
import './AuthPage.css'
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  const updateShowLogin = () => {
    setShowLogin(!showLogin)
  }

  return (
    <main className="AuthPage">
    <h1> {showLogin ? 'Log In' : 'Sign up'} </h1>

    {showLogin ? 
    <LoginForm updateShowLogin={updateShowLogin} setUser={setUser}/>
    :
    <SignUpForm updateShowLogin={updateShowLogin} setUser={setUser}/>
    }
    </main>
  )
}