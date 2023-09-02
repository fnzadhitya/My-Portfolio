import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Footer from "../components/Footer";
// import PricingCard from "../components/PricingCard";
import Work from "../components/Work";

const Project = () => {
  return <div>
    <Navbar />
    <HeroImg2 heading="MY PROJECTS" text="Beberapa project yang telah saya kerjakan." />
    <Work />
    {/* <PricingCard /> */}
    <Footer />
  </div>;
};

export default Project;
