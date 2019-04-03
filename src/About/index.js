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
    reset: !0
  };

  fadeRightAbt2 = {
    duration: 900,
    distance: "100px",
    origin: "right",
    delay: 100,
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
          <p className="abt-txt-hdr-top abt-txt-hdr fade-right-abt1">HELLO</p>
          <img
            className="my-face fade-left"
            src={require("../assets/img/portrait.png")}
            alt="This is my face!"
          />
        </div>

        <div className="right">
          <div className="abt-txt-wrap">
            <p className="abt-txt-hdr-right abt-txt-hdr fade-right-abt1">
              HELLO
            </p>
            <p className="abt-txt-para fade-right-abt2">
              My name is Morgan Ellis. I'm a fullstack developer out of Salt
              Lake City, UT, specializing in the MEAN and MERN stacks. My
              passion is programming. I never thought that I would be one of
              those people who just flat-out love their work, but I am. One of
              the most satisfying feelings in the world is that rush I get when
              I figure out a great solution to a problem- especially when it's a
              problem that I've never encountered before. I'm so motivated by
              the necessity to continuously learn and the limitless ability to
              grow that comes with being a developer. I'm proud to say that I am
              a person who just flat-out loves my work.
            </p>
            <p className="abt-txt-para abt-txt-para2 fade-right-abt2">
              Check out some of my <span className="underline">projects</span>{" "}
              below, or you can take a look at my resume{" "}
              <span className="underline">here</span>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
