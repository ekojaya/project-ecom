import React, { useState } from "react";
import cx from "classnames";
const NavSub = ({ title, children }) => {
  return (
    <div>
      <li id="NavSub" className="nav-item has-treeview ">
        <a
          href="#"
          className="nav-link"
          onClick={(e) => {
            e.preventDefault();
            const body = document.getElementById("NavSub");
            body.classList.toggle("menu-open");
          }}
        >
          <i className="nav-icon fas fa-tachometer-alt" />
          <p>
            {title}
            <i className="right fas fa-angle-left" />
          </p>
        </a>

        <ul className="nav nav-treeview" id="NavSub">
          {children}

          {/* <li className="nav-item">
            <a href="../../index.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Dashboard v1</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="../../index2.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Dashboard v2</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="../../index3.html" className="nav-link">
              <i className="far fa-circle nav-icon" />
              <p>Dashboard v3</p>
            </a>
          </li> */}
        </ul>
      </li>
    </div>
  );
};
export default NavSub;
