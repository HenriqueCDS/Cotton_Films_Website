import React from 'react';
import { useSwiper } from 'swiper/react';
import buttonleft from "../../../assets/Galerybutleft.svg";
import buttonright from "../../../assets/Galerybutright.svg";

export default function ButtonsCarrousel()  {
  const swiper = useSwiper();
    console.log(swiper);
  return (
    <div className="top-button">
      <button onClick={() => swiper.slidePrev()}><img  src={buttonleft} /></button>
      <button onClick={() => swiper.slideNext()}><img  src={buttonright} /></button>
    </div>
  );
};
