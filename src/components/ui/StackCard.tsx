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
  return (
    <div className="flex gap-1 h-[100%] w-[100%] text-[.5rem] items-center justify-center">
      <p>
        {icon === "html" && <FaHtml5 className="text-[.9rem]"/>}
        {icon === "css" && <FaCss3 className="text-[.9rem]"/>}
        {icon === "js" && <IoLogoJavascript className="text-[.9rem]"/>}
        {icon === "ts" && <SiTypescript className="text-[.85rem]"/>}
        {icon === "node" && <FaNodeJs className="text-[.9rem]"/>}
        {icon === "nest" && <SiNestjs className="text-[.9rem]"/>}
        {icon === "react" && <FaReact className="text-[.9rem]"/>}
        {icon === "next" && <RiNextjsFill className="text-[.9rem]"/>}
        {icon === "astro" && <SiAstro className="text-[.9rem]"/>}
        {icon === "tailwind" && <RiTailwindCssFill className="text-[.9rem]"/>}
        {icon === "mysql" && <GrMysql className="text-[.9rem]"/>}
      </p>
      <h2>{title}</h2>
    </div>
  );
}

export default StackCard;
