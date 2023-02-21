import React from 'react'
import "./Portfolio.css"
import{Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import Hoc from "../../images/hoc.png"
import Sidebar from "../../images/sidebar.png"
import ECommerce from "../../images/ecommerce.png"
import MusicApp from "../../images/musicapp.png"
export default function Portfolio()  {
  return (
    <div className='portfolio' id='portfolio'>
      <span>Recent Project</span>
      <span>Portfolio</span>
<Swiper
spaceBetween={20}
slidesPerView={3}
grabCursor={true}
className="portfolio-slider"
>
<SwiperSlide>
  <img src={Sidebar} alt="" srcset="" />
</SwiperSlide>
<SwiperSlide>
  <img src={Hoc} alt="" srcset="" />
</SwiperSlide>
<SwiperSlide>
  <img src={ECommerce} alt="" srcset="" />
</SwiperSlide>
<SwiperSlide>
  <img src={MusicApp} alt="" srcset="" />
</SwiperSlide>
</Swiper>
    </div>
  )
}
