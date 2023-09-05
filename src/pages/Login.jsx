import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom'
import { Close } from '@mui/icons-material';


const Login = () => {
    return (
        <>
           <div className="login-bg">
           <div className="login-box " id='login'>
                <form action="/profile">
                <div className="signin">
                <Link to='/'><Close  className='closeBtn'/></Link>
                    <h2>Login</h2>
                    <div className="form-group">
                        <EmailIcon />
                        <input type="email" placeholder='Email'required />
                    </div>
                    <div className="form-group">
                        <LockIcon />
                        <input type="password" placeholder='Password'  required/>
                    </div>

                    <Link to="/forgot">Forgot Password</Link> <br />
                    <Link to="/register">Register</Link> <br />

                    <button className='button2 mt-3' type='submit'>Login</button>
                </div>
                </form>

            </div>
           </div>
        </>
    )
}

export default Login