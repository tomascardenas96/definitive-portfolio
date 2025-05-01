import React from "react";
import SectionHeader from "./ui/SectionHeader";
import NetworkCard from "./ui/NetworkCard";
import Link from "next/link";

function Networks() {
  const styles = {
    link: "rounded-[.6rem] xl:hover:bg-[var(--button-hover)] xl:transition-all xl:duration-300 xl:active:scale-95",
  };

  return (
    <div className="flex flex-col items-center justify-center h-full gap-6 xl:pb-2">
      <SectionHeader
        description="Conoce Mas Sobre Mi"
        icon="social"
        title="Mis Redes"
      />

      <ul className="grid h-[13rem] w-[70%] content-between xl:h-[11.5rem]">
        <Link
          href="https://github.com/tomascardenas96"
          target="_blank"
          className={styles.link}
        >
          <NetworkCard icon="github" url="tomascardenas96" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/tomascardenas96/"
          target="_blank"
          className={styles.link}
        >
          <NetworkCard icon="linkedin" url="tomascardenas96" />
        </Link>

        <Link
          href="https://x.com/tomascardenas96"
          target="_blank"
          className={styles.link}
        >
          <NetworkCard icon="x" url="tomascardenas96" />
        </Link>
      </ul>
    </div>
  );
}

export default Networks;
