import { FaDocker, FaNode, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiNestjs, SiNextdotjs } from "react-icons/si";

function ProjectStackModal({ stack, id }: { stack: string[]; id: string }) {
  const styles = {
    icon: "text-xl",
    card: "text-xs flex flex-col items-center",
  };

  return (
    <div
      className="
        h-15 
        px-4
        absolute 
        top-9 
        shadow-xl 
        rounded-sm
        flex
        items-center
        justify-center
        gap-4
        text-[var(--font-color)] 
        dark:text-[var(--font-color-dark)] 
        bg-[var(--background)] 
        dark:bg-[var(--background-dark)]
        "
    >
      {stack.map((technology) => (
        <div key={`${technology}-${id}`}>
          {technology === "React" ? (
            <div className={styles.card}>
              <FaReact className={styles.icon} />
              <p>React</p>
            </div>
          ) : technology === "Next" ? (
            <div className={styles.card}>
              <SiNextdotjs className={styles.icon} />
              <p>Next</p>
            </div>
          ) : technology === "Nest" ? (
            <div className={styles.card}>
              <SiNestjs className={styles.icon} />
              <p>Nest</p>
            </div>
          ) : technology === "MySQL" ? (
            <div className={styles.card}>
              <GrMysql className={styles.icon} />
              <p>MySQL</p>
            </div>
          ) : technology === "Node" ? (
            <div className={styles.card}>
              <FaNode className={styles.icon} />
              <p>Node</p>
            </div>
          ) : technology === "Docker" ? (
            <div className={styles.card}>
              <FaDocker className={styles.icon} />
              <p>Docker</p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default ProjectStackModal;
