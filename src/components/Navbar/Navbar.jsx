import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import DarkMode from "../../DarkMode";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Fizza Azam</div>
        <div className={Toggle}>
          <DarkMode />
        </div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" path="/services" spy={true} smooth={true}>
                Service
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}  >
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true} >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
}
