import React from "react";
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <li>
        <Link to="/profile">profile</Link>
      </li>
      <li>
        <Link to="/dialogs">Message</Link>
      </li>
      <li>
        <Link to="/news">News</Link>
      </li>
      <li>
        <Link to="/music">Music</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
    </nav>
  );
};

export default Navbar;
