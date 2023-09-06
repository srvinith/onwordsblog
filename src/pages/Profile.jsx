
import { MoreHorizRounded } from '@mui/icons-material'
import LockIcon from '@mui/icons-material/Lock';
import React from 'react'
import { Tooltip } from 'react-tooltip'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

const profile = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="left-profile">
                        <div className="top-l-p">
                            <h2>Vinith</h2>
                            <p> <MoreHorizRounded /></p>
                        </div>
                        <div className="bottom-profile-nav">
                            <ul>
                                <li className='active-profile'>Home</li>
                                <li>About</li>
                            </ul>
                        </div>
                        <div className="box-profile">
                            <div className="profile-pic">
                                <div className="capital"><span className='f-letter'>V</span><span>Vinith</span></div>
                                <div className="reading-list">
                                    Reading List
                                </div>
                                <div className="stories-count">
                                    <p>No stories<LockIcon className='lockicons' /></p>
                                    <div className="">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                <Link className="my-anchor-element text-dark"><MoreHorizRounded /></Link>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item className='dropdown' href="#">Bookmark List</Dropdown.Item>
                                                <Dropdown.Item className='dropdown' href="#">Draft</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <p>
                                            <Tooltip anchorSelect=".my-anchor-element" place="top">
                                                more
                                            </Tooltip>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="right-profile">
                        <div className="user-profile">
                            <div className="user-pic">
                                <h2>V</h2>
                            </div>
                            <div className="user-name"><h5>Vinith</h5></div>
                            <Link to='/profileform'>Edit Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default profile