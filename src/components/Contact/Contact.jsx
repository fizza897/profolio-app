import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import "./Contact.css"
const Contact = () => {
    const form = useRef();
    const [alert,setDone]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_3yhdsgj', 'template_trygqpp', form.current, 'pQgIBs0GyIKN58V24')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };
  
  return (
  
    <div className='contact-form'>
        <div className='w-left'>
            <div className='awesome'>
            <span>Get in Touch</span>
            <span>Contact Me....</span>
            </div>
            <div className='blur s-blur' style={{background:"#ABF1FF94"}}></div>
        </div>
        <div className='c-right'>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='{to_name}' id='Name' placeholder='Enter Your Name' className='user' required/>
                <input type="Email" name='{from_name}' id='Name' placeholder='Enter Your Email' className='user' required/>
                <textarea name='message' id='Message' placeholder='Message' className='user'/>
                <input type="submit" value="Send" className='button'/>
                <span>{alert && "Thanks for Contact me !!!" }</span>
                <div className='blur c-blur' style={{background:"var(--purple)"}}></div> 
            </form>
        </div>
    </div>
    
  )
}

export default Contact
        
    
  

