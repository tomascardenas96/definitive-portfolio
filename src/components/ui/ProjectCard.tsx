import { IoCheckmarkDoneSharp } from "react-icons/io5";

function ProjectCard({ title, icon }: { title: string; icon?: string }) {
  return (
    <li className="w-full h-[3.4rem] container bg-[var(--inner-container-background)] flex gap-2 items-center px-5 !rounded-[.5rem] xl:h-[2.9rem] 2xl:h-[3rem] 2xl:gap-3">
      <div className="w-[2.5rem] h-[2.5rem] rounded-md shadow-md shadow-[#0000009c] grid place-content-center xl:h-[1.8rem] xl:w-[1.8rem]">
        {icon === "nutricoaching" && <IoCheckmarkDoneSharp />}
        {icon === "roma" && <IoCheckmarkDoneSharp />}
        {icon === "gula" && <IoCheckmarkDoneSharp />}
        {icon === "portfolio" && <IoCheckmarkDoneSharp />}
        {icon === "acuario" && <IoCheckmarkDoneSharp />}
      </div>

      <div className="grid items-center">
        <p className="text-[.65rem]">{title}</p>
      </div>
    </li>
  );
}

export default ProjectCard;
