"use client";

import { MoonIcon, PanelsTopLeft, SunIcon } from "lucide-react";
import { Smile } from "lucide-react";
import { Sparkles } from "lucide-react";
import ThemeToggle from "../../hooks/useThemeToggle";
import useThemeToggle from "../../hooks/useThemeToggle";

function InformativeCard({
  num,
  title,
  plus,
  icon,
}: {
  num?: number;
  title?: string;
  plus?: boolean;
  icon?: string;
}) {
  const { darkMode, toggleDarkMode } = useThemeToggle();

  const iconStyles =
    "w-3 h-3 text-[var(--details-primary-color)] xl:w-4 xl:h-4 2xl:w-[.9rem] 2xl:h-[.9rem] dark:text-[var(--details-primary-color-dark)]";

  return (
    <div
      className="
        container-styles 
        bg-[var(--container-background)]  
        dark:bg-[var(--container-background-dark)] 
        flex flex-col 
        justify-center 
        items-center 
        pb-3
      "
    >
      {!num && !title && !icon ? (
        <div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <SunIcon className="h-5 w-5 text-yellow-300" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>
      ) : (
        <>
          <h1
            className="
              text-center 
              text-[2rem] 
              pb-[.1rem] 
              font-medium 
              text-[var(--font-color)] 
              h-11
              xs:h-[2.8rem] 
              xs:text-[2.3rem] 
              xl:h-[2.8rem] 
              xl:text-[2rem] 
              2xl:text-[2.4rem] 
              2xl:h-[3.3rem]
              dark:text-[var(--font-color-dark)]
      "
          >
            {num}
            <span className="text-[var(--details-primary-color)] dark:text-[var(--details-primary-color-dark)]">
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
              border-none 
              bg-[var(--info-tile-bg-title)] 
              rounded-4xl 
              h-6
              xs:h-8
              xl:h-[2rem]
              dark:border-[var(--container-border)] 
              dark:bg-[var(--info-tile-bg-title-dark)] 
              
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
            <p className="text-[.5rem] items-center header-font text-[var(--font-color)] xs:text-[.5625rem] xl:text-[.63rem] dark:text-[var(--font-color-dark)]">
              {title}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default InformativeCard;
