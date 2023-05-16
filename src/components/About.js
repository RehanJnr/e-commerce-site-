import React from "react";
import "./About.css";
import image1 from "./images/company.jpg";

const About = () => {
  return (
    <div className="container">
      <h1> About Us </h1>
      <div className="row">
        <div className="col-md-4">
          <h2> Who we are? </h2>
          <p>
            {" "}
            We are a team of passionate individuals committed to providing
            high-quality products and exceptional customer service. Shop with us and experience the difference of
            working with a dedicated and customer-centric team.{" "}
          </p>
        </div>
        <div className="col-md-4">
          <img src={image1} alt="an img here" style={{ width: "500px" }}></img>
        </div>
      </div>
    </div>
  );
};

export default About;
