import React from "react";
import { EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PolaroidPhoto from "../../../components/PolaroidPhoto";

const PhotoSlider = () => {

    let SlidesPerView;
    if (window.innerWidth < 384) {
      SlidesPerView = 1;
    } else if (window.innerWidth < 512) {
      SlidesPerView = 1.1;
    } else if (window.innerWidth < 640) {
      SlidesPerView = 1.1;
    } else if (window.innerWidth < 768) {
      SlidesPerView = 1.6;
    } else if (window.innerWidth < 1024) {
      SlidesPerView = 2.2;
    } else if (window.innerWidth < 1280) {
      SlidesPerView = 2.4;
    } else {
      SlidesPerView = 2.4;
    }

  return (
    <>
      <Swiper
        keyboard={true}
        initialSlide={1}
        speed={600}
        modules={[EffectCoverflow]}
        effect={"coverflow"}
        spaceBetween={40}
        grabCursor={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        slidesPerView={SlidesPerView}
        centeredSlides={true}
      >
        <SwiperSlide>
          <PolaroidPhoto
            img={"https://i.imgur.com/sq2R1Mo.png"}
            title={"Design on figma1"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PolaroidPhoto
            img={"https://i.imgur.com/sq2R1Mo.png"}
            title={"Design on figma2"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PolaroidPhoto
            img={"https://i.imgur.com/sq2R1Mo.png"}
            title={"Design on figma3"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PolaroidPhoto
            img={"https://i.imgur.com/sq2R1Mo.png"}
            title={"Design on figma4"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PolaroidPhoto
            img={"https://i.imgur.com/sq2R1Mo.png"}
            title={"Design on figma5"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PhotoSlider;
