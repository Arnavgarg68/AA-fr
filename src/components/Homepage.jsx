import React, { useEffect } from 'react'
// import oil from './oil-treatment.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Homepage() {

    useEffect(()=>{
        AOS.init();
    },[])
  return (
    <div className='homepage-main-body'>
      <div className="homepage-main-inner-body">
        <div className="homepage-main-image" data-aos="zoom-in" data-aos-duration="1000">
            {/* <img src={oil} alt="" /> */}
        </div>
      </div>
    </div>
  )
}
