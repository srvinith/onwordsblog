import React, { useState } from 'react';
import axios from 'axios';

function Reg() {
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
        const response = await axios.post('http://192.168.1.8:8005/register_user', formData,{
            headers:{
                'Content-Type':'application/json'
            },
        });

        // Log the request data and response for debugging purposes
        console.log('Request Data:', formData);
        console.log('Response:', response);

      if (response.status === 200) {
        // Registration was successful, you can handle the response data here
        const responseData = response.data;
        console.log('Registration successful:', responseData);

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
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
      {registrationError && <p>{registrationError}</p>}
    </div>
  );
}

export default Reg;
