import React from "react";

const About = () => {
  return (
    <div id="about" className="aboutus">
      <div className="about-content">
        <div className="content-heading">
          <h2>
            Welcome to Your Health <br /> Centre
          </h2>
        </div>
        <div className="content-data">
          <p>
            {" "}
            A cardiologist is a medical doctor who studies and treats diseases
            and conditions of the cardiovascular system — the heart and blood
            vessels — including heart rhythm disorders, coronary artery disease,
            heart attacks, heart defects and infections, and related disorders.{" "}
          </p>
        </div>
        <div className="content-bio">
          <div className="bio-image">
            <img
              src={
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="....."
            />
          </div>
          <div className="bio-name">
            <div className="name-head">
              <h3>Dr. Akshat</h3>
            </div>
            <div className="name-title">
              <p>Cardiologist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
