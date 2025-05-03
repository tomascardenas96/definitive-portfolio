import SkillCard from "./ui/SkillCard";

function Skills() {
  return (
    <div className="rounded-xl py-2 px-2 flex flex-wrap gap-1 mt-1">
      <SkillCard icon="location" description="Benito Juarez, AR" />
      <SkillCard icon="age" description="28 Años" />
      <SkillCard icon="language" description="Español & Ingles" />
      <SkillCard icon="friendship" description="Compañerismo" />
      <SkillCard icon="responsability" description="Responsabilidad" />
      <SkillCard icon="mail" description="tomascardenas.dev@gmail.com" />
    </div>
  );
}

export default Skills;
