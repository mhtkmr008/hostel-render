import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">Navbar</Link>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactUs">Contact</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to="/login">Login</Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to="/selectSeat">Seat Selection</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
