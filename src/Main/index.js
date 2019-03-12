import React, { Component } from "react";
import fullpage from "fullpage.js";
import "./index.scss";
import Nav from "../Nav";
import Header from "../Header";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import Resume from "../Resume";
import Footer from "../Footer";

let Fullpage;

export default class Main extends Component {
  componentDidMount() {
    new fullpage("#fullpage", {
      navigation: true,
      // responsiveWidth: 768,
      scrollBar: !0,
      navigation: !0,
      navigationPosition: "right",
      keyboardScrolling: !0,
      normalScrollElements: "#normal-scroll",
      scrollingSpeed: 750,

      // anchors: ["header", "about", "projects", "contact"],
      licenseKey: "OPEN-SOURCE-GPLV3-LICENSE"
    });
    
  }

  render() {
    return (
      <div className="main-wrap">
        {/* <div className="nav">
          <Nav />
        </div> */}
        <div id="fullpage">
          <section className="section header-section" id="header" name="header">
            <Header />
          </section>
          <section className="section about-section" id="about" name="about">
            <About />
          </section>
          <section
            className="section projects-section"
            id="projects"
            name="projects"
          >
            <Projects />
          </section>
          <section
            className="section contact-section"
            id="contact"
            name="contact"
          >
            <Contact />
          </section>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
