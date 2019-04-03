import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as $ from "jquery";
import "./nav.scss";

const ITEM_HEIGHT = 48;

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="navicon" />
        </label>
        <ul className="menu">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <Link to="#contact">Resume</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
