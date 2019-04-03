import React, { Component } from "react";
import ScrollReveal from "scrollreveal";
import * as $ from "jquery";
import "./index.scss";

export default class Projects extends Component {
  fadeLeft = {
    duration: 1400,
    distance: "200px",
    viewFactor: 0.5,
    origin: "left",
    reset: true
  };

  fadeRight1 = {
    duration: 900,
    distance: "100px",
    origin: "right",
    reset: !0
  };

  fadeRight2 = {
    duration: 900,
    distance: "100px",
    origin: "right",
    delay: 100,
    reset: !0
  };

  componentDidMount() {
    ScrollReveal().reveal(".fadeLeft", this.fadeLeft);
    ScrollReveal().reveal(".fadeRight1", this.fadeRight1);
    ScrollReveal().reveal(".fadeRight2", this.fadeRight2);
  }

  render() {
    return (
      <div className="projects-wrap">
        <div className="project-sect">
          <div className="left">
            <a className="project-link" href="http://slc-weather.surge.sh/">
              <img
                className="project-img fadeLeft"
                src={require("../assets/img/slc-weather.jpg")}
                alt="Salt Lake City Weather"
              />
            </a>
          </div>
          <div className="right">
            <p className="project-title fadeRight1">Salt Lake City Weather</p>
            <p className="project-desc fadeRight2">
              We accept the fact that we had to sacrifice a whole Saturday in
              detention for whatever it is we did wrong, but we think you’re
              crazy for making us write an essay telling you who we think we
              are. You see us as you want to see us, in the simplest terms, in
              the most convenient definitions. But what we found out, is that
              each one of us is a brain, and an athlete, and a basket-case, a
              princess, and a criminal. Does that answer your question?
            </p>
          </div>
        </div>
      </div>
    );
  }
}
