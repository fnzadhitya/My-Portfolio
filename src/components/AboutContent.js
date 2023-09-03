import "./AboutContentStyles.css";

import React from "react";
import pp from "../assets/pp.jpg";
import Resume from "../assets/CV.pdf";

const AboutContent = () => {
  return <div className="about">
    <div className="left">
      <div className="img-container">
        <div className="img-stack top">
          <img src={ pp } className="img" alt="true"/>
        </div>
      </div>
    </div>

    <div className="right">
      <h1>Siapa saya?</h1>
      <p>Saya merupakan Fresh Graduate Teknik Komputer dan Jaringan SMK Negeri 1 Bandung. Saat ini saya mengikuti kelas pelatihan IT Programmer dari UT School. Pada pelatihan ini saya banyak belajar tentang dunia pemrograman, terutama website dan mobile. </p>
      <a href={Resume} download="Resume"> 
        <button className="btn">Download CV</button>
      </a>
    </div>

  </div>;
};

export default AboutContent;
