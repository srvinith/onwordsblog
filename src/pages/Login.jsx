import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <>
            <div className="login-box " id='login'>
                <div className="signin">
                    <h2>Login</h2>
                    <div className="form-group">
                        <EmailIcon />
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className="form-group">
                        <LockIcon />
                        <input type="password" placeholder='Password' />
                    </div>

                    <Link to="/forgot">Forgot Password</Link> <br />
                    <Link to="/register">Register</Link> <br />

                    <button className='btn btn-primary mt-3'>Login</button>
                </div>

            </div>
        </>
    )
}

export default Login