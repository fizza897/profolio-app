import React from 'react'
import Wave from "../../images/wave.png";
import "./Footer.css"
// import { FontAwesomeIcon } from "@fontwesome/react-fontawesome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
  return (
    <div className='footer'>
    <img src={Wave} alt="" srcset=""style={ {width:"-100%"}} />
        <div className='f-content'>
            <span>fizzaazam6@gmail.com</span>
        <div className='f-icons'>
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        <FontAwesomeIcon icon={faFacebook}/>
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedin} />
        </div>
        </div>
       
    </div>
  )
}
