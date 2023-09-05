import React from 'react'
import {Link} from 'react-router-dom'
import PublicIcon from '@mui/icons-material/Public';
import PersonIcon from '@mui/icons-material/Person';
import GradingIcon from '@mui/icons-material/Grading';
import { Close } from '@mui/icons-material';

const ProfileForm = () => {
    return (
        <>
               <div  className="login-bg">
                        <div className="login-box ">
                            <form action="/logins">
                                <div className="signin">
                                <Link to='/profile'><Close  className='closeBtn'/></Link>
                                    <h2>Profile change</h2>
                                    <div className="form-group">
                                        <PersonIcon />
                                        <input type="file" placeholder='profile' required />
                                    </div>
                                    <div className="form-group">
                                        <GradingIcon />
                                        <input type="text" placeholder='Bio' required />
                                    </div>
                                    <div className="form-group">
                                        <PublicIcon />
                                        <input type="text" placeholder='social medialink' required />
                                    </div>

                                    <button className='button2 mt-3' type='submit'>Profile Change</button>
                                </div>

                            </form>
                        </div>
                    </div> 
        </>
    )
}

export default ProfileForm