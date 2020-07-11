import React from 'react'
import './Layouts.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg tmNavBar">
        <span className="navbar-brand">Taskube</span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <span className="nav-link">Login</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Register</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
};

export default Navbar
