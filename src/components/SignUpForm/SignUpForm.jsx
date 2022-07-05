import {useState} from 'react'
import { signUp } from '../../utilities/users-service'
import * as usersService from '../../utilities/users-service';


export default function SignUpFrom({ setUser }) {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt){
    // This prevents form from being submitted to the server
    evt.preventDefault();
    try{
      const user = await usersService.signUp(credentials);
      setUser(user);
    } catch{
      setError("SignUp Failed - Please Try Again")
    }
  }

  return (
    <div>
      <div className="form-container" >
        <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Name</label>
          <input type="text" name="name" value={credentials.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <label>Confirm</label>
            <input type="confirm" name="confirm" value={credentials.confirm} required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  )
}