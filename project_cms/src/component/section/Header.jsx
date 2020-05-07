import React, { Component } from "react";
import NavNotificationsLog from "./NavNotificationsLog";
import NavComment from "./NavComment";
import NavUser from "./NavUser";

const Header = ({ button }) => {
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            {button}
            {/* <a className="nav-link" data-widget="pushmenu" href="#">
              <i className="fas fa-bars" />
            </a> */}
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        {/* SEARCH FORM */}
        <form className="form-inline ml-3">
          <div className="input-group input-group-sm">
            <input
              className="form-control form-control-navbar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </form>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Messages Dropdown Menu */}
          <NavComment />

          {/* Notifications Dropdown Menu */}
          <NavNotificationsLog />
          <NavUser />
        </ul>
      </nav>
    </div>
  );
};

export default Header;
