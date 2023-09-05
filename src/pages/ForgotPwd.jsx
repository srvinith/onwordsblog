import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import {Link} from 'react-router-dom'

const ForgotPwd = () => {
  return (
    <>
    <div className="login-box ">
          <div className="signin">
            <h2>Forgot Password</h2>
            <div className="form-group">
              <EmailIcon />
              <input type="email" placeholder='Email' />
            </div>
            <div className="form-group">
              <LockIcon />
              <input type="password" placeholder='Password' />
            </div>
            <Link to="/register">Register</Link> <br />
            <Link to="/logins">Login</Link> <br />
            <button className='btn btn-primary mt-3'>Submit</button>
          </div>

        </div> 
    
    </>
  )
}

export default ForgotPwd