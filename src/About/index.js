import React, { Component } from "react";
import ScrollReveal from "scrollreveal";
import * as $ from "jquery";
import "./index.scss";

export default class COMPONENT extends Component {
  fadeLeft = {
    duration: 1400,
    distance: "200px",
    viewFactor: 0.5,
    origin: "left",
    reset: true
  };

  fadeRightAbt1 = {
    duration: 900,
    distance: "100px",
    origin: "right",
    // delay: 200,
    reset: !0
  };

  fadeRightAbt2 = {
    duration: 900,
    distance: "100px",
    origin: "right",
    delay: 100,
    reset: !0
  };

  fadeRightAbt3 = {
    duration: 900,
    distance: "100px",
    origin: "right",
    delay: 200,
    reset: !0
  };

  fadeRightAbt4 = {
    duration: 900,
    distance: "100px",
    origin: "right",
    delay: 300,
    reset: !0
  };

  fadeRightAbt5 = {
    duration: 900,
    distance: "100px",
    origin: "right",
    delay: 400,
    reset: !0
  };

  fadeUpAbt = {
    duration: 1200,
    distance: "100px",
    origin: "bottom",
    reset: !0
  };

  componentDidMount() {
    ScrollReveal().reveal(".fade-left", this.fadeLeft);
    ScrollReveal().reveal(".fade-right-abt1", this.fadeRightAbt1);
    ScrollReveal().reveal(".fade-right-abt2", this.fadeRightAbt2);
    ScrollReveal().reveal(".fade-right-abt3", this.fadeRightAbt3);
    ScrollReveal().reveal(".fade-right-abt4", this.fadeRightAbt4);
    ScrollReveal().reveal(".fade-right-abt5", this.fadeRightAbt5);
    ScrollReveal().reveal(".fade-up-abt", this.fadeUpAbt);
  }

  render() {
    return (
      <div className="about-wrap wrap">
        <div className="left">
          <img
            className="my-face fade-left"
            src={require("../assets/img/portrait.png")}
            alt="This is my face!"
          />
        </div>
        <div className="right">
          <div className="stack-wrap">
            <div className="icon-txt-wrap fade-right-abt1">
              <img
                className="mongo icon"
                src={require("../assets/img/mongodb.png")}
                alt="MongoDB"
              />
              <p className="mongo-txt stack-txt">MongoDB </p>
            </div>

            <div className="icon-txt-wrap fade-right-abt2">
              <img
                className="express icon"
                src={require("../assets/img/express.png")}
                alt="Express.js"
              />
              <p className="express-txt stack-txt">&nbsp;Express.js</p>
            </div>

            <div className="icon-txt-wrap fade-right-abt3">
              <img
                className="angular icon"
                src={require("../assets/img/angular.png")}
                alt="Angular.js"
              />
              <p className="angular-txt stack-txt">Angluar.js</p>
            </div>
            <div className="icon-txt-wrap fade-right-abt4">
              <img
                className="icon angular"
                src={require("../assets/img/react.png")}
                alt="React.js"
              />
              <p className="react-txt stack-txt">React.js</p>
            </div>

            <div className="icon-txt-wrap fade-right-abt5">
              <img
                className="node icon"
                src={require("../assets/img/node.png")}
                alt="Node.js"
              />
              <p className="node-txt stack-txt">Node.js</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
