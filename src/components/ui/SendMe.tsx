import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

function SendMe() {
  const styles = {
    button:
      "h-14 rounded-2xl flex justify-center items-center text-xs border border-[var(--container-border)] bg-[var(--inner-container-background)] gap-2 xl:h-10 2xl:h-12",
    icon: "text-[var(--details-primary-color)] w-5 h-5",
  };

  return (
    <div className="flex flex-col gap-3">
      <p className="flex justify-center text-[.7rem]">Enviame un Mensaje</p>

      <div className="grid grid-cols-2 gap-2">
        <button className={styles.button}>
          <FaTelegramPlane className={styles.icon} /> Por Telegram
        </button>
        <button className={styles.button}>
          <IoLogoWhatsapp className={styles.icon} /> Por Whatsapp
        </button>
      </div>
    </div>
  );
}

export default SendMe;
