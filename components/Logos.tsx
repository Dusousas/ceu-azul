"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  "/icons/woodson.png",
  "/icons/woodson.png",
  "/icons/woodson.png",
  "/icons/woodson.png",
  "/icons/woodson.png",
  "/icons/woodson.png",
];

export default function Logos() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="maxW">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 0, // sem pausa entre os slides
              disableOnInteraction: false,
            }}
            speed={4000} // velocidade da animação (quanto maior, mais rápido)
            spaceBetween={40}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="flex items-center"
          >
            {logos.concat(logos).map((logo, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <img className="w-[130px]" src={logo} alt={`Logo ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
