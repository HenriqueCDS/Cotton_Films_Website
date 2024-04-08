import "./galery.css";

import logo from "../../assets/galeryLogo.png";
import img1 from "../../assets/galeryImage1.png";
import img2 from "../../assets/galeryImage2.png";
import img3 from "../../assets/galeryImage3.png";
import buttonleft from "../../assets/Galerybutleft.svg";
import buttonright from "../../assets/Galerybutright.svg";


import { Swiper,useSwiper, SwiperSlide } from "swiper/react";

import "swiper/css";



export default function Galery() {
    const swiper = useSwiper();
    return (
        <section className="galery">
            <div className="grid">
            <div className="top">
                    <div className="image-logo">
                        <img src={logo} />
                    </div>
                    <div className="buttons">
                        <button onClick= {() => swiper.slidePrev()}> <img src={buttonleft} /></button>
                    </div>
                </div>
              
                <div className="carrousel">
                    <Swiper  navigation={true} loop={true} slidesPerView={3} spaceBetween={10} >
    
                        <SwiperSlide>
                            <div className="image-carrousel">
                                <img src={img1} />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="image-carrousel">
                                <img src={img2} />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="image-carrousel">
                                <img src={img3} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image-carrousel">
                                <img src={img1} />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="image-carrousel">
                                <img src={img2} />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="image-carrousel">
                                <img src={img3} />
                            </div>
                        </SwiperSlide>           
                    </Swiper>
               
                </div>

            </div>
        </section>
    )
    
}