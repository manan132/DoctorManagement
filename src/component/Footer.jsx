import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-head">
        <div className="Contact">
          <h4>Contact Info</h4>
          <p></p>
          <div className="contact-details">
            <div className="details">
              <div className="details-image">
                <img
                  src={
                    "https://static-00.iconduck.com/assets.00/call-icon-1024x1024-w3y456eu.png"
                  }
                  alt=""
                />
              </div>
              <div className="details-info">
                <p>789-458-9632</p>
              </div>
            </div>
            <div className="details">
              <div className="details-image">
                <img
                  src={
                    "https://www.freeiconspng.com/thumbs/email-icon/email-icon--clipart-best-22.png"
                  }
                  alt=""
                />
              </div>
              <div className="details-info">
                <p>info@company.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Latestnews">
          <h4>Latest News</h4>
          <div className="Latestnews-bio">
            <div className="latestbio-image">
              <img
                src={
                  "https://img.freepik.com/premium-photo/healthcare-medical-concept-young-male-doctor-with-stethoscope-hospital_380164-53003.jpg"
                }
                alt=""
              />
            </div>
            <div className="latestbio-detail">
              <h5>Amazing Technology</h5>
              <span>March 08, 2017</span>
            </div>
          </div>
          <div className="Latestnews-bio">
            <div className="latestbio-image">
              <img
                src={
                  "https://i.pinimg.com/474x/1b/bc/d4/1bbcd4bc95c3c3221b11b06995b146b7.jpg"
                }
                alt=""
              />
            </div>
            <div className="latestbio-detail">
              <h5>Medical Research</h5>
              <span>March 08, 2017</span>
            </div>
          </div>
        </div>
        <div className="Openinghour">
          <h4>Opening Hours</h4>
          <div className="schedule">
            <p>
              Monday - Friday <strong>06:00 AM - 10:00 PM</strong>
            </p>
            <p>
              Saturday <strong> 09:00 AM - 08:00 PM </strong>
            </p>
            <p>
              Sunday <strong> Closed</strong>
            </p>
          </div>
          <div className="icons">
            <div className="logo">
              <img
                className="subicon"
                src={"https://cdn-icons-png.flaticon.com/512/49/49354.png"}
                alt=""
              />
            </div>
            <div className="logo">
              <img
                className="subicon"
                src={"https://cdn-icons-png.flaticon.com/512/733/733635.png"}
                alt=""
              />
            </div>
            <div className="logo">
              <img
                className="subicon"
                src={"https://cdn-icons-png.flaticon.com/512/1400/1400829.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="Footer-foot">
        <div className="Foot1">
          <p>Copyright © 2017 Your Company | Design: Tooplate</p>
        </div>
        <ul className="Foot2">
          <li>Laboratory</li>
          <li>Tests Departments</li>
          <li>Insurance Policy</li>
          <li>Careers</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
