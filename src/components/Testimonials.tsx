"use client";

import ChatWindow from "./ui/ChatWindow";
import SectionHeader from "./ui/SectionHeader";
import { IoSend } from "react-icons/io5";
import { messages } from "@/__mocks__/messages.mock";
import { useEffect, useRef } from "react";

function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="grid grid-rows-[5.5rem_1fr] xl:grid-rows-[4.5rem_1fr] 2xl:grid-rows-[5.5rem_1fr]">
      <div className="grid place-content-center border-b border-[var(--container-border)]">
        <SectionHeader
          description="Dejame un Comentario"
          icon="testimonials"
          title="Testimonios"
        />
      </div>

      <div className="grid grid-rows-[1fr_3.5rem] px-1 gap-4 mt-1 max-h-[19.7rem] overflow-hidden xl:h-[calc(44vh-5.5rem)] xl:min-h-[14.375rem] xl:max-h-[26rem] 2xl:min-h-[18.7rem]">
        <div
          className="grid overflow-y-auto gap-3 px-4 mt-2 2xl:scrollbar-thin 2xl:scrollbar 2xl:scrollbar-thumb-sky-700 2xl:scrollbar-track-sky-300 "
          ref={scrollRef}
        >
          {messages?.map((message, index) => (
            <ChatWindow
              key={`message-${message.id}`}
              createdAt={message.createdAt}
              image={message.image}
              location={message.location}
              message={message.message}
              name={message.name}
              isEven={index % 2 === 0}
            />
          ))}
        </div>

        <form className="grid grid-cols-[1fr_3rem] px-5 gap-2">
          <input
            type="text"
            placeholder="Escribe tu mensaje..."
            className="bg-white h-[2.5rem] rounded-full border border-[#b0b0b0] shadow-sm shadow-[#ffffff4c] px-4 text-[#00000093] outline-none text-[.9rem]"
          />

          <div className="h-[2.5rem] flex justify-center">
            <button className="rounded-full w-[2.5rem] h-[2.5rem] bg-[#3D8C18] grid place-content-center shadow-sm shadow-[#ffffff4c]">
              <IoSend className="text-[1.3rem]" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Testimonials;
