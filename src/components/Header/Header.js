import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (React.createElement("header", { className: "header" },
        React.createElement("div", { className: "header__wrapper" },
            React.createElement("nav", { className: "header__nav" },
                React.createElement(Link, { className: "header__link", to: "/" }, "Main page"),
                React.createElement(Link, { className: "header__link", to: "/about" }, "About us")))));
};
Header.propTypes = {};
export default Header;
