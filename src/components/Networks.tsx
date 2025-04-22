import React from "react";
import SectionHeader from "./ui/SectionHeader";
import NetworkCard from "./ui/NetworkCard";
import Link from "next/link";

function Networks() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6 xl:pb-2">
      <SectionHeader
        description="Conoce Mas Sobre Mi"
        icon="social"
        title="Mis Redes"
      />

      <ul className="grid h-[13rem] w-[80%] content-between xl:h-[11.5rem]">
        <Link href="https://github.com/tomascardenas96" target="_blank">
          <NetworkCard icon="github" url="tomascardenas96" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/tomascardenas96/"
          target="_blank"
        >
          <NetworkCard icon="linkedin" url="tomascardenas96" />
        </Link>

        <Link href="https://x.com/tomascardenas96" target="_blank">
          <NetworkCard icon="x" url="tomascardenas96" />
        </Link>
      </ul>
    </div>
  );
}

export default Networks;
