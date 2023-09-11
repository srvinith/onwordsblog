import React, { useState,useEffect } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import OtpInput from 'react-otp-input';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';


const ForgotPwd = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [countdownTimestamp, setCountdownTimestamp] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(0);
  
  const sendOtp = async () => {
    try {
      const response = await axios.post('http://192.168.1.8:8000/send_otp', { email });
      setMessage(response.data.message);

      if (response.data.message === 'OTP sent successfully') {
        setCountdownTimestamp(response.data.countdown_timestamp);
        setError('');
      }
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.message;
        setCountdownTimestamp(0); // Reset the countdown
        setTimeRemaining(0); // Reset the time remaining

        if (errorMessage === 'Email not found in Firebase Authentication') {
          setMessage('');
          setError('Email not found in Firebase Authentication. Please register first.');
        } else {
          setMessage('');
          setError('An unknown error occurred while sending OTP.');
        }
      } else {
        setMessage('');
        setError('An unknown error occurred while sending OTP.');
      }
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post('http://192.168.1.8:8000/verify_otp', { email, otp });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Invalid OTP. Please try again.');
    }
  };

  useEffect(() => {
    if (countdownTimestamp > 0) {
      const intervalId = setInterval(() => {
        const currentTimestamp = Math.floor(Date.now() / 1000);
        const remaining = countdownTimestamp - currentTimestamp;

        if (remaining <= 0) {
          clearInterval(intervalId);
          setCountdownTimestamp(0);
          setTimeRemaining(0);
        } else {
          setTimeRemaining(remaining);
        }
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [countdownTimestamp]);

  const resetPassword = async () => {
    try {
      const response = await axios.post('http://192.168.1.8:8000/reset_password', { email, new_password: newPassword });
      setMessage(response.data.message);
      navigate('/logins')
    } catch (error) {
      setMessage('Password reset failed. Please try again.');
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="login-bg">
        <div className="login-box ">
          <div className="">
            <div className="signin">
              <p>{error}</p>
              <p>{message}</p>
              <h2 className='fs-4'>OTP and Password Reset</h2>
              <div className='form-group'>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {<button className='form-btn' onClick={sendOtp} disabled={countdownTimestamp > 0}><SendIcon /></button>}
              </div>
              <div className='form-group verfiy'>
                <div className='otpinp'>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                    requried

                  />
                </div>
                <button className='form-btn verfiy-btn' onClick={verifyOtp}><CheckCircleOutlineIcon /></button>
              </div>
              {countdownTimestamp > 0 && <p>Time Remaining: {timeRemaining} seconds</p>}
              <div className='form-group'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button onClick={togglePasswordVisibility}>
                  {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                </button>
              </div>
              <button className=' btn btn-secondary' onClick={resetPassword}>Reset Password</button>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ForgotPwd