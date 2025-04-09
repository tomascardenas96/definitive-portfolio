import ChatWindow from "./ui/ChatWindow";
import SectionHeader from "./ui/SectionHeader";
import { IoSend } from "react-icons/io5";
import { messages } from "@/__mocks__/messages.mock";

function Testimonials() {
  console.log(messages);
  return (
    <div className="grid grid-rows-[4.5rem_1fr]">
      <div className="grid place-content-center border-b border-[var(--container-border)]">
        <SectionHeader
          description="Dejame un Comentario"
          icon="testimonials"
          title="Testimonios"
        />
      </div>

      <div className="grid grid-rows-[1fr_3.5rem] px-6 max-h-[19.5rem] gap-5 mt-1">
        <div className="grid overflow-y-auto gap-3">
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

        <form className="grid grid-cols-[1fr_3rem] gap-2">
          <input
            type="text"
            className="bg-white h-[2.5rem] rounded-full border border-[#b0b0b0] shadow-sm shadow-[#ffffff4c] px-4 text-[#00000093] outline-none"
          />

          <div className="h-[2.5rem] flex justify-center">
            <button className="rounded-full w-[2.5rem] h-[2.5rem] bg-[#3D8C18] grid place-content-center shadow-sm shadow-[#ffffff4c]">
              <IoSend className="text-[1.4rem]" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Testimonials;
