import React from "react";

interface PolaroidPhotoProps {
  img: string;
  title: string;
}

const PolaroidPhoto = ({ img, title }: PolaroidPhotoProps) => {
  return (
    <div
      className="bg-white p-5
            w-fit h-fit
            mb-10
            mt-10
            drop-shadow-retro
            flex flex-col justify-center items-center gap-5
            border-2 border-black"
    >
      <img src={img} width={520} height={"auto"} />
      <p className="font-Special-Elite sm:text-3xl text-2xl">{title}</p>
    </div>
  );
};

export default PolaroidPhoto;
