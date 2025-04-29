"use client";

import { useCreateComment } from "@/hooks/useCreateComment";
import useDeleteMessage from "@/hooks/useDeleteMessage";
import useGetMessages from "@/hooks/useGetMessages";
import { Comment } from "@prisma/client";
import { Session } from "next-auth";
import { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import ChatWindow from "./ui/ChatWindow";
import SectionHeader from "./ui/SectionHeader";
import MessagesLoader from "./ui/loaders/MessagesLoader";

function Testimonials({ session }: { session: Session | null }) {
  const { messages, setMessages, isLoading } = useGetMessages();

  const [handleDelete, setHandleDelete] = useState<
    ((id: string) => void) | null
  >(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  const { newComment, handleSubmit, handleChange } =
    useCreateComment(setMessages);

  useEffect(() => {
    const fetchHandleDelete = async () => {
      const { handleDelete } = await useDeleteMessage(setMessages);
      setHandleDelete(() => handleDelete);
    };

    fetchHandleDelete();
  }, []);

  useEffect(() => {
    if (scrollRef.current && messages?.length > 0) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const buttonStyles =
    "rounded-full w-[2.5rem] h-[2.5rem]  grid place-content-center shadow-sm  transition-all duration-300 shadow-[#ffffff4c] xl:w-[2.1rem] xl:h-[2.1rem]";

  return (
    <div className="grid grid-rows-[5.5rem_1fr] xl:grid-rows-[4.5rem_1fr] 2xl:grid-rows-[5.5rem_1fr] tall:bg-red-500">
      <div className="grid place-content-center border-b border-[var(--container-border)]">
        <SectionHeader
          description="Dejame un Comentario"
          icon="testimonials"
          title="Testimonios"
        />
      </div>

      <div className="grid grid-rows-[1fr_3.5rem] px-1 gap-4 mt-1 max-h-[21.5rem] overflow-hidden xl:h-[calc(44vh-5.5rem)] xl:min-h-[14.375rem] xl:max-h-[26rem] xl:grid-rows-[1fr_3rem] 2xl:min-h-[18.7rem]">
        <div
          className="flex flex-col overflow-y-auto gap-3 px-4 mt-2 2xl:scrollbar-thin 2xl:scrollbar-thumb-[#ffffff48] 2xl:scrollbar-track-[transparent]"
          ref={scrollRef}
        >
          {!isLoading ? (
            messages?.map((message: Comment, index: number) => (
              <ChatWindow
                key={`message-${message.id}`}
                createdAt={message.createdAt}
                image={message.image}
                message={message.content}
                name={message.name}
                id={message.id}
                handleDelete={handleDelete}
                isEven={index % 2 === 0}
                session={session}
                email={message.email}
              />
            ))
          ) : (
            <>
              <MessagesLoader isEven={true} />
              <MessagesLoader isEven={false} />
              <MessagesLoader isEven={true} />
            </>
          )}
        </div>

        <form
          className="grid grid-cols-[1fr_3rem] px-5 gap-2 xl:gap-0 xl:px-2"
          onSubmit={handleSubmit}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              onChange={handleChange}
              value={newComment}
              className="bg-white w-full h-[2.5rem] rounded-full border border-[#b0b0b0] shadow-sm shadow-[#ffffff4c] px-4 text-[#00000093] outline-none text-[.9rem] xl:h-[2.1rem] pr-16"
              maxLength={255}
            />
            <span
              className={`absolute right-3 top-[36%] -translate-y-1/2 text-[#0000006a] text-[.7rem] ${
                newComment.length === 255 && "text-[#cf29298f] font-[500]"
              }`}
            >
              {newComment.length} / 255
            </span>
          </div>

          <div className="h-[2.5rem] flex justify-center xl:h-[2.1rem]">
            {newComment.length > 0 ? (
              <button
                className={`${buttonStyles} bg-[#3D8C18] cursor-pointer hover:bg-[#78ae60] active:scale-90`}
              >
                <IoSend className="text-[1.3rem] xl:text-[1.1rem]" />
              </button>
            ) : (
              <button
                className={`${buttonStyles} bg-[#707070] hover:bg-[#9f9f9f] cursor-default`}
                disabled
              >
                <IoSend className="text-[1.3rem] xl:text-[1.1rem]" />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Testimonials;
