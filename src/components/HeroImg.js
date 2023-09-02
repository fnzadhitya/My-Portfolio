import "./HeroImgStyles.css";

import React from "react";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
      <img className="intro-img" src={ IntroImg } alt="IntroImg" />
    </div>
    <div className="content">
      <p>Hallo, Saya Merupakan FRESH GRADUATE</p>
      <h1>Web & Mobile Developer.
        <div>
          <Link to="/project" className="btn">Project</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </h1>
    </div>
  </div>;
};

export default HeroImg;
