import React from 'react';
import './style.css';

/**
 * @author
 * @function Navbar
 **/

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <ul className='navbarMenu'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About Me</a>
        </li>
        <li>
          <a href='#'>Posts</a>
        </li>
        <li>
          <a href='#'>Contact Me</a>
        </li>
      </ul>
      <div className="serch">
        <input type='text' placeholder="search" />
        <img src={require('../../assets/icons/search.png')} alt="search"/>
      </div>
    </div>
  );
};

export default Navbar;
