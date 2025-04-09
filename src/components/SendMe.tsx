import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

function SendMe() {
  return (
    <div className="flex flex-col gap-3">
      <p className="flex justify-center text-[.7rem]">Enviame un Mensaje</p>

      <div className="grid grid-cols-2 gap-2">
        <button className="h-14 rounded-2xl flex justify-center items-center text-xs border border-[var(--container-border)] bg-[var(--inner-container-background)] gap-2">
          <FaTelegramPlane className="text-[var(--details-primary-color)] w-5 h-5" />{" "}
          Por Telegram
        </button>
        <button className="h-14 rounded-2xl flex justify-center items-center text-xs border border-[var(--container-border)] bg-[var(--inner-container-background)] gap-2">
          <IoLogoWhatsapp className="text-[var(--details-primary-color)] w-5 h-5" />{" "}
          Por Whatsapp
        </button>
      </div>
    </div>
  );
}

export default SendMe;
