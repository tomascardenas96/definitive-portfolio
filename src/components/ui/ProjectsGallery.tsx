// components/SwiperCarousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const projects = ["/images/nutricouching-logo.jpg", "/img.png", "/img2.png"];

export default function ProjectsGallery() {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg relative flex">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        pagination={{ clickable: false }}
        autoplay={{ delay: 6000 }}
        loop={false}
        className="w-full h-78 mt-2 mr-0"
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-[8rem] h-48 relative justify-self-center">
              <Image
                src={project}
                alt={`Slide ${idx}`}
                className="w-full object-cover rounded-md"
                width={100}
                height={100}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botones personalizados */}
      <button className="custom-swiper-button-prev grid place-content-center absolute top-[45%] left-4 -translate-y-1/2 p-2 rounded-full z-10">
        <IoIosArrowBack />
      </button>
      <button className="custom-swiper-button-next grid place-content-center absolute top-[45%] right-4 -translate-y-1/2 p-2 rounded-full z-10">
        <IoIosArrowForward />
      </button>
    </div>
  );
}
