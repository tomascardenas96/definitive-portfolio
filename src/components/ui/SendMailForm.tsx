"use client";

import useSendMail from "@/hooks/useSendMail";
import { Session } from "next-auth";
import { FaHeart } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

export default function SendMailForm({ session }: { session: Session | null }) {
  const { handleSendMail, handleChangeMessage, message } = useSendMail(session);

  return (
    <div className="flex flex-col gap-3 bg-transparent">
      <form className="w-full flex flex-col gap-5" onSubmit={handleSendMail}>
        <h2 className="text-[1rem] flex justify-center m-3 mt-0 gap-2 items-center">
          <FaEnvelope /> Enviame un E-mail
        </h2>
        <textarea
          placeholder="Mensaje"
          className="
            resize-none 
            h-[10rem] 
            rounded-[.6rem] 
            outline-none 
            shadow-xl 
            border-1 
            border-[#c6c6c612] 
            text-[.74rem] 
            p-2 
            focus:border-[#9883e54e] 
            text-[var(--font-color)]
            dark:text-[var(--font-color-dark)]
            "
          value={message}
          onChange={handleChangeMessage}
        />
        <button className="text-[var(--inverted-font-color)] h-[2.8rem] rounded-[.6rem] bg-linear-to-l from-[#9883e5] via-[#cd4631] to-[#ffb100] shadow-xl cursor-pointer text-[.8rem] flex gap-2 items-center justify-center font-[500] active:scale-95 transition-all duration-300">
          Enviar Mensaje! <FaHeart className="inline-block" />
        </button>
      </form>
    </div>
  );
}
