import React, { useState } from "react";
import cx from "classnames";
const NavNotificationsLog = () => {
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
          <i className="far fa-bell" />
          {/* <i className="far fa-user" /> */}
          <span className="badge badge-warning ">15</span>
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
            15 Notifications
          </span>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-envelope mr-2" /> 4 new messages
            <span className="float-right text-muted text-sm">3 mins</span>
          </a>
          {/* <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-users mr-2" /> 8 new 
            <span className="float-right text-muted text-sm">12 hours</span>
          </a> */}
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-file mr-2" /> 3 new reports
            <span className="float-right text-muted text-sm">2 days</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item dropdown-footer">
            See All Notifications
          </a>
        </div>
      </li>
    </div>
  );
};

export default NavNotificationsLog;
