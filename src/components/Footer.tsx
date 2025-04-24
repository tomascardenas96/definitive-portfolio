import { GiQueenCrown } from "react-icons/gi";
import { Mails } from "lucide-react";
import { CalendarCheck2 } from "lucide-react";

function Footer() {
  const styles = {
    icons: "text-[var(--details-primary-color)] w-[1.2rem] h-[1.2rem]",
    button:
      "h-[3rem] w-[100%] flex justify-center items-center gap-3 text-[.7rem] container bg-[var(--inner-container-background)] rounded-[.7rem_!important] xl:h-[2.6rem] 2xl:h-[3rem]",
  };

  return (
    <footer className="h-[85%] w-5/6 flex flex-col justify-center gap-5 xl:gap-4">
      <div className="flex justify-center">
        <div className="h-[5rem] w-[5rem] rounded-full bg-[var(--inner-container-background)] border border-[var(--container-border)] grid place-content-center xl:h-[4.6rem] xl:w-[4.6rem]">
          <GiQueenCrown className="w-[1.8rem] h-[1.8rem] text-[var(--details-primary-color)] xl:h-[1.8rem] xl:w-[1.8rem]" />
        </div>
      </div>

      <div className="grid text-center gap-[.1rem] mb-1">
        <h1 className="text-[1rem] xl:text-[1rem] 2xl:text-[1.2rem]">
          Trabajemos Juntos
        </h1>
        <p className="text-[.73rem] header-font xl:text-[.65rem] 2xl:text-[.73rem]">
          Let’s Make Magic Happen Together!
        </p>
      </div>

      <div className="flex flex-col gap-2 mb-6">
        <button className={styles.button}>
          <Mails className={styles.icons} /> Enviame un E-mail
        </button>
        <button className={styles.button}>
          <CalendarCheck2 className={styles.icons} /> Agendar un Meeting
        </button>
      </div>
    </footer>
  );
}

export default Footer;
