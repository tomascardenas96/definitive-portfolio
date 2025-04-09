import { BsRocketTakeoff } from "react-icons/bs";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { GrProjects } from "react-icons/gr";
import { FaProjectDiagram } from "react-icons/fa";

function SectionHeader({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-2 items-center">
        <p className="text-[var(--details-primary-color)] text-[1rem]">
          {icon === "rocket" && <BsRocketTakeoff />}
          {icon === "testimonials" && <HiChatBubbleBottomCenterText />}
          {icon === "projects" && <GrProjects />}
          {icon === "social" && <FaProjectDiagram />}
        </p>

        <h2 className="text-[.8rem] font-light">{title}</h2>
      </div>
      <h3 className="text-[.9rem]">{description}</h3>
    </div>
  );
}

export default SectionHeader;
