import { CloudDownload, Dot } from "lucide-react";
import Link from "next/link";
import React from "react";

function Presentation() {
  return (
    <div className="flex gap-3 relative  2xl:gap-4">
      <div
        className="
        relative 
        rounded-xl 
        size-22 
        bg-[#ffffff11] 
        xs:size-28 
        xl:w-[6rem] 
        xl:h-[6rem] 
        2xl:size-[7.2rem] 
        picture-xmd
      "
      >
        {/* <Image
          src="/images/tomas-cardenas-pic.webp"
          alt="Foto de Tomas Cardenas"
          fill
          className="object-contain rounded-xl"
        /> */}
      </div>

      <div className="py-2 grid grid-rows-[max-content_max-content_1fr] 2xl:gap-1">
        <div>
          <p
            className="
            flex 
            items-center 
            w-max 
            border 
            border-[var(--container-border)] 
            pr-3 
            px-0
            rounded-3xl 
            bg-[var(--inner-container-background)] 
            available-xmd 
            xs:pr-4
            xs:px-1
            2xl:px-2 
            2xl:pr-4 
            2xl:h-[1.6rem] "
          >
            <Dot className="text-[#2CB933] w-5 h-5" />
            <span className="text-[7px] pt-[.1rem] xs:text-[8px] 2xl:text-[.55rem]">
              DISPONIBLE
            </span>
          </p>
        </div>

        <h2 className="flex h-full align-center text-[.9rem] mt-1 font-medium xs:text-[1.1rem] 2xl:text-[1.2rem] my-name-xmd ">
          Tomás Cárdenas
        </h2>

        <p className="text-[10px] flex items-center gap-1 2xl:text-[.7rem] header-font xl:h-max xl:pt-1">
          Desarrollador Web{" "}
          <span className="text-[var(--details-primary-color)]">
            Full-stack!
          </span>
        </p>
      </div>

      <Link
        href="/cv/CV-Tomas-Cardenas-es-UPDATED.pdf"
        target="_blank"
        className="cursor-pointer h-max absolute right-0 top-0"
        rel="noopener noreferrer" // para evitar que se abra en una nueva pestaña y se cierre la actual
      >
        <div className="flex gap-2 cursor-pointer xl:hover:text-[#f4f4f464] xl:transition-all xl:duration-300">
          <p className="hidden text-[9px] max-w-[7ch] text-center items-center h-10 xs:flex 2xs:flex 2xl:text-[.6rem]">
            Currilum Vitae
          </p>
          <button
            className="
            size-8
            grid
            place-content-center 
            border 
            border-[var(--container-border)] 
            bg-[var(--inner-container-background)]
            rounded-md
            cursor-pointer
            xs:rounded-xl
            xs:size-10
            "
          >
            <CloudDownload className="size-[14px] xs:size-4" />
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Presentation;
