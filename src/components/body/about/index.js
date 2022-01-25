import React from "react";
import SocialContact from "../../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I'm <br />
          <span className="info-name"> Deepak Barnwal </span>
          <br /> exploring/experimenting the Web.
        </div>

        <div className="about-photo">
          <img
            src={require("../../../assets/ME.jpg")}
            className="picture"
          ></img>
        </div>
      </div>

      <div className="about-bottom">
        <SocialContact />
      </div>
    </div>
  );
}

export default About;
