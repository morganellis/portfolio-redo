import React, { Component } from "react";
import "./index.scss";
import * as $ from "jquery";

export default class Header extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="header">
        <div className="clip">
          <p className="title">MORGAN ELLIS</p>
        </div>
        <div className="cube-wrap">
        <div id="cube" className="cube">
          <div className="cube__face" />
          <div className="cube__face" />
          <div className="cube__face" />
          <div className="cube__face" />
          <div className="cube__face" />
          <div className="cube__face" />
        </div>
        </div>
        <div className="clip">
          <p className="tagline">Clean. Concise. Creative.</p>
        </div>
      </div>
    );
  }
}
