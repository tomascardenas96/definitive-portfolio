import { MapPinned } from "lucide-react";
import { Mail } from "lucide-react";
import { Globe } from "lucide-react";
import { Handshake } from "lucide-react";
import { BicepsFlexed } from "lucide-react";
import { MdOutlineTimer } from "react-icons/md";

function SkillCard({
  description,
  icon,
}: {
  description: string;
  icon: string;
}) {
  const iconStyles =
    "w-4 h-4 text-[var(--details-primary-color)] skills-icons-xmd dark:text-[var(--details-primary-color-dark)] ";

  return (
    <div
      className="
          px-3 
          py-2 
          w-max  
          flex 
          gap-1 
          rounded-full 
          items-center 
          h-[1.7rem] 
          bg-[var(--inner-container-background)] 
          xs:h-[2.1rem] 
          xl:h-[1.8rem] 
          skills-card-xmd
          "
    >
      {icon === "location" && <MapPinned className={iconStyles} />}
      {icon === "language" && <Globe className={iconStyles} />}
      {icon === "friendship" && <Handshake className={iconStyles} />}
      {icon === "mail" && <Mail className={iconStyles} />}
      {icon === "responsability" && <BicepsFlexed className={iconStyles} />}
      {icon === "age" && <MdOutlineTimer className={iconStyles} />}
      <p className="text-[.6rem] decoration-none skills-description-xmd">
        {description}
      </p>
    </div>
  );
}

export default SkillCard;
