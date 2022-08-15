import { useState } from 'react'
import { Link } from "react-router-dom"
import * as usersService from '../../utilities/users-service';


export default function SignUpForm({ setUser, updateShowLogin }) {
    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: '',
        confirm:''
    });
    const [error, setError] = useState('');

    function handleChange(evt) {

        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');

    }

    const handleFormChange = () => {
        updateShowLogin()
    }
    async function handleSubmit(evt) {
        // This prevents form from being submitted to the server
        evt.preventDefault();
        console.log(credentials)
        try {
            const user = await usersService.signUp(credentials);
            setUser(user);
        } catch {
            setError("SignUp Failed - Please Try Again")
        }
    }

    return (
        <div className='login-wrapper'>
            <div className="form-container" >
                <form autoComplete="on" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={credentials.name} onChange={handleChange} required />
                    <label>Email</label>
                    <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={credentials.confirm} onChange={handleChange} required />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <p>Already a user? <Link to="/Login" onClick={handleFormChange}>Log In</Link></p>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    )
}