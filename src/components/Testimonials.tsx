"use client";

import { useCreateComment } from "@/hooks/useCreateComment";
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
  const [isScrollIgnored, setIsScrollIgnored] = useState<boolean>(false); // Para ignorar el scroll cuando se edita o elimina un comentario

  const scrollRef = useRef<HTMLDivElement>(null);

  const { newComment, handleSubmit, handleChange } = useCreateComment(
    setMessages,
    session
  );

  useEffect(() => {
    if (isScrollIgnored) {
      setIsScrollIgnored(false);
      return;
    }

    if (scrollRef.current && messages?.length > 0) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const buttonStyles =
    "rounded-full w-[2.5rem] h-[2.5rem]  grid place-content-center shadow-sm  transition-all duration-300 shadow-[#ffffff4c] xl:w-[2.1rem] xl:h-[2.1rem]";

  return (
    <div
      className="
      grid 
      grid-rows-[5.5rem_1fr] 
      xl:grid-rows-[4.5rem_1fr] 
      2xl:grid-rows-[5.5rem_1fr] 
      container-header-xmd
      "
    >
      <div
        className="
        grid 
        place-content-center 
        border-b 
        border-[var(--header-line)]
        dark:border-[var(--header-line-dark)]
        "
      >
        <SectionHeader
          description="Dejame un Comentario"
          icon="testimonials"
          title="Testimonios"
        />
      </div>

      <div
        className="
        grid 
        grid-rows-[1fr_3.5rem] 
        px-1
        gap-4 
        mt-1 
        max-h-[21.5rem]
        overflow-hidden 
        xl:h-[calc(44vh-5.5rem)] 
        xl:min-h-[16.4rem] 
        xl:max-h-[20rem] 
        xl:grid-rows-[1fr_3rem] 
        2xl:min-h-[15.875rem]"
      >
        <div
          className="
            flex 
            flex-col 
            overflow-y-auto 
            gap-3 
            px-1
            mt-2 
            xs:px-4 
            xl:scrollbar-thin 
            xl:scrollbar-thumb-[#ffffff48] 
            xl:scrollbar-track-[transparent]
            "
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
                isEven={index % 2 === 0}
                session={session}
                email={message.email}
                setMessages={setMessages}
                setIsScrollIgnored={setIsScrollIgnored}
                updatedAt={message.updatedAt}
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
          className="
          grid 
          grid-cols-[1fr_3rem] 
          px-1
          gap-2 
          xs:px-5 
          xl:gap-0 
          xl:px-2
          "
          onSubmit={handleSubmit}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              onChange={handleChange}
              value={newComment}
              className="
                bg-white 
                w-full
                h-[2.5rem] 
                rounded-full 
                border 
                border-[#b0b0b0] 
                shadow-sm 
                shadow-[#ffffff4c] 
                px-4
                text-[#00000093] 
                outline-none 
                text-[.9rem] 
                pr-16
                xl:h-[2.1rem] 
                "
              maxLength={255}
            />
            <span
              className={`absolute right-4 top-[35%] -translate-y-1/2 text-[#0000006a] text-[.7rem] ${
                newComment.length === 255 && "text-[#cf29298f] font-[500]"
              }`}
            >
              {newComment.length} / 255
            </span>
          </div>

          <div className="h-[2.5rem] flex justify-center xl:h-[2.1rem]">
            {newComment.length > 0 ? (
              <button
                className={`${buttonStyles} bg-[#3D8C18] cursor-pointer hover:bg-[#78ae60] text-[var(--inverted-font-color)] active:scale-90`}
              >
                <IoSend className="text-[1.3rem] xl:text-[1.1rem]" />
              </button>
            ) : (
              <button
                className={`${buttonStyles} bg-[#707070] hover:bg-[#9f9f9f] cursor-default text-[var(--inverted-font-color)]`}
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
