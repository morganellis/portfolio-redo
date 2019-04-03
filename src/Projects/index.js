import React, { Component } from "react";
import ScrollReveal from "scrollreveal";
import * as $ from "jquery";
import "./index.scss";

export default class Projects extends Component {
  fadeUp1 = {
    duration: 1000,
    distance: "200px",
    // viewFactor: 0.5,
    origin: "bottom",
    reset: true
  };

  fadeUp2 = {
    duration: 1000,
    distance: "200px",
    // viewFactor: 0.5,
    origin: "bottom",
    delay: 100,
    reset: true
  };

  fadeUp3 = {
    duration: 1000,
    distance: "200px",
    // viewFactor: 0.5,
    origin: "bottom",
    delay: 200,
    reset: true
  };

  componentDidMount() {
    ScrollReveal().reveal(".fade-up1", this.fadeUp1);
    ScrollReveal().reveal(".fade-up2", this.fadeUp2);
    ScrollReveal().reveal(".fade-up3", this.fadeUp3);

  }

  render() {
    return (
      <div className="projects-wrap">
        <div className="projects-container">
          <div className="project-image-container fade-up1">
            <p className="project-title">SLC Weather</p>
            <a className="project-link" href="http://slc-weather.surge.sh/">
              <img
                className="project-image"
                src={require("../assets/img/slc-weather.jpg")}
                alt="SLC Weather"
              />
            </a>
          </div>

          <div className="flashdeck project-image-container fade-up2">
            <p className="project-title">flashDeck</p>
            <a className="project-link" href="https://flashdeck-web-app.herokuapp.com/">
              <img
                className="project-image"
                src={require("../assets/img/flashdeck.jpg")}
                alt="Flashdeck"
              />
            </a>
          </div>

          <div className="set project-image-container fade-up3">
            <p className="project-title">SET Online</p>
            <a className="project-link" href="https://set-kutkurov-ellis-thomas.herokuapp.com/">
              <img
                className="project-image"
                src={require("../assets/img/set.jpg")}
                alt="SET"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
