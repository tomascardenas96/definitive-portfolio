function ChatWindow({
  name,
  message,
  // createdAt,
  location,
  // image,
  isEven,
}: {
  name: string;
  message: string;
  createdAt: string;
  location: string;
  image: string;
  isEven: boolean;
}) {
  return (
    <div
      className={`h-[max-content] w-6/7 grid grid-rows-[3.5rem_1fr] container ${
        !isEven && "justify-self-end"
      }`}
    >
      <div className="border-b border-b-[var(--container-border)] px-3 grid items-center">
        <div className="grid items-center h-[2.3rem] gap-1 grid-cols-[2.5rem_1fr_max-content]">
          <div className="w-[2.3rem] h-[2.3rem] bg-slate-200 rounded-[.4rem]"></div>

          <div className="flex flex-col justify-center">
            <p className="text-[.7rem] font-medium">{name}</p>
            <span className="text-[.6rem]">{location}</span>
          </div>

          <div>
            <p className="text-[.6rem]">21 de Marzo de 2024</p>
          </div>
        </div>
      </div>

      <div className="px-3 py-3 pb-4">
        <p className="text-[.72rem]">{message}</p>
      </div>
    </div>
  );
}

export default ChatWindow;
