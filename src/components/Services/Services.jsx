import React from 'react'
import "./Services.css"
import heartEmoji from "../../images/heartemoji.png"
import glasses from"../../images/glasses.png"
import humble from "../../images/humble.png"
import Card from '../Cards/Card'
import Resume from "./Fizza Azam CV (2023).pdf"
import { motion } from "framer-motion";
export default function Services() {
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className='services'>
        <div className='awesome'>
            <span>
                My Awesome
            </span>
            <span>
                services
            </span>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. aliquid, eum voluptates<br></br> molestiae earum omnis adipisci odio debitis aspernatur laudantium blanditiis <br></br>enim illo quod tempore perspiciatis accusamus illum,voluptate consequuntur!
            </span>
            <a href={Resume} download>
            <button className='button s-button'> Download Cv</button>

            </a>
            </div>
            <div className='blur s-blur' style={{background:"#ABF1FF94"}}>
            </div>
            <div className='cards'>
            <motion.div
          initial={{ left: "25rem",top:"9rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={heartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-13rem", top: "30rem" }}
          whileInView={{ left: "1rem" }}
          transition={transition}
        >
          <Card
            emoji={glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "-13rem", left: "-12rem" }}
          whileInView={{ left:"40rem" }}
          transition={transition}
        >
          <Card
            emoji={humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        </div>
    </div>
    
  )
}
