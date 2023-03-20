import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <nav className="header__nav">
          <NavLink
            className={({ isActive }) => (isActive ? 'header__link active' : 'header__link')}
            to="/"
          >
            Main page
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'header__link active' : 'header__link')}
            to="/about"
          >
            About us
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
