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
  return (
    <div className="container flex flex-col justify-center items-center pb-3">
      <h1 className="text-center text-[2.3rem] pb-[.1rem] font-semibold text-[var(--font-color)] h-[3.15rem]">
        {num}
        <span className="text-[var(--details-primary-color)]">
          {plus && "+"}
        </span>
      </h1>

      <div className="flex justify-center align-center gap-1 w-[7rem] border border-[var(--container-border)] bg-[var(--inner-container-background)] rounded-4xl py-2 ">
        <p className="flex gap-2">
          {icon === "proyects" ? (
            <PanelsTopLeft className="w-3 h-3 text-[var(--details-primary-color)]" />
          ) : icon === "clients" ? (
            <Smile className="w-3 h-3 text-[var(--details-primary-color)]" />
          ) : (
            <Sparkles className="w-3 h-3 text-[var(--details-primary-color)]" />
          )}
        </p>
        <p className="text-[9px] align-center text-[var(--font-color)]">
          {title}
        </p>
      </div>
    </div>
  );
}

export default InformativeCard;
