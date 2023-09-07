import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import {Link} from 'react-router-dom'
import { Close } from '@mui/icons-material';

const ForgotPwd = () => {
  return (
    <>
   <div className="login-bg">
   <div className="login-box ">
        <form action="/verfiyotp">
        <div className="signin">
        <Link to='/logins'><Close  className='closeBtn'/></Link>
            <h2>Forgot Password</h2>
            <div className="form-group">
              <EmailIcon />
              <input type="email" placeholder='Email' required/>
            </div>
            <button className='button2 mt-3' type='submit'>Sent Otp</button>
          </div>
        </form>

        </div> 
   </div>
    
    </>
  )
}

export default ForgotPwd