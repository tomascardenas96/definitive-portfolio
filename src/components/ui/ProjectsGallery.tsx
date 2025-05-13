"use client";

import { projects } from "@/__mocks__/projects.mock";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";

export default function ProjectsGallery() {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden z-20 relative flex xl:pt-2">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        pagination={{ clickable: false }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full mt-2 mr-0"
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            <ProjectCard
              idx={idx}
              logo={project.logo}
              name={project.name}
              width={project.width}
              height={project.height}
              role={project.role}
              images={project.images}
              videos={project.videos}
              github={project.github}
              stack={project.stack}
              id={project.id}
              shortDescription={project.shortDescription}
              description={project.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botones personalizados */}
      <button className="custom-swiper-button-prev text-[var(--details-primary-color)] grid place-content-center absolute top-[41%] left-2 -translate-y-1/2 p-2 rounded-full z-30 dark:text-[var(--details-primary-color-dark)]">
        <IoIosArrowBack />
      </button>
      <button className="custom-swiper-button-next text-[var(--details-primary-color)] grid place-content-center absolute top-[41%] right-2 -translate-y-1/2 p-2 rounded-full z-30 dark:text-[var(--details-primary-color-dark)]">
        <IoIosArrowForward />
      </button>
    </div>
  );
}
