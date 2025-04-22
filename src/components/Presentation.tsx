import { CloudDownload, Dot } from "lucide-react";
import Link from "next/link";
import React from "react";

function Presentation() {
  return (
    <div className="grid grid-cols-[7rem_1fr_max-content] gap-3 2xl:grid-cols-[7.2rem_1fr_max-content] 2xl:gap-4">
      <div className="relative rounded-xl w-[7rem] h-[7rem] bg-[#ffffff11] xl:w-[6rem] xl:h-[6rem] 2xl:w-[7.2rem] 2xl:h-[7.2rem]">
        {/* <Image
          src="/images/tomas-cardenas-pic.webp"
          alt="Foto de Tomas Cardenas"
          fill
          className="object-contain rounded-xl"
        /> */}
      </div>

      <div className="py-2 grid grid-rows-[max-content_max-content_1fr] 2xl:gap-1">
        <div>
          <p className="flex items-center w-max border border-[var(--container-border)] pr-4 px-1 rounded-3xl bg-[var(--inner-container-background)] 2xl:px-2 2xl:pr-4 2xl:h-[1.6rem]">
            <Dot className="text-[#2CB933] w-5 h-5" />
            <span className="text-[8px] pt-[.1rem] 2xl:text-[.55rem]">
              DISPONIBLE
            </span>
          </p>
        </div>

        <h2 className="flex h-full align-center text-[1.1rem] mt-1 font-medium 2xl:text-[1.2rem]">
          Tomás Cárdenas
        </h2>

        <p className="text-[10px] flex items-center gap-1 2xl:text-[.7rem]">
          Desarrollador Web{" "}
          <span className="text-[var(--details-primary-color)]">
            Full-stack!
          </span>
        </p>
      </div>

      <Link
        href="/cv/CV-Tomas-Cardenas-es-UPDATED.pdf"
        target="_blank"
        className="cursor-pointer h-max"
        rel="noopener noreferrer" // para evitar que se abra en una nueva pestaña y se cierre la actual
      >
        <div className="flex gap-2">
          <p className="text-[9px] max-w-[7ch] text-center h-10 flex items-center 2xl:text-[.6rem] cursor-pointer">
            Currilum Vitae
          </p>
          <button className="h-10 w-10 grid place-content-center border border-[var(--container-border)] bg-[var(--inner-container-background)] rounded-xl cursor-pointer">
            <CloudDownload className="w-[1rem] h-[1rem]" />
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Presentation;
