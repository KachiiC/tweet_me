import React from 'react'
// CSS
import './HomeNav.css'
// Components
import {Link} from 'react-router-dom'

function HomeNav () {

    return (
        <div className="page-nav-border">
            <h5 className="page-nav">
                <Link to="/">Home</Link>
            </h5>
        </div>
    )
}

export default HomeNav