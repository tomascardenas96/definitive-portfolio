"use client";

import { CalendarCheck2, Mails } from "lucide-react";
import { useState } from "react";
import { GiQueenCrown } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";
import SendMailForm from "./ui/SendMailForm";
import Link from "next/link";
import { Session } from "next-auth";

function Footer({ session }: { session: Session | null }) {
  const [openedWindow, setOpenedWindow] = useState<string>("default");
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const styles = {
    icons: "text-[var(--details-primary-color)] w-[1.2rem] h-[1.2rem]",
    button:
      "h-[3rem] w-[100%] cursor-pointer flex justify-center items-center gap-3 text-[.7rem] container bg-[var(--inner-container-background)] rounded-[.7rem_!important] xl:h-[2.6rem] 2xl:h-[3rem]",
  };

  const handleFadeOut = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpenedWindow("default");
      setIsClosing(false);
    }, 300);
  };

  return (
    <footer className="h-[100%] w-3/4 flex flex-col justify-center gap-5 xl:gap-4">
      {openedWindow === "default" && (
        <div className="flex flex-col justify-center gap-5 animate-fade-in xl:gap-4">
          <div className="flex justify-center">
            <div className="h-[4.2rem] w-[4.2rem] rounded-full bg-[var(--inner-container-background)] border border-[var(--container-border)] grid place-content-center xl:h-[4.4rem] xl:w-[4.4rem]">
              <GiQueenCrown className="w-[1.8rem] h-[1.8rem] text-[var(--details-primary-color)] xl:h-[1.8rem] xl:w-[1.8rem]" />
            </div>
          </div>

          <div className="grid text-center gap-[.1rem] mb-1">
            <h1 className="text-[1rem] 2xl:text-[1.2rem]">Trabajemos Juntos</h1>
            <p className="text-[.73rem] header-font xl:text-[.65rem] 2xl:text-[.73rem]">
              Let’s Make Magic Happen Together!
            </p>
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <div className="rounded-[.6rem] xl:hover:bg-[var(--button-hover)] xl:transition-all xl:duration-300 xl:active:scale-95">
              <button
                className={`${styles.button}`}
                onClick={() => setOpenedWindow("mail")}
              >
                <Mails className={styles.icons} /> Enviame un E-mail
              </button>
            </div>

            <Link
              href="https://calendly.com/tomascardenas-dev/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 rounded-[.6rem] xl:hover:bg-[var(--button-hover)] xl:transition-all xl:duration-300 xl:active:scale-95"
            >
              <button className={styles.button}>
                <CalendarCheck2
                  className={`${styles.icons} !w-[1.1rem] !h-[1.1rem]`}
                />{" "}
                Agendar un Meeting
              </button>
            </Link>
          </div>
        </div>
      )}

      {openedWindow === "mail" && (
        <section className="h-full overflow-hidden ">
          <div
            className={`h-full gap-3 grid grid-rows-[2.5rem_1fr] ${isClosing ? "animate-fade-out" : "animate-fade-in"}`}
          >
            <p className="text-[.65rem] text-[var(--font-color)]  flex items-end xl:hover:text-[#a4a4a4] xl:transition-all xl:duration-300 xl:active:text-[#e4e4e4]">
              <span
                className="cursor-pointer flex gap-2 items-center"
                onClick={handleFadeOut}
              >
                <IoIosArrowBack /> Volver
              </span>
            </p>
            <SendMailForm session={session} />
          </div>
        </section>
      )}
    </footer>
  );
}

export default Footer;
