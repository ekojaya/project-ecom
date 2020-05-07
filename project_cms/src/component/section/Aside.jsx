import React, { Component } from "react";
import gambar from "./img.png";
import NavSub from "./NavSub";
const Aside = () => {
  return (
    <div>
      <aside className="main-sidebar sidebar-light-primary elevation-2">
        {/* Brand Logo */}
        <a href="../../index3.html" className="brand-link">
          {/* <img
            src="../../dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          /> */}
          <div className="user-block">
            <img
              className="img-circle img-bordered-sm"
              src={gambar}
              alt="User Image"
            />
          </div>
          <span className="brand-text font-weight-light">Dashboard</span>
          {/* <center>DashBoard</center> */}
          <br />
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user (optional) */}
          {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="../../dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div> */}
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <NavSub title="Produk">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Create Produk</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>List Produk</p>
                  </a>
                </li>
              </NavSub>

              <li className="nav-item">
                <a href="../widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Coming soon
                    <span className="right badge badge-danger">New</span>
                  </p>
                </a>
              </li>

              <li className="nav-header">MASTER</li>
              <li className="nav-item">
                <a href="../calendar.html" className="nav-link">
                  <i className="nav-icon far fa-calendar-alt" />
                  <p>
                    Product
                    <span className="badge badge-info right">2</span>
                  </p>
                </a>
              </li>

              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-envelope" />
                  <p>
                    Kategori
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Coming soon</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Coming soon</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Coming soon</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-header">Coming soon</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-file" />
                  <p>Coming soon</p>
                </a>
              </li>
              <li className="nav-header">Coming soon</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-danger" />
                  <p className="text">Coming soon</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-warning" />
                  <p>Coming soon</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-info" />
                  <p>Coming soon</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-info" />
                  <p>Coming soon</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default Aside;
