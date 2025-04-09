import SkillCard from "./ui/SkillCard";

function Skills() {
  return (
    <div className="border border-[var(--container-border)] rounded-xl py-2 px-2 flex flex-wrap gap-1 mt-1">
      <SkillCard icon="location" description="Benito Juarez, AR" />
      <SkillCard icon="language" description="Español & Ingles" />
      <SkillCard icon="friendship" description="Compañerismo" />
      <SkillCard icon="mail" description="tomascardenas.dev@gmail.com" />
      <SkillCard icon="responsability" description="Responsabilidad" />
    </div>
  );
}

export default Skills;
