import { CloudDownload, Dot } from "lucide-react";
import React from "react";

function Presentation() {
  return (
    <div className="grid grid-cols-[7rem_1fr_max-content] gap-3">
      <div className="bg-gray-400 rounded-xl"></div>

      <div className="py-2 grid grid-rows-[max-content_max-content_1fr]">
        <div>
          <p className="flex items-center w-max border border-[var(--container-border)] pr-4 px-1 rounded-2xl bg-[var(--inner-container-background)]">
            <Dot className="text-[#2CB933] w-6 h-6" />
            <span className="text-[8px] pt-[.1rem]">DISPONIBLE</span>
          </p>
        </div>

        <h2 className="flex h-full align-center text-[1.1rem] mt-1 font-medium">
          Tomás Cárdenas
        </h2>

        <p className="text-[10px] flex items-center gap-1">
          Desarrollador Web{" "}
          <span className="text-[var(--details-primary-color)]">
            Full-stack!
          </span>
        </p>
      </div>

      <div className="flex gap-2">
        <p className="text-[9px] max-w-[7ch] text-center h-10 flex items-center">
          Currilum Vitae
        </p>
        <button className="h-10 w-10 grid place-content-center border border-[var(--container-border)] bg-[var(--inner-container-background)] rounded-xl">
          <CloudDownload className="w-[1rem] h-[1rem]" />
        </button>
      </div>
    </div>
  );
}

export default Presentation;
