import ProjectCard from "./ui/ProjectCard";
import SectionHeader from "./ui/SectionHeader";

function Projects() {
  return (
    <div className="grid grid-rows-[5.5rem_1fr] h-full xl:grid-rows-[4.5rem_1fr] 2xl:grid-rows-[5.5rem_1fr]">
      <div className="grid place-content-center border-b border-[var(--container-border)] ">
        <SectionHeader
          description="Mis Proyectos"
          icon="projects"
          title="Proyectos"
        />
      </div>

      <div className="grid h-[100%] w-[100%] items-center justify-center pb-1 xl:pb-0 2xl:pb-4">
        <ul className="grid items-center gap-[.4rem] 2xl:gap-2 2xl:w-[14rem]">
          <ProjectCard title="Nutricoaching Integral" icon="gula" />
          <ProjectCard title="Roma Blog" icon="gula" />
          <ProjectCard title="Gula Fast Food" icon="gula" />
          <ProjectCard title="Supermercado 'Acuario'" icon="gula" />
        </ul>
      </div>
    </div>
  );
}

export default Projects;
