import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import { Close } from '@mui/icons-material';
import axios from 'axios'


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [registrationError, setRegistrationError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

    };
    const registerUser = async () => {


        try {
            console.log("sf")
            const response = await axios.post('http://192.168.1.12:8000/register_user', formData, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            // Log the request data and response for debugging purposes
            console.log('Request Data:', formData);
            console.log('Response:', response);

            if (response.status === 200) {
                // Registration was successful, you can handle the response data here
                const responseData = response.data;
                console.log('Registration successful:', responseData);
                window.location.href='/logins'

                // Optionally, you can redirect the user to the login page or perform other actions
            } else {
                // Handle registration failure (e.g., display an error message)
                setRegistrationError('Registration failed');
            }
        } catch (error) {
            // Handle registration errors (e.g., show an error message)
            console.error('Registration failed:', error);
            setRegistrationError('Registration failed last');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        registerUser();
    };


    return (
        <>
            <div className="login-bg">
                <div className="login-box ">
                {registrationError && <p>{registrationError}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="signin">
                            <Link to='/logins'><Close className='closeBtn' /></Link>

                            <h2>Signin</h2>
                            <div className="form-group">
                                <PersonIcon />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Name'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <EmailIcon />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Email'
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <LockIcon />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder='Password'
                                    value={formData.password}
                                    onChange={handleInputChange}
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