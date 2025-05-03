import ProjectsGallery from "./ui/ProjectsGallery";
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

      <ProjectsGallery />
    </div>
  );
}

export default Projects;
