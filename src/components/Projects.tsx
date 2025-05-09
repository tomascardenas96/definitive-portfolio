import ProjectsGallery from "./ui/ProjectsGallery";
import SectionHeader from "./ui/SectionHeader";

function Projects() {
  return (
    <div className="grid grid-rows-[5.5rem_1fr] z-10 h-full xl:grid-rows-[4.5rem_1fr] 2xl:grid-rows-[5.5rem_1fr] container-header-xmd">
      <div className="grid place-content-center border-b border-[var(--header-line)] dark:border-[var(--header-line-dark)]">
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
