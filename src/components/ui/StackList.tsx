import StackCard from "./StackCard";

function StackList() {
  const cardStyle =
    "flex justify-center items-center text-xs border border-[var(--container-border)] rounded-[.5rem] bg-[var(--inner-container-background)]";

  const containerStyle = "flex gap-2 h-9 justify-center";

  return (
    <ul className="grid grid-rows-3 gap-y-2 w-full justify-center">
      <div className={`${containerStyle} `}>
        <li className={`${cardStyle} w-[5rem]`}>
          <StackCard icon="html" title="HTML" />
        </li>
        <li className={`${cardStyle} w-[5rem]`}>
          <StackCard icon="css" title="CSS" />
        </li>
        <li className={`${cardStyle} w-[5rem]`}>
          <StackCard icon="js" title="Javascript" />
        </li>
        <li className={`${cardStyle} w-[5rem]`}>
          <StackCard icon="ts" title="Typescript" />
        </li>
      </div>

      <div className={`${containerStyle}`}>
        <li className={`${cardStyle} w-[3.5rem]`}></li>
        <li className={`${cardStyle} w-[5rem]`}>
          <StackCard icon="node" title="NodeJS" />
        </li>
        <li className={`${cardStyle} w-[5rem]`}>
          <StackCard icon="nest" title="NestJS" />
        </li>
        <li className={`${cardStyle} w-[5rem]`}>
          <StackCard icon="react" title="React" />
        </li>
        <li className={`${cardStyle} w-[3.5rem]`}></li>
      </div>

      <div className={`${containerStyle} grid-cols-4`}>
        <li className={`${cardStyle} w-[5rem]`}>
          <StackCard icon="next" title="NextJS" />
        </li>
        <li className={`${cardStyle} w-[5rem]`}>
          <StackCard icon="astro" title="Astro" />
        </li>
        <li className={`${cardStyle} w-[5rem]`}>
          <StackCard icon="tailwind" title="TailwindCSS" />
        </li>
        <li className={`${cardStyle} w-[5rem]`}>
          <StackCard icon="mysql" title="MySQL" />
        </li>
      </div>
    </ul>
  );
}

export default StackList;
