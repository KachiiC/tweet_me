import React from 'react'
import {Link} from 'react-router-dom'

function Explore (){
    return (
        <div className="page-nav-border">
            <h5 className="page-nav">
                <Link to="/profile">Explore</Link>
            </h5>
        </div>
    )
}

export default Explore