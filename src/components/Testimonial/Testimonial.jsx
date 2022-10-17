import React from 'react';
import './Testimonial.scss';
import Testimony from './Avatar';

//import { Virtual } from 'swiper';

// import Swiper core and required modules
import { Pagination, Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';




const Testimonial = () => {
    return(
        <section className="testimonials">
            <h5> Review from Clients </h5>
                <h2>Testimonials</h2>
               
            <Swiper className="swiper"
           modules={[ Pagination, Navigation]}
           spaceBetween={30}
           slidesPerView={1}
            loop={true}
           pagination={{ clickable: true }}
         navigation={true}
           
            >
                {
                Testimony.map(({ id, avat, name, review}) => {
                        return(
                            <SwiperSlide key={id} className='testimonial'>
                                <div className="client__avatar">
                                    <img src={avat} alt="images"/>
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                    <small className='client__review'>{review}
                                    </small>
                             </SwiperSlide>
                        )
                    })
                }   
            </Swiper>
        </section>
    )
}
          
          


            
    
         
           
           
          
    

export default Testimonial;