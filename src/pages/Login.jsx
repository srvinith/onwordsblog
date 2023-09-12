import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom'
import { Close} from '@mui/icons-material';
import axios from 'axios'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Cookies from 'js-cookie';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.1.8:8000/verify_login', {
        email,
        password,
      });

      if (response.status === 200) {
        const { user_id, user_email } = response.data;
       
        setMessage(`Login successful. User ID: ${user_id}, Email: ${user_email}`);

        Cookies.set('user_id', user_id);
        Cookies.set('user_email', user_email);
       
        window.location.href = '/';
      }
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.detail;
        if (errorMessage === 'User not found. Please register first.') {
          setMessage('Email not found. Please register first.');
        } else if (errorMessage === 'Invalid password') {
          setMessage('Invalid password. Please try again.');
        } else {
          setMessage('User not found. Please register first.');
        }
      } else {
        setMessage('An error occurred while logging in.');
      }
    }
  };

  return (
    <>
      <div className="login-bg">
        <div className="login-box" id='login'>
          <div className="signin">
            <Link to='/'><Close className='closeBtn' /></Link>
            <p>{message}</p>
            <h2>Login</h2>
            <div className="form-group">
              <EmailIcon />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <LockIcon />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder='Password'
                onChange={handlePasswordChange}
              />
              <button className='eyebtn' onClick={togglePasswordVisibility}>
                {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
              </button>
            </div>
            <Link to="/forgot">Forgot Password</Link> <br />
            <Link to="/register">Register</Link> <br />

            <button className='button2 mt-3' type='submit' onClick={handleLogin}>Login</button>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Login;