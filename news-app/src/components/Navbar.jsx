import React from 'react';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className="logo">NewsToday</div>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">World</a></li>
          <li><a href="#">Politics</a></li>
          <li><a href="#">Sports</a></li>
          <li><a href="#">Entertainment</a></li>
          <li><a href="#">Tech</a></li>
        </ul>

        <div className="search-bar">
          <input type="text" placeholder="Search news..." /> 
          <button>
            <FaSearch />
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
