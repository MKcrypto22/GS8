import React from "react";
import { links } from "./data";

const Sidebar = () => {
  return (
    <div className="link-container show-container">
      <ul className="links">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
