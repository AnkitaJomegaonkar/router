import React from 'react'
import "./NavBar.css";
// import { NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      
<ul>

  <li><NavLink  to="/">Home</NavLink></li>
  <li><NavLink to="/News">News1</NavLink></li>
  <li><NavLink to="/contact">Contact</NavLink></li>
  <li><NavLink to="/about">About</NavLink></li>

</ul>

    </div>
  )
}

export default NavBar
