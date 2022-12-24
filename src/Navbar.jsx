import React from 'react'
import {Link} from "react-router-dom"
export default function Navbar(){
    return (
        <nav className='navBar'>
        <a href='/'>
            <img className = 'icon' src='websiteIcon.png'>
            </img>
        </a>
        <ul>
            <li>
                <Link className="nav-items" to='/newproj'>Projects</Link>
            </li>
            <li>
                <Link className="nav-items" to='/contact'>Contact Me</Link>
            </li>
            <a href={require("./Nguyen_Brandon_Official_Resume.pdf")} target="_blank" className = "resume">Download Resume</a>
        </ul>
        </nav>
    )
}
