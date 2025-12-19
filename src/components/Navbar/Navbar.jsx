import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ logo }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo KNUC" className="logo-img" />
          KNUC
        </div>
        <nav>
          <ul className={`nav-links ${showMenu ? "show" : ""}`}>
            <li><Link to="/">Strona główna</Link></li>
            <li><Link to="/team">Zespół</Link></li>
            <li><Link to="/projekty">Projekty</Link></li>
            <li><Link to="/puzzle">Puzzle</Link></li>
            <li><a href="#kontakt" onClick={toggleMenu}>Kontakt</a></li>
          </ul>
        </nav>
        <div className="menu-toggle" onClick={toggleMenu}>☰</div>
      </header>

      <div
        className={`overlay ${showMenu ? "show" : ""}`}
        onClick={toggleMenu}
      ></div>
    </>
  );
};


export default Navbar;
