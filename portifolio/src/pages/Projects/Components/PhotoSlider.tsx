import React from "react";
import { EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PolaroidPhoto from "../../../components/PolaroidPhoto";
import { photoSliderData } from "./PhotoSliderData/PhotoSliderData";

const PhotoSlider = () => {
  let SlidesPerView;
  if (window.innerWidth < 640) {
    SlidesPerView = 1.2;
  } else if (window.innerWidth < 768) {
    SlidesPerView = 1.6;
  } else if (window.innerWidth < 1024) {
    SlidesPerView = 2.2;
  } else if (window.innerWidth < 1280) {
    SlidesPerView = 2.4;
  } else {
    SlidesPerView = 3;
  }

  return (
    <div className="max-w-7xl mx-auto">
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
        {photoSliderData.map((photo) => (
          <SwiperSlide>
            <PolaroidPhoto img={photo.img} title={photo.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoSlider;
