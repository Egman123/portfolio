import React from 'react';
import './skills.css';
import Image1 from '../../assets/skill1.png';
import Image2 from '../../assets/skill2.png';
import Image3 from '../../assets/skill3.png';
import Image4 from '../../assets/skill4.png';
import Image5 from '../../assets/skill5.png';
import Image6 from '../../assets/skill6.png';
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    image: Image1,
    title: "HTML/CSS",
   
  },
  {
    id: 2,
    image: Image2,
    title: "JS",
   
  },
  {
    id: 3,
    image: Image3,
    title: "React js",
   
  },
  {
    id: 4,
    image: Image4,
    title: "TS",
   
  },
  {
    id: 5,
    image: Image5,
    title: "Redux",
   
  },
];

const Skills = () => {
  return (
    <section className="skills container section">
      <h2 className="section__title">Skills</h2>

      <Swiper className="skills__container grid"
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={30}
       slidesPerView={1}
       loop={true}
       grabCursor={true}
       pagination={{ clickable: true }}
      >
        {data.map(({id, image, title}) => {
          return (
            <SwiperSlide className="skills__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" className='skills__img'/>
              </div>
               <h3 className="skills__title">{title}</h3>
              
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Skills