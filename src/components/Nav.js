import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => (
  <nav className="navbar">
    <ul>
      <li className="link">
        <Link to="/">Register</Link>
      </li>
      <li className="link">
        <Link to="/login">Login</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
