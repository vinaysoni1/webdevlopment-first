import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>

                <NavLink  className={(e)=>{ return e.isActive ? 'red' : ''}}to="/About"><li>About</li></NavLink>
                <NavLink  className={(e)=>{ return e.isActive ? 'red' : ''}}to="/Login"><li>Login</li></NavLink>
                <NavLink  className={(e)=>{ return e.isActive ? 'red' : ''}} to="/"><li>Home</li></NavLink>

            </nav>
        </div>
    )
}

export default Navbar
