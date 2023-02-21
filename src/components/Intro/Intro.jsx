import React from 'react'
import Github from "../../images/github.png";
import Linkedin from "../../images/linkedin.png";
import Girls from "../../images/2.avif";

import "./Intro.css";
const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am </span>
          <span>Fizza </span>
          <span>
            Fronted Developer with high level of experience in <br></br> web
            designing and Developer, producing the quality work
          </span>
        </div>
        <button className=" button i-button">Hire Me </button>
        <div className="i-icons">
          <a href="https://github.com/fizza897?tab=repositories">
          <img src={Github} alt=""/>
          </a>
          <a href="https://www.linkedin.com/in/fizza-azam-34749821b/">
          <img src={Linkedin} alt="" />
          </a>
          {/* <a href=""> */}
            {/* <img src={Facebook} alt="" srcset="" /> */}
          {/* </a> */}
        </div>
      </div>
      <div className="i-right">        
        <img src={Girls} alt="" srcset="" /> 
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};
export default Intro