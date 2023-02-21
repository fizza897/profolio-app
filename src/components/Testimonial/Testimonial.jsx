import React from 'react'
import "./Testimonial.css"
import Profolio1 from "../../images/profile1.jpg"
import Profolio2 from "../../images/profile2.jpg"
import Profolio3 from "../../images/profile3.jpg"
import Profolio4 from "../../images/profile4.jpg"
import{Swiper,SwiperSlide} from "swiper/react" 
import { Pagination } from 'swiper'
import "swiper/css/pagination"
import "swiper/css"
const Client=[{
    img: Profolio1,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
  },{
    img: Profolio2,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
  },{
    img: Profolio3,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
  },
  {
    img:Profolio4,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
  }
]
export default function Testimonial() {
  return (
    <div className='t-wrapper'>
        <div className="t-heading">
            <span>Client & Always</span>
            <span> Exceptional Work</span>
            <span> From me</span>
       <div className="blur t-blur1" style={{backgroud:"var(--purple)"}}></div>
       <div className="blur t-blur2" style={{backgroud:"skyblue"}}></div>   
        </div>
<Swiper
modules={[Pagination]}
slidesPerView={1}
pagination={{clickable:true}}
>
  {Client.map((Client,index)=>{
    return(
      <SwiperSlide key={index}>
        <div className='testimonial'>
        <img src={Client.img} alt="" srcset="" />
        <span>{Client.review}</span>
</div>
      </SwiperSlide>
    )
  })}
</Swiper>
    </div>
  )
}
