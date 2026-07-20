import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      
      <nav>
       <Link to='/Home'> <li>Home</li></Link>
       <Link to='/About'> <li>About</li></Link>
       <Link to='/Login'> <li>Login</li></Link>
       <Link to='/User'> <li>User</li></Link>
      </nav>
    </div>
  )
}

export default Navbar
