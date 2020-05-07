import React, { Component, Fragment, useState, useEffect } from "react";
import Header from "../section/Header";
import Aside from "../section/Aside";

const Page = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addListener((e) => {
      if (e.matches) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    });
  }, []);
  return (
    <div className="wrapper">
      <Header
        button={
          <Fragment>
            <a
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                if (mobile) {
                  const body = document.getElementById("body");
                  body.classList.toggle("");
                } else {
                  const body = document.getElementById("body");
                  body.classList.toggle("sidebar-collapse");
                }
              }}
              data-widget="pushmenu"
              href="#"
            >
              <i className="fas fa-bars" />
            </a>
          </Fragment>
        }
      ></Header>
      <Aside />
    </div>
  );
};

export default Page;
