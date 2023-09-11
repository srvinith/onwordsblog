import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom'
import { Close} from '@mui/icons-material';
import axios from 'axios'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';




const Login = () => {

    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userId, setUserId] = useState('');
    const [showPassword, setShowPassword] = useState(false);



    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const handleLogin = async () => {
        console.log(handleLogin)
        try {
            const response = await axios.post('http://192.168.1.8:8000/verify_login', {
                email,
                password,
            });


            if (response.status === 200) {
                const { user_id, user_email } = response.data;
                setUserEmail(user_email)
                setUserId(user_id)
                setMessage(`Login successful. User ID: ${user_id}, Email: ${user_email}`);
                window.location.href = '/'

                // Redirect to the desired page (e.g., home page)
                window.location.href = '/';

            }

        } catch (error) {
            if (error.response) {
                const errorMessage = error.response.data.detail;

                // Check for specific error messages and set custom error messages
                if (errorMessage === 'User not found. Please register first.') {
                    setMessage('Email not found. Please register first.');
                }
                else if (errorMessage === 'Invalid password') {
                    setMessage('Invalid password. Please try again.');
                }
                else {
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
                                {showPassword ?<VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                            </button>
                            {/* <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            /> */}
                            
                        </div>

                        <Link to="/forgot">Forgot Password</Link> <br />
                        <Link to="/register">Register</Link> <br />

                        <button className='button2 mt-3' type='submit' onClick={handleLogin}>Login</button>
                    </div>
                    <div className="d-none">
                        <p>userEmail:{userEmail}</p>
                        <p>userId:{userId}</p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Login