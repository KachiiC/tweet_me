import React from 'react'
// CSS
// Components
import {Link} from 'react-router-dom'

function Profile () {
    return (
        <div className="page-nav-border">
            <h5 className="page-nav">
                <Link to="/profile">Profile</Link>
            </h5>
        </div>
    )
}

export default Profile