import React from "react";

function MessagesLoader({ isEven }: { isEven: boolean }) {
  const blockStyles = "bg-[#323232] rounded-[.1rem]";
  const contentStyles = `text-[.72rem] break-words w-[16.5rem] h-[.4rem] xl:w-[15rem] ${blockStyles}`;

  return (
    <div
      className={`h-[max-content] w-4/5 grid grid-rows-[3.5rem_1fr] container-styles border-none animate-pulse xl:w-6/7 ${
        !isEven && "self-end"
      }`}
    >
      <div className="border-b border-b-[var(--container-border)] px-3 grid items-center">
        <div className="grid items-center h-[2.3rem] gap-1 grid-cols-[2.5rem_1fr] ">
          <div
            className={`w-[2.3rem] h-[2.3rem] ${blockStyles} rounded-full grid place-items-center `}
          ></div>

          <div className="flex flex-col justify-center gap-1">
            <p className={`w-6/7 h-[.7rem] ${blockStyles}`}></p>
            <span className={`w-6/7 h-[.6rem] ${blockStyles}`}></span>
          </div>
        </div>
      </div>

      <div className="h-[4rem] flex flex-col gap-[.3rem] items-center p-3">
        <p className={contentStyles}></p>
        <p className={contentStyles}></p>
        <p className={contentStyles}></p>
      </div>
    </div>
  );
}

export default MessagesLoader;
