/*========================================
        import dependencies
========================================*/
import { useState } from 'react';
import { Link } from "react-router-dom";
import * as usersService from '../../utilities/users-service';

/*========================================
        import css
========================================*/
import "./LoginForm.css"

export default function LoginFrom({ setUser, updateShowLogin }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleFormChange = () => {
    updateShowLogin()
  }
    
  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt){
    // This prevents form from being submitted to the server
    evt.preventDefault();
    try{
      const user = await usersService.login(credentials);
      setUser(user);
    } catch{
      setError("Login Failed - Please Try Again")
    }
  }

  return (
    <div className='login-wrapper'>
      <div className="form-container" onSubmit={handleSubmit}>
        <form autoComplete="on">
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p>Not a user? <Link to="/signUp" onClick={handleFormChange}>Sign Up</Link></p>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  )
}