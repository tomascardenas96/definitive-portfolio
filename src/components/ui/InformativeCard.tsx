import { PanelsTopLeft } from "lucide-react";
import { Smile } from "lucide-react";
import { Sparkles } from "lucide-react";

function InformativeCard({
  num,
  title,
  plus,
  icon,
}: {
  num: number;
  title: string;
  plus?: boolean;
  icon: string;
}) {
  const iconStyles =
    "w-3 h-3 text-[var(--details-primary-color)] xl:w-4 xl:h-4 2xl:w-[.9rem] 2xl:h-[.9rem]";

  return (
    <div className="container-styles flex flex-col justify-center items-center pb-3">
      <h1
        className="
        text-center 
        text-[2rem] 
        pb-[.1rem] 
        font-medium 
        text-[var(--font-color)] 
        h-11 
        xs:h-[3.15rem] 
        xs:text-[2.3rem] 
        xl:h-[2.8rem] 
        xl:text-[2rem] 
        2xl:text-[2.4rem] 
        2xl:h-[3.7rem]
      "
      >
        {num}
        <span className="text-[var(--details-primary-color)]">
          {plus && "+"}
        </span>
      </h1>

      <div
        className="
        flex 
        justify-center 
        items-center 
        gap-1
        w-[85%] 
        border 
        border-[var(--container-border)] 
        bg-[var(--inner-container-background)] 
        rounded-4xl 
        h-6
        xs:h-8
        xl:h-[2rem]
        "
      >
        <p className="flex gap-2 xl:text-xl">
          {icon === "proyects" ? (
            <PanelsTopLeft className={iconStyles} />
          ) : icon === "clients" ? (
            <Smile className={iconStyles} />
          ) : (
            <Sparkles className={iconStyles} />
          )}
        </p>
        <p className="text-[.5rem] items-center header-font text-[var(--font-color)] xs:text-[.5625rem] xl:text-[.63rem]">
          {title}
        </p>
      </div>
    </div>
  );
}

export default InformativeCard;
