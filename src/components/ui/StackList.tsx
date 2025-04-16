import StackCard from "./StackCard";

function StackList() {
  const styles = {
    container: "flex gap-[.3rem] h-9 justify-center 2xl:h-[2.4rem] 2xl:gap-2",
    card: "flex justify-center items-center text-xs border border-[var(--container-border)] rounded-[.5rem] bg-[var(--inner-container-background)] w-[5rem] 2xl:w-[6rem]",
    emptyContainer:
      "hidden container w-[4rem] !rounded-[.5rem] xl:inline-block 2xl:w-[5.3rem]",
  };

  return (
    <ul className="grid grid-rows-3 gap-y-1 w-full justify-center 2xl:gap-y-2">
      <div className={`${styles.container} `}>
        <li className={`${styles.card} `}>
          <StackCard icon="html" title="HTML" />
        </li>
        <li className={`${styles.card} `}>
          <StackCard icon="css" title="CSS" />
        </li>
        <li className={`${styles.card} `}>
          <StackCard icon="js" title="Javascript" />
        </li>
        <li className={`${styles.card} `}>
          <StackCard icon="ts" title="Typescript" />
        </li>
      </div>

      <div className={`${styles.container}`}>
        <li className={styles.emptyContainer}></li>
        <li className={`${styles.card} `}>
          <StackCard icon="node" title="NodeJS" />
        </li>
        <li className={`${styles.card} `}>
          <StackCard icon="nest" title="NestJS" />
        </li>
        <li className={`${styles.card} `}>
          <StackCard icon="react" title="React" />
        </li>
        <li className={styles.emptyContainer}></li>
      </div>

      <div className={`${styles.container} grid-cols-4`}>
        <li className={`${styles.card} `}>
          <StackCard icon="next" title="NextJS" />
        </li>
        <li className={`${styles.card} `}>
          <StackCard icon="astro" title="Astro" />
        </li>
        <li className={`${styles.card} `}>
          <StackCard icon="tailwind" title="Tailwind" />
        </li>
        <li className={`${styles.card} `}>
          <StackCard icon="mysql" title="MySQL" />
        </li>
      </div>
    </ul>
  );
}

export default StackList;
