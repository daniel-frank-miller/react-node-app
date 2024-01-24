import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar prevent-select">
      <Link to="/">
        <img src="/src/assets/logo_nobg.webp" alt="logo" className="title" />
      </Link>
      <div className="menu" onClick={toggleMenu}>
        <RxHamburgerMenu style={{ fontSize: "32px" }}/>
      </div>
      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={toggleMenu}
      ></div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={toggleMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={toggleMenu}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contactus" onClick={toggleMenu}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={toggleMenu}>
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
