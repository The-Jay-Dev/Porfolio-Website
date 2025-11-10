import { useState } from "react";

export default function Carousel({ slides, slideIndex }) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className=" relative w-full h-full flex transition ease-out duration-300 "
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        {slides.map((s) => {
          return (
            <img
              src={s.url}
              key={s.id}
              className="flex-1 aspect-10/5 object-cover"
            />
          );
        })}
      </div>
    </div>
  );
}
