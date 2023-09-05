
import { MoreHorizRounded } from '@mui/icons-material'
import LockIcon from '@mui/icons-material/Lock';
import React from 'react'
import { Tooltip } from 'react-tooltip'

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
                                <li>Home</li>
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
                                    <p>
                                        <Tooltip title="more">
                                            <MoreHorizRounded />
                                        </Tooltip>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="right-profile">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default profile