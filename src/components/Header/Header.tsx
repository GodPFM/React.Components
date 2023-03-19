import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <nav className="header__nav">
          <Link className="header__link" to="/">
            Main page
          </Link>
          <Link className="header__link" to="/about">
            About us
          </Link>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
