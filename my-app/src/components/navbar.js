import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="brand">Shravan</div>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/account">Account</Link> {/* Added Account link */}
    </div>
  </nav>
);

export default Navbar;
