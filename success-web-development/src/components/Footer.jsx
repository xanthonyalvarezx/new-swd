import { React, useState } from "react";
import "../styles/footer.scss";

function Footer() {
  return (
    <>
      <div id="footer-container">
        <div className="footer-div">
          <div id="footer-logo">
          </div>
        </div>
        <div className="footer-div">
          <ul className="footer-link-list">
            <li className="footer-link">
              Contact Us
            </li>
            <li className="footer-link">
              Our Projects
            </li>
            <li className="footer-link">
              Endorsements
            </li>
            <li className="footer-link">
              Meet The Team
            </li>
            <li className="footer-link">
              FAQ
            </li>
          </ul>
        </div>
        <div id="spacer-div" className="footer-div">
        </div>
        <div id="social-div" className="footer-div">
          <div>
            
            <div id="follow-us-circle">
              Follow Us!
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;