import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Close } from '@mui/icons-material';
import OtpInput from 'react-otp-input';

const VerifyOtp = () => {
    const [otp, setOtp] = useState('');

    return (
        <>
            <div className="login-bg">
                <div className="login-box ">
                    <form action="/lverfiyotp">
                        <div className="signin">
                            <Link to='/logins'><Close className='closeBtn' /></Link>
                            <h2>Otp Verfiy</h2>
                            <div className="form-group">
                               
                                <OtpInput
                                className='otp'
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={6}
                                    renderSeparator={<span className='otp-inp'>-</span>}
                                    renderInput={(props) => <input {...props} />}
                                />
                            </div>
                            <button className='button2 mt-3' type='submit'>Submit Otp</button>
                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}

export default VerifyOtp