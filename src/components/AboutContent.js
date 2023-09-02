import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import pp from "../assets/pp.jpg";

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
      <p>Saya merupakan Fresh Graduate Teknik Komputer dan Jaringan SMK Negeri 1 Bandung. Saat ini saya mengikuti kelas pelatihan IT Programmer dari UT SChool. Pada pelatihan ini saya banyak belajar tentang dunia pemrograman, terutama website dan mobile. </p>
      <Link to="/contact">
        <button className="btn">Contact</button>
      </Link>
    </div>

  </div>;
};

export default AboutContent;
