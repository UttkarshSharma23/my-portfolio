import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/cricket.png'
import AVATAR2 from '../../assets/workout.png'
import AVATAR3 from '../../assets/dance.png'
import AVATAR4 from '../../assets/Acting.png'


// Importing the slider module for creating a sliding testimonial section >>>> import Swiper core and required modules
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// Array list for testimonials
const data = [
  {
    avatar: AVATAR1,
    name:'Cricket',
    review: "Cricket, with its exhilarating plays and strategic maneuvers, has become more than just a sport; it's a passion that fuels my competitive spirit and connects me with the thrill of the game."
  },
  {
    avatar: AVATAR2,
    name:'Workout',
    review: 'Amidst the bustling rhythms of daily life, I carve out time for my cherished workout routine, a daily commitment to physical well-being that not only invigorates my body but also strengthens my resolve.'
  },
  {
    avatar: AVATAR3,
    name:'Dance',
    review: 'The rhythmic beats of dancing unleash my creative energy, allowing me to express myself through graceful movements and find a harmonious balance between discipline and freedom.'
  },
  {
    avatar: AVATAR4,
    name:'Acting',
    review: 'Acting is my canvas for storytelling, a medium through which I explore the depths of human emotions and bring characters to life. Whether on stage or in front of a camera, the world of acting allows me to step into different personas, creating a rich tapestry of experiences.'
  },

]



const Testimonials = () => {
  return (
    <section id='testimonials'>
     <h5>Review of my daily Life</h5>
     <h2>Hobbies</h2>

     <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >

{/* Mapping all the testimonials in a react-arrow function */}
      {
        data.map(({avatar,name,review,},index)=>{
          return(
            <SwiperSlide key={index}
             className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} />
            </div>
              <h5 className='client__name'>
                {name}
              </h5>
              <small className='client__review'>
                {review}
              </small>
          </SwiperSlide>
          )
        })
      }   
     </Swiper>
      </section>
  )
}

export default Testimonials