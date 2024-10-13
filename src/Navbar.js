import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { social } from "./data";
import logo from "./logo.svg";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const showMenu = () => {
    if (window.innerWidth > 800) {
      setShowLinks(true);
    } else {
      setShowLinks(false);
    }
  };

  useEffect(() => {
    showMenu();
    window.addEventListener("resize", showMenu);
    return () => {
      window.removeEventListener("resize", showMenu);
    };
  }, []);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        {showLinks && <Sidebar />}
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
