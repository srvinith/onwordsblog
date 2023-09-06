import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import { Close } from '@mui/icons-material';


const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send registration data to your FastAPI backend
            const response = await fetch('http://192.168.1.8:8005/register_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });
            console.log("response",response.content)

            if (response.ok) {
                // Registration successful, redirect to another page
                window.location.href = '/category_recommendations';
            } else {
                // Handle registration failure
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <>
            <div className="login-bg">
                <div className="login-box ">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="signin">
                            <Link to='/logins'><Close className='closeBtn' /></Link>

                            <h2>Signin</h2>
                            <div className="form-group">
                                <PersonIcon />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <EmailIcon />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <LockIcon />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

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