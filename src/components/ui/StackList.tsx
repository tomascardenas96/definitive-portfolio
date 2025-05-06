import React from "react";
import StackCard from "./StackCard";

function StackList() {
  const styles = {
    container: `
    relative 
    flex 
    h-12
    gap-1
    overflow-hidden 
    2xl:h-[3rem]
    `,

    card: `
    flex 
    justify-center 
    items-center 
    bg-[#ffffff06]
    w-[5.5rem]
    rounded-[.5rem]
    2xl:w-[6rem]
    `,

    masked: `
    [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] 
    mask-repeat-no-repeat 
    mask-size-full
    `,
  };

  return (
    <div>
      <div
        className={`${styles.masked} max-w-[18.5rem] grid grid-rows-2 gap-y-1 2xl:max-w-[27rem]`}
      >
        <div className={`${styles.container} `}>
          <ul className={`flex gap-[.3rem] animate-marquee w-max`}>
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={`marquee-${i}`}>
                <li className={`${styles.card}`}>
                  <StackCard icon="html" title="HTML" />
                </li>
                <li className={`${styles.card}`}>
                  <StackCard icon="css" title="CSS" />
                </li>
                <li className={`${styles.card}`}>
                  <StackCard icon="js" title="Javascript" />
                </li>
                <li className={`${styles.card}`}>
                  <StackCard icon="ts" title="Typescript" />
                </li>
                <li className={`${styles.card}`}>
                  <StackCard icon="node" title="NodeJS" />
                </li>
                <li className={`${styles.card}`}>
                  <StackCard icon="nest" title="NestJS" />
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>

        <div className={`${styles.container} `}>
          <ul className={`flex gap-[.3rem] animate-marquee-reverse w-max `}>
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={`reverse-marquee-${i}`}>
                <li className={`${styles.card}`}>
                  <StackCard icon="react" title="React" />
                </li>
                <li className={`${styles.card}`}>
                  <StackCard icon="next" title="Next js" />
                </li>
                <li className={`${styles.card}`}>
                  <StackCard icon="astro" title="Astro js" />
                </li>
                <li className={`${styles.card}`}>
                  <StackCard icon="tailwind" title="Tailwind" />
                </li>
                <li className={`${styles.card}`}>
                  <StackCard icon="mysql" title="MySQL" />
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StackList;
