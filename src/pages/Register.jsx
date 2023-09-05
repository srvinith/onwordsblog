import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
const Register = () => {
    return (
        <>
            <div className="login-box ">
                <div className="signin">
                    <h2>Signin</h2>
                    <div className="form-group">
                        <PersonIcon />
                        <input type="text" placeholder='Name' />
                    </div>
                    <div className="form-group">
                        <EmailIcon />
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className="form-group">
                        <LockIcon />
                        <input type="password" placeholder='Password' />
                    </div>
                    <Link to="/forgot" >Forgot Password</Link> <br />
                    <Link to="/logins" >Login</Link> <br />
                    <button className='btn btn-primary mt-3'>Signin</button>
                </div>

            </div>
        </>
    )
}

export default Register