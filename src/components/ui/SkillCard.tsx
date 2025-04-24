import { MapPinned } from "lucide-react";
import { Mail } from "lucide-react";
import { Globe } from "lucide-react";
import { Handshake } from "lucide-react";
import { BicepsFlexed } from "lucide-react";

function SkillCard({
  description,
  icon,
}: {
  description: string;
  icon: string;
}) {
  const iconStyles = "w-3 h-3 text-[var(--details-primary-color)]";

  return (
    <div className="px-3 py-2 w-max border border-[var(--container-border)] flex gap-2 rounded-full items-center h-[2.1rem] bg-[var(--inner-container-background)] xl:h-[1.8rem]">
      {icon === "location" && <MapPinned className={iconStyles} />}
      {icon === "language" && <Globe className={iconStyles} />}
      {icon === "friendship" && <Handshake className={iconStyles} />}
      {icon === "mail" && <Mail className={iconStyles} />}
      {icon === "responsability" && <BicepsFlexed className={iconStyles} />}
      <p className="text-[.5rem]">{description}</p>
    </div>
  );
}

export default SkillCard;
