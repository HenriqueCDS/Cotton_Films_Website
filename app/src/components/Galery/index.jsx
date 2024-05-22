import "./galery.css";

import logo from "../../assets/galeryLogo.png";
import img1 from "../../assets/galeryImage1.png";
import img2 from "../../assets/galeryImage2.png";
import img3 from "../../assets/galeryImage3.png";
import verCase from "../../assets/verCase.svg";
import { Swiper,useSwiper, SwiperSlide} from "swiper/react";
import { A11y,Navigation, Pagination } from 'swiper/modules';

import React from 'react';



import "swiper/css";
import ButtonsCarrousel from "./ButtonsCarrousel";


export default function Galery() {  
    const swiper = useSwiper();
  
    return (
        <section className="galery">
            <div className="grid">
                <div className="top">
                    <div className="image-logo" data-aos="fade-down">
                        <img src={logo} />
                    </div>
                  
                </div>
                <div className="carrousel"  data-aos="fade-up">
                    <Swiper modules={[Navigation, Pagination, A11y]}  loop={true} slidesPerView={3} spaceBetween={10} >
                        <ButtonsCarrousel />
                        <SwiperSlide>
                            <div className="image-carrousel">
                                <img src={img1} />
                                <a className="verCase" href="#"><img src={verCase} /></a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="image-carrousel">
                                <img src={img2} />
                                <a className="verCase" href="#"><img src={verCase} /></a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="image-carrousel">
                                <img src={img3} />
                                <a className="verCase" href="#"><img src={verCase} /></a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image-carrousel">
                                <img src={img1} />
                                <a className="verCase" href="#"><img src={verCase} /></a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="image-carrousel">
                                <img src={img2} />
                                <a className="verCase" href="#"><img src={verCase} /></a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="image-carrousel">
                                <img src={img3} />
                                <a className="verCase" href="#"><img src={verCase} /></a>
                            </div>
                        </SwiperSlide>         
                    </Swiper>
               
                </div>

            </div>
        </section>
    )
    
}