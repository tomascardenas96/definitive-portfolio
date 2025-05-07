import SkillCard from "./ui/SkillCard";

function Skills() {
  return (
    <div className="rounded-xl py-2 px-2 flex flex-col overflow-x-auto no-scrollbar gap-1 mt-1">
      <div className="grid gap-1 grid-cols-[repeat(3,max-content)]">
        <SkillCard icon="location" description="Benito Juarez, AR" />
        <SkillCard icon="language" description="Español & Ingles" />
        <SkillCard icon="mail" description="tomascardenas.dev@gmail.com" />
      </div>

      <div className="grid gap-1 grid-cols-[repeat(3,max-content)]">
        <SkillCard icon="friendship" description="Compañerismo" />
        <SkillCard icon="age" description="28 Años" />
        <SkillCard icon="responsability" description="Responsabilidad" />
      </div>
    </div>
  );
}

export default Skills;
