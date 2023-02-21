import React from 'react'
import Facebook from "../../images/Facebook.png"
import Shopify from "../../images/Shopify.png"
import UpWork from "../../images/Upwork.png"
import Amazon from "../../images/amazon.png"
import Fiverr from"../../images/fiverr.png"
import { motion } from "framer-motion";

import "./Work.css"

export default function Work() {
  return (
    <div className='work'>
    <div className='w-left'>
    <div className='awesome'>
    <span>
        Work For All These
    </span>
    <span>
        Brand & Clients
    </span>
    <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. aliquid, eum voluptates<br></br> molestiae earum omnis adipisci odio debitis aspernatur laudantium blanditiis <br></br>enim illo quod tempore perspiciatis accusamus illum,voluptate consequuntur!
    
    </span> 
    <button className='button s-button'> Hire Me</button>

    <div className='blur s-blur' style={{background:"#ABF1FF94"}}></div> 
    </div>
            <div className='w-right'>
            <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
                    <div className='w-secCircle'>
                        <img className='facebook' src={Facebook} alt="" srcset="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Shopify} alt="" srcset="" />
                    </div>
                    <div className='w-secCircle'>
                        <img className='Amazon' src={Amazon} alt="" srcset="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={UpWork} alt="" srcset="" />
                    </div>
                    <div className='w-secCircle'>
                        <img className='' src={Fiverr} alt="" srcset="" />
                    </div>
                    </motion.div>
            
            <div className='w-backCircle blueCircle'></div>
            <div className='w-backCircle yellowCircle'></div>
            
    </div>
            </div>
    
</div>
                    
                    
                
            

  )
}
