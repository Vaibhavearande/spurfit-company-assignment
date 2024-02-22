
import './index.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';
import avatar01 from '../../assets/img/avatar01.png'
import avatar02 from '../../assets/img/avatar02.png'
import avatar03 from '../../assets/img/avatar02.png'



export default function Slider() {
  return (
    <>
      <section>
        <div className="container sliders">
            <h2 className="section_title">Testinomials</h2>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="slide_item">
                <div className="slide_img_01"><img src={avatar01} alt="" />
                </div>
                <h1>Jesica Fernandes</h1>
                <p>
                The challenge in writing a short story is to give it a complete introduction and
                 ending while filling in the blanks between the two in only a few words. Then, when
                 you look at many fiction writing exercises, they encourage you to write a short story for practice. How does
                 that really help if you’re struggling with a short story in the first place, right?
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide><div className="slide_img_02">
                <div className="slide_img"><img src={avatar02} alt="" />
                </div>
                <h1>Jesica Fernandes</h1>
                <p>
                The challenge in writing a short story is to give it a complete introduction and
                 ending while filling in the blanks between the two in only a few words. Then, when
                 you look at many fiction writing exercises, they encourage you to write a short story for practice. How does
                 that really help if you’re struggling with a short story in the first place, right?
                </p>
            </div></SwiperSlide>
        <SwiperSlide><div className="slide_img_03">
                <div className="slide_img"><img src={avatar01} alt="" />
                </div>
                <h1>Jesica Fernandes</h1>
                <p>
                The challenge in writing a short story is to give it a complete introduction and
                 ending while filling in the blanks between the two in only a few words. Then, when
                 you look at many fiction writing exercises, they encourage you to write a short story for practice. How does
                 that really help if you’re struggling with a short story in the first place, right?
                </p>
            </div></SwiperSlide>
      </Swiper>
        </div>
      </section>
    </>
  );
}
