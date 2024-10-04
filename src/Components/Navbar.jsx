import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../data";
import "./Navbar.css";
const Navbar = () => {
  const [showmenu, setShowmenu] = useState(false);
  return (
    <nav className="nav">
      <div className={`${showmenu ? "nav-menu show-menu" : "nav-menu"}`}>
        <ul className="nav-list">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className="nav-items" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-nav" : "nav-link"
                  }
                  onClick={() => setShowmenu(!showmenu)}
                >
                  {icon}
                  <h3 className="nav-name">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={`${showmenu ? "nav-toggle animate-toggle" : "nav-toggle"}`}
        onClick={() => setShowmenu(!showmenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
