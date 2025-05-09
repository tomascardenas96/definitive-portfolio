import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

function SendMe() {
  const styles = {
    button: `
      h-11
      rounded-xl 
      flex 
      justify-center 
      items-center 
      text-[.6rem]
      border border-[var(--container-border)] 
      bg-[var(--inner-container-background)] 
      cursor-pointer 
      gap-2 xl:h-10 
      xs:text-[.7rem]
      xs:h-14
      xs:rounded-2xl 
      xl:hover:bg-[var(--button-hover)] 
      xl:dark:hover:bg-[var(--button-hover-dark)] 
      xl:transition-background
      xl:duration-300 
      xl:active:scale-95  
      2xl:h-12 
      contact-btns-xmd
      `,
    icon: "text-[var(--details-primary-color)] size-4 xs:size-5 dark:text-[var(--details-primary-color-dark)]",
  };

  return (
    <div className="flex flex-col gap-3">
      <p className="flex justify-center text-[.7rem]">Enviame un Mensaje</p>

      <div className="grid grid-cols-2 gap-2">
        <button className={styles.button}>
          <Link
            href="https://t.me/tomascardenas96"
            target="_blank"
            rel="noopener noreferrer" // para evitar que se abra en una nueva pestaña y se cierre la actual
            className="w-full h-full flex justify-center items-center gap-[.4rem]"
          >
            <FaTelegramPlane className={styles.icon} /> Por Telegram
          </Link>
        </button>

        <button className={styles.button}>
          <Link
            href="https://api.whatsapp.com/send?phone=5492281378525"
            target="_blank"
            rel="noopener noreferrer" // para evitar que se abra en una nueva pestaña y se cierre la actual
            className="w-full h-full flex justify-center items-center gap-[.4rem]"
          >
            <IoLogoWhatsapp className={styles.icon} /> Por Whatsapp
          </Link>
        </button>
      </div>
    </div>
  );
}

export default SendMe;
