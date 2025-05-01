import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function NetworkCard({ icon, url }: { icon: string; url: string }) {
  const iconStyles = "h-[1.1rem] w-[1.1rem]";

  return (
    <li className="h-[4rem] container bg-[var(--inner-container-background)] flex gap-3 justify-center items-center xl:h-[3.5rem] xl:!rounded-[.6rem] ">
      <div className="w-[2.8rem] h-[2.8rem] grid place-content-center rounded-2xl shadow-md shadow-[#0000009c] xl:w-[2.5rem] xl:h-[2.5rem]">
        {icon === "github" && <FaGithub className={iconStyles} />}
        {icon === "linkedin" && <FaLinkedin className={iconStyles} />}
        {icon === "x" && <FaXTwitter className={iconStyles} />}
      </div>

      <p className="text-[.8rem] xl:text-[.7rem]">@{url}</p>
    </li>
  );
}

export default NetworkCard;
