import React from 'react';
import Footer from './Footer';

const NavBar = (props) => {
  return (
    <div >
      <div className="logo">{props.logo}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Tools</li>
      </ul>
      <Footer/>
    </div>
  )
}

export default NavBar
