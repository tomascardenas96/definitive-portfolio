import React from "react";
import SectionHeader from "./ui/SectionHeader";
import NetworkCard from "./ui/NetworkCard";

function Networks() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6">
      <SectionHeader
        description="Conoce Mas Sobre Mi"
        icon="social"
        title="Mis Redes"
      />

      <ul className="grid h-[13rem] w-[80%] content-between xl:h-[11.5rem] 2xl:h-[13rem]">
        <NetworkCard icon="github" url="tomascardenas96" />
        <NetworkCard icon="linkedin" url="tomascardenas96" />
        <NetworkCard icon="x" url="tomascardenas96" />
      </ul>
    </div>
  );
}

export default Networks;
