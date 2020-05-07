import React, { useState } from "react";
import cx from "classnames";
import gambar from "./img.png";
const NavUser = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <li className={cx("nav-item dropdown ", { show: show })}>
        <a
          onClick={(e) => {
            e.preventDefault();
            setShow(!show);
          }}
          onBlur={() =>
            setTimeout(() => {
              setShow(false);
            }, 100)
          }
          className="nav-link"
          data-toggle="dropdown"
          href="#"
        >
          <div className="user-block">
            <img
              className="img-circle img-bordered-sm"
              src={gambar}
              alt="User Image"
            />
          </div>
        </a>
        <div
          className={cx("dropdown-menu dropdown-menu-lg dropdown-menu-right", {
            show,
          })}
        >
          <span
            className="dropdown-item dropdown-header"
            style={{ width: "250px" }}
          >
            Nama User
          </span>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-users mr-2" /> View Profil
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-users mr-2" /> Edit Profil
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-users mr-2" /> Ganti Password
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item ">
            <i className="fas fa-file mr-2" /> Log Out
          </a>
        </div>
      </li>
    </div>
  );
};
export default NavUser;
