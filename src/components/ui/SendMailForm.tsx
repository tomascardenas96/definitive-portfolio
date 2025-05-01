"use client";

import useSendMail from "@/hooks/useSendMail";
import { FaHeart } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

export default function SendMailForm() {
  const { handleSendMail, handleChangeMessage, message } = useSendMail();

  return (
    <div className="flex flex-col gap-3 bg-transparent">
      <form className="w-full flex flex-col gap-3" onSubmit={handleSendMail}>
        <h2 className="text-[1rem] text-[var(--font-color)] flex justify-center m-3 mt-0 gap-2 items-center">
          <FaEnvelope /> Enviame un E-mail
        </h2>
        <textarea
          placeholder="Mensaje"
          className="resize-none h-[10rem] rounded-[.6rem] outline-none border-1 border-[#ffffff12] text-[.74rem] p-2"
          value={message}
          onChange={handleChangeMessage}
        />
        <button className="h-[2.8rem] rounded-[.6rem] bg-linear-to-l from-[#9883e5] via-[#cd4631] to-[#ffb100] shadow-xl cursor-pointer text-[.8rem] flex gap-2 items-center justify-center font-[500]">
          Enviar Mensaje! <FaHeart className="inline-block" />
        </button>
      </form>
    </div>
  );
}
