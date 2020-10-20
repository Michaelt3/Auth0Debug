import React, { Component, Fragment } from "react";
import "./NavBar.css";
import LoginButton from "./Login/LoginButton";
import LogoutButton from "./Login/LogoutButton";

class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <div className="nav-wrapper">
          <div className="left-side">
            <LoginButton />
            <LogoutButton />
          </div>
          <div className="middle-side">
            <div className="nav-link-wrapper">
              <a href="/home">Home</a>
            </div>
            <div className="nav-link-wrapper">
              <a href="jobstatus.html">Job Status</a>
            </div>
            <div className="nav-link-wrapper">
              <a href="Operations.html">Operations</a>
            </div>
            <div className="nav-link-wrapper">
              <a href="Engineering.html">Engineering</a>
            </div>
            <div className="nav-link-wrapper">
              <a href="Electronics.html">Electronics</a>
            </div>
            <div className="nav-link-wrapper">
              <a href="Maintenance.html">Maintenance</a>
            </div>
            <div className="nav-link-wrapper">
              <a href="Accounting.html">Accounting</a>
            </div>
          </div>
          <div className="right-side">
            <div className="nav-contact" id="nav-button">
              Contact Us
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NavBar;
