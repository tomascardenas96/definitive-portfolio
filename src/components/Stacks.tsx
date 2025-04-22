import SectionHeader from "./ui/SectionHeader";
import StackList from "./ui/StackList";

function Stacks() {
  return (
    <div className="grid grid-rows-[4.5rem_1fr] py-[1rem] pb-[2.7rem] gap-3 items-center xl:py-0 xl:pb-[.7rem] xl:grid-rows-[3.5rem_1fr] 2xl:grid-rows-[4.2rem_1fr] 2xl:pb-[2.2rem]">
      <SectionHeader
        icon="rocket"
        title="Mi Stack"
        description="Tecnologias Utilizadas"
      />

      <div className="flex justify-center items-center w-full h-max">
        <StackList />
      </div>
    </div>
  );
}

export default Stacks;
