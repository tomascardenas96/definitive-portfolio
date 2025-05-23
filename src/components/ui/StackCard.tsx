import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNestjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiAstro } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

function StackCard({ icon, title }: { icon: string; title: string }) {
  const iconStyle = "text-[1.3rem] 2xl:text-[1.5rem]";

  return (
    <div className="flex gap-1 h-[100%] w-[100%] items-center justify-center text-[#8f8f8fee]">
      <p>
        {icon === "html" && <FaHtml5 className={iconStyle} />}
        {icon === "css" && <FaCss3 className={iconStyle} />}
        {icon === "js" && <IoLogoJavascript className={iconStyle} />}
        {icon === "ts" && (
          <SiTypescript className="text-[1.15rem] 2xl:text-[1.4rem]" />
        )}
        {icon === "node" && <FaNodeJs className={iconStyle} />}
        {icon === "nest" && <SiNestjs className={iconStyle} />}
        {icon === "react" && <FaReact className={iconStyle} />}
        {icon === "next" && <RiNextjsFill className={iconStyle} />}
        {icon === "astro" && <SiAstro className={iconStyle} />}
        {icon === "tailwind" && <RiTailwindCssFill className={iconStyle} />}
        {icon === "mysql" && <GrMysql className={iconStyle} />}
      </p>
      <h2 className="text-[.75rem] header-font">{title}</h2>
    </div>
  );
}

export default StackCard;
