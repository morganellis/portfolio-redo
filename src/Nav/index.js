import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as $ from "jquery";
import "./nav.scss";

const ITEM_HEIGHT = 48;

export default class Nav extends React.Component {
  render() {
    return (
      <div className="nav-wrap">
        <div className="nav-container">
          <a className="nav" href="#about">
            About
          </a>
          <a className="nav" href="#projects">
            Projects
          </a>
          <a className="nav" href="#contact">
            Contact
          </a>
          <Link to="/resume" className="nav-link">
            Resume
          </Link>
        </div>
      </div>
    );
  }
}
