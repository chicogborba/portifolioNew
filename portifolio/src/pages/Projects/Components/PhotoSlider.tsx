import React, { useState } from "react";
import { EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PolaroidPhoto from "../../../components/PolaroidPhoto";
import { photoSliderData } from "./PhotoSliderData/PhotoSliderData";
import { IoCloseSharp } from "react-icons/io5";

interface PhotoSliderProps {
  projectId: string;
}

const PhotoSlider = ({ projectId }: PhotoSliderProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  
  // Função para fechar o modal
  const closeModal = () => setSelectedPhoto(null);

  // Cálculo responsivo de slides
  const getSlidesPerView = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1.2;
    if (window.innerWidth < 768) return 1.6;
    if (window.innerWidth < 1024) return 2.2;
    if (window.innerWidth < 1280) return 2.4;
    return 3;
  };

  const photos = photoSliderData[projectId as keyof typeof photoSliderData] || photoSliderData[1];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Slider principal */}
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
        slidesPerView={getSlidesPerView()}
        centeredSlides={true}
      >
        {photos.map((photo, index) => (
          <SwiperSlide 
            key={index}
            onClick={() => setSelectedPhoto(photo.img)}
            className="cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <PolaroidPhoto img={photo.img} title={photo.title} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal de Lightbox */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            {/* Botão de fechar */}
            <button
              onClick={closeModal}
              className="absolute -top-8 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Fechar visualização"
            >
              <IoCloseSharp className="w-8 h-8" />
            </button>

            {/* Imagem ampliada */}
            <div className="h-full w-full flex items-center justify-center">
              <img
                src={selectedPhoto}
                alt="Visualização ampliada"
                className="object-contain max-h-[80vh] rounded-lg shadow-2xl cursor-zoom-out"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoSlider;