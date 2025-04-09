import SectionHeader from "./ui/SectionHeader";
import StackList from "./ui/StackList";

function Stacks() {
  return (
    <div className="grid grid-rows-[4.5rem_3fr] py-3 gap-1">
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
