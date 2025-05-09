import { BsRocketTakeoff } from "react-icons/bs";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { GrProjects } from "react-icons/gr";
import { IoShareSocialOutline } from "react-icons/io5";

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
    <div className="flex flex-col justify-center items-center gap-[.1rem]">
      <div className="flex gap-2 items-center">
        <p className="text-[var(--details-primary-color)] text-[.8rem] xs:text-[1rem] dark:text-[var(--details-primary-color-dark)]">
          {icon === "rocket" && <BsRocketTakeoff />}
          {icon === "testimonials" && <HiChatBubbleBottomCenterText />}
          {icon === "projects" && <GrProjects className="text-[.8rem] " />}
          {icon === "social" && <IoShareSocialOutline />}
        </p>

        <h2 className="text-[.75rem] font-light xs:text-[.9rem] xl:text-[.75rem] 2xl:text-[.8rem]">
          {title}
        </h2>
      </div>
      <h3 className="text-[.8rem] xs:text-[1rem] xl:text-[.85rem] 2xl:text-[.88rem]">
        {description}
      </h3>
    </div>
  );
}

export default SectionHeader;
