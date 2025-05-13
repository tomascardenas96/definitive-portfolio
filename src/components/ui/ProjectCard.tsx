import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";
import { FaEye, FaGithub } from "react-icons/fa";
import { MdBallot } from "react-icons/md";
import PreviewModal from "./PreviewModal";
import ProjectStackModal from "./ProjectStackModal";

function ProjectCard({
  logo,
  idx,
  name,
  width,
  height,
  role,
  images,
  videos,
  github,
  stack,
  id,
  shortDescription,
  description,
}: {
  logo: string;
  idx: number;
  name: string;
  width: number;
  height: number;
  role: string;
  images: { url: string; width: number; height: number; isVideo: boolean }[];
  videos: { url: string; width: number; height: number; isVideo: boolean }[];
  github: {
    frontend: string | null;
    backend: string | null;
    mono: string | null;
  };
  stack: string[];
  id: string;
  shortDescription: string;
  description: string;
}) {
  const [isPhotosModalOpen, setIsPhotosModalOpen] = useState<boolean>(false);
  const [isGithubModalOpen, setIsGithubModalOpen] = useState<boolean>(false);
  const [isStackModalOpen, setIsStackModalOpen] = useState<boolean>(false);

  const handlePhotosModal = () => {
    setIsPhotosModalOpen((prev) => !prev);
  };

  const handleOpenGithub = () => {
    if (github.mono) {
      window.open(github.mono, "_blank");
    } else {
      setIsGithubModalOpen((prev) => !prev);
    }
  };

  const handleOpenStack = () => {
    setIsStackModalOpen((prev) => !prev);
  };

  const styles = {
    icons:
      "size-8 rounded-full border-[1.5px] grid place-content-center text-[1.2rem] shadow-md cursor-pointer xl:text-[1.1rem] project-btns-xmd",
    githubModal: `
      w-30 
      p-2
      rounded-xs
      bg-[var(--background)] 
      dark:bg-[var(--background-dark)] 
      absolute 
      -right-11 
      text-xs
      flex
      flex-col
      gap-1
      `,
    card: `
      flex
      flex-col
      gap-[.15rem]
      `,
    text: `
      text-[.6rem]
      text-center
      `,
  };

  return (
    <div
      className="
          flex flex-col 
          items-center 
          gap-1 
          my-2 
          xl:my-0 
          xl:gap-2
          project-card-container-xmd
          "
    >
      <div
        className="
          h-14 
          w-full 
          justify-center 
          flex 
          items-center 
          justify-self-center 
          drop-shadow-2xl 
          project-image-xmd
          "
      >
        <Image
          src={logo}
          alt={`Slide ${idx}`}
          width={width}
          height={height}
          className="object-cover"
        />
      </div>

      <div>
        <h1
          className="
          flex 
          justify-center 
          text-[.9rem] 
          h-[1.6rem] 
          font-[500] 
          xs:text-[1rem] 
          xl:text-[.75rem] 
          xl:h-[1.1rem]
          "
        >
          {name}
        </h1>
        <h2
          className="
              flex 
              justify-center 
              text-[.72rem] 
              gap-1"
        >
          <span className="font-[500] text-[var(--details-primary-color)] dark:text-[var(--details-primary-color-dark)]">
            Rol Designado:
          </span>{" "}
          {role}
        </h2>
      </div>

      <div className="flex gap-2 justify-center my-2 relative xl:my-1">
        <div className={styles.card}>
          <div className={styles.icons} onClick={handleOpenGithub}>
            <FaGithub />
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.icons} onClick={handleOpenStack}>
            <MdBallot />
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.icons} onClick={handlePhotosModal}>
            <FaEye />
          </div>
        </div>

        {isGithubModalOpen && github.frontend && github.backend && (
          <div className={styles.githubModal}>
            <p
              className="
                flex 
                items-center 
                h-8 
                cursor-pointer 
                rounded-sm
                px-2
                xl:transition-background
                xl:duration-300 
                xl:hover:bg-[var(--button-hover)]
                xl:dark:hover:bg-[var(--button-hover-dark)]
                xl:active:scale-95
                "
            >
              <Link href={github.frontend} target="_blank">
                Frontend
              </Link>
            </p>
            <p
              className="
                flex 
                items-center 
                h-8 
                cursor-pointer 
                rounded-sm
                px-2
                xl:transition-background
                xl:duration-300 
                xl:hover:bg-[var(--button-hover)]
                xl:dark:hover:bg-[var(--button-hover-dark)]
                xl:active:scale-95"
            >
              <Link href={github.backend} target="_blank">
                Backend
              </Link>
            </p>
          </div>
        )}

        {isStackModalOpen && <ProjectStackModal stack={stack} id={id} />}
      </div>

      <div className="px-9 xl:px-[2rem]">
        <p className="text-[.65rem]/[1.2rem] text-center line-clamp-4 xl:line-clamp-6 xl:text-[.65rem]/[1rem] projects-text-xmd">
          {shortDescription}
        </p>
      </div>

      {isPhotosModalOpen &&
        createPortal(
          <PreviewModal
            handlePhotosModal={handlePhotosModal}
            images={images}
            videos={videos}
          />,
          document.body
        )}
    </div>
  );
}

export default ProjectCard;
