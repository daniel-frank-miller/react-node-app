import { useState, useEffect } from "react";
import { Events } from "react-scroll";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Cookies from "js-cookie";
import "/src/components/Navbar/navbar.css";

const LoginNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location=useLocation()
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[location])
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const navbarClassName = scrolling ? "navbar scrolled" : "navbar scrolled";

  const toggleLogout=()=>{
    setMenuOpen(!menuOpen);
    Cookies.remove("jwt_token")
  }

  const loginBtnStatus=()=>{
    if(Cookies.get("jwt_token")!==undefined){
      return (
        <li>
          <NavLink to="/login" onClick={toggleLogout}>
            Logout
          </NavLink>
        </li>
      )
    }
    else{
     return(
        <li>
          <NavLink to="/login" onClick={toggleMenu}>
            Login
          </NavLink>
        </li>
     )
    }
  }


  return (
    <div className={`${navbarClassName} prevent-select`}>
      <Link to="/" className="link-text">
        <div className="nav-logo-header">
        <img src="/src/assets/logo_nobg.webp" alt="logo" className="nav-title" />
        <h1 className="nav-logo-heading">Homaid</h1>
        </div>
      </Link>
      <div className="menu" onClick={toggleMenu}>
        <RxHamburgerMenu style={{ fontSize: "32px" }} />
      </div>
      <div
        className={`overlays ${menuOpen ? "show" : ""}`}
        onClick={toggleMenu}
        >
      </div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
      {/* <li>
          <NavLink to="/" onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
      <li>
          <NavLink to="/Gallery" onClick={toggleMenu}>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/Reviews" onClick={toggleMenu}>
            Reviews
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
        </li> */}
        {loginBtnStatus()}
      </ul>
    </div>
  );
};

export default LoginNavbar;
