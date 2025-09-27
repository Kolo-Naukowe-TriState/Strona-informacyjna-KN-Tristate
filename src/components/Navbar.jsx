import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <header className="navbar">
        <div className="logo">🔧 KNUC</div>
        <nav>
          <ul className={`nav-links ${showMenu ? "show" : ""}`}>
            <li><a href="#o-nas" onClick={toggleMenu}>O nas</a></li>
            <li><a href="#projekty" onClick={toggleMenu}>Projekty</a></li>
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
