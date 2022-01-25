import React from "react";
import "./body.css";
import About from "./about/index";
import Project from "./project/index";
import Work from "./work/index";
import Skills from "./skills/index";
import Contact from "./contact/index";
import CP from "./cp";
function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>

      <section id="cp">
        <CP />
      </section>
      <section id="project">
        <Project />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
