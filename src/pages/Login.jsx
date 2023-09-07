import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom'
import { Close } from '@mui/icons-material';
import axios from 'axios'


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://192.168.1.8:8005/verify_login', {
                email,
                password,
            });

            if (response.status === 200) {
                const { user_id, user_email } = response.data;
                setMessage(`Login successful. User ID: ${user_id}, Email: ${user_email}`);
                window.location.href='/'
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setMessage('Invalid credentials');
            } else {
                setMessage('An error occurred during login.');
            }
        }
    };


    return (
        <>
            <div className="login-bg">
                <div className="login-box " id='login'>
                    <p>{message}</p>

                    <form>
                        <div className="signin">
                            <Link to='/'><Close className='closeBtn' /></Link>
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
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <Link to="/forgot">Forgot Password</Link> <br />
                            <Link to="/register">Register</Link> <br />

                            <button className='button2 mt-3' type='submit' onClick={handleLogin}>Login</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Login