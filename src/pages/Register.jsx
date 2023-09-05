import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import { Close } from '@mui/icons-material';
const Register = () => {
    return (
        <>
           <div className="login-bg">
           <div className="login-box ">
              <form action="/logins">
              <div className="signin">
              <Link to='/logins'><Close  className='closeBtn'/></Link>
                    <h2>Signin</h2>
                    <div className="form-group">
                        <PersonIcon />
                        <input type="text" placeholder='Name'  required/>
                    </div>
                    <div className="form-group">
                        <EmailIcon />
                        <input type="email" placeholder='Email' required/>
                    </div>
                    <div className="form-group">
                        <LockIcon />
                        <input type="password" placeholder='Password' required/>
                    </div>
                    <Link to="/forgot" >Forgot Password</Link> <br />
                    <Link to="/logins" >Login</Link> <br />
                    <button className='button2 mt-3' type='submit'>Signin</button>
                </div>

              </form>
            </div>
           </div>
        </>
    )
}

export default Register