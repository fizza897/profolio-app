import React from 'react'
import "./FloatingDiv.css"

export default function FloatingDiv({Image ,txt1 ,txt2}) {
  return (
    <div className='Floatingdiv'>
      <img src={Image} alt="" srcset="" />
        <span>
            {txt1}
            <br/>
            {txt2}
        </span>
    </div>
  )
}
