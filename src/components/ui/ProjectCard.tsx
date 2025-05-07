import Image from "next/image";
import { FaEye, FaGithub } from "react-icons/fa";
import { MdBallot } from "react-icons/md";

function ProjectCard({ image, idx }: { image: string; idx: number }) {
  const styles = {
    icons:
      "size-[2.2rem] rounded-full border-[1.5px] grid place-content-center text-[1.2rem] shadow-md cursor-pointer xl:size-[2.2rem] xl:text-[1.1rem] project-btns-xmd",
  };

  return (
    <div className="flex flex-col items-center gap-1 my-2 xl:my-0 xl:gap-2 project-card-container-xmd">
      <div className="w-14 relative justify-self-center drop-shadow-2xl xs:w-16 xl:w-[3.8rem] project-image-xmd">
        <Image
          src={image}
          alt={`Slide ${idx}`}
          className="w-full object-cover rounded-md "
          width={80}
          height={80}
        />
      </div>

      <div>
        <h1 className="flex justify-center text-[.9rem] h-[1.6rem] font-[500] xs:text-[1rem] xl:text-[.75rem] xl:h-[1.1rem]">
          Cohesiva Integral
        </h1>
        <h2 className="flex justify-center text-[.72rem] gap-1">
          <span className="font-[500] text-[var(--details-primary-color)]">
            Rol Designado:
          </span>{" "}
          Full-Stack
        </h2>
      </div>

      <div className="flex gap-[.5rem] justify-center my-2 xl:my-1">
        <div className={styles.icons}>
          <FaGithub />
        </div>
        <div className={styles.icons}>
          <MdBallot />
        </div>
        <div className={styles.icons}>
          <FaEye />
        </div>
      </div>

      <div className="px-9 xl:px-[2rem]">
        <p className="text-[.65rem]/[1.2rem] line-clamp-4 xl:line-clamp-6 xl:text-[.65rem]/[1rem] projects-text-xmd">
          Web destinada a profesional en el ambito de la nutricion, cuyo
          proposito es centralizar diversos profesionales relacionados con la
          salud en un mismo lugar, donde podran ofrecer sus servicios y
          gestionar turnos...{" "}
          <span className="text-[var(--details-primary-color)] cursor-pointer">
            Ver mas
          </span>
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
