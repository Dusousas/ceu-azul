"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const logos = [
  "/logos/logo1.webp",
  "/logos/logo2.webp",
  "/logos/logo3.webp",
  "/logos/logo4.webp",
  "/logos/logo5.webp",
  "/logos/logo6.webp",
  "/logos/logo7.webp",
];

export default function Logos() {
  return (
    <>
      <section className="bg-white py-10">
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
              <SwiperSlide key={index} className="flex">
                <div className="flex h-[110px] w-full items-center justify-center px-4">
                  <img
                    className="max-h-[72px] w-auto max-w-[170px] object-contain"
                    src={logo}
                    alt={`Logo ${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
