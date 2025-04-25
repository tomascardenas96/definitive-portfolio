"use client";

import { useCreateComment } from "@/hooks/useCreateComment";
import useDeleteMessage from "@/hooks/useDeleteMessage";
import useGetMessages from "@/hooks/useGetMessages";
import { Comment } from "@prisma/client";
import { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import ChatWindow from "./ui/ChatWindow";
import SectionHeader from "./ui/SectionHeader";

function Testimonials() {
  const [handleDelete, setHandleDelete] = useState<((id: string) => void) | null>(null);

  const { newComment, handleSubmit, handleChange } = useCreateComment();

  const { messages } = useGetMessages();

  useEffect(() => {
    const fetchHandleDelete = async () => {
      const { handleDelete } = await useDeleteMessage();
      setHandleDelete(() => handleDelete);
    };

    fetchHandleDelete();
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="grid grid-rows-[5.5rem_1fr] xl:grid-rows-[4.5rem_1fr] 2xl:grid-rows-[5.5rem_1fr]">
      <div className="grid place-content-center border-b border-[var(--container-border)]">
        <SectionHeader
          description="Dejame un Comentario"
          icon="testimonials"
          title="Testimonios"
        />
      </div>

      <div className="grid grid-rows-[1fr_3.5rem] px-1 gap-4 mt-1 max-h-[21.5rem] overflow-hidden xl:h-[calc(44vh-5.5rem)] xl:min-h-[14.375rem] xl:max-h-[26rem] xl:grid-rows-[1fr_3rem] 2xl:min-h-[18.7rem]">
        <div
          className="grid overflow-y-auto gap-3 px-4 mt-2 2xl:scrollbar-thin 2xl:scrollbar-thumb-[#ffffff48] 2xl:scrollbar-track-[transparent]"
          ref={scrollRef}
        >
          {messages?.map((message: Comment, index: number) => (
            <ChatWindow
              key={`message-${message.id}`}
              createdAt={message.createdAt.toString()}
              image={message.image}
              location={message.location}
              message={message.content}
              name={message.name}
              id={message.id}
              handleDelete={handleDelete}
              isEven={index % 2 === 0}
            />
          ))}
        </div>

        <form
          className="grid grid-cols-[1fr_3rem] px-5 gap-2 xl:gap-0 xl:px-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Escribe tu mensaje..."
            onChange={handleChange}
            value={newComment}
            className="bg-white h-[2.5rem] rounded-full border border-[#b0b0b0] shadow-sm shadow-[#ffffff4c] px-4 text-[#00000093] outline-none text-[.9rem] xl:h-[2.1rem]"
          />

          <div className="h-[2.5rem] flex justify-center xl:h-[2.1rem]">
            <button className="rounded-full w-[2.5rem] h-[2.5rem] bg-[#3D8C18] grid place-content-center shadow-sm shadow-[#ffffff4c] xl:w-[2.1rem] xl:h-[2.1rem]">
              <IoSend className="text-[1.3rem] cursor-pointer xl:text-[1.1rem]" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Testimonials;
