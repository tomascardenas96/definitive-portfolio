import { Session } from "next-auth";
import Image from "next/image";
import { useState } from "react";

function ChatWindow({
  name,
  message,
  isEven,
  id,
  handleDelete,
  image,
  createdAt,
  session,
  email,
}: {
  name: string;
  message: string;
  isEven: boolean;
  id: string;
  handleDelete: ((id: string) => void) | null;
  image: string;
  createdAt: Date;
  session: Session | null;
  email: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const createdDate = new Date(createdAt);

  const months = [
    "Enero",
    "Feberero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const day = createdDate.getDate();
  const month = months[createdDate.getMonth()];
  const year = createdDate.getFullYear();

  const formattedDate = `${day} de ${month} del ${year}`;

  const isOwner =
    session?.user?.email === email ||
    session?.user?.email === "tomascardenas.dev@gmail.com";

  const styles = {
    optionsButton:
      "cursor-pointer hover:bg-[#414141] active:bg-[#696969] p-1 rounded-[.2rem] select-none transition-all duration-300",
  };

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const onDelete = () => {
    if (id && handleDelete) {
      handleOpenModal();
      handleDelete(id);
    }
  };

  return (
    <div
      className={`h-[max-content] w-4/5 grid grid-rows-[3.5rem_1fr] container relative ${
        !isEven && "self-end"
      }`}
    >
      <div className="border-b border-b-[var(--container-border)] px-3 grid items-center">
        <div className="grid items-center h-[2.3rem] gap-1 grid-cols-[2.5rem_1fr_max-content]">
          <div className="w-[2.3rem] h-[2.3rem] rounded-[.4rem] grid place-items-center">
            <Image
              src={image}
              alt={name}
              className="rounded-full"
              width={32}
              height={32}
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[.7rem] font-medium">{name}</p>
            <span className="text-[.6rem]">Benito Juarez, AR</span>
          </div>

          <div>
            {session?.user && (
              <p
                className="h-[1rem] flex items-end justify-self-end text-xl w-5 justify-center cursor-pointer"
                onClick={() => handleOpenModal()}
              >
                ...
              </p>
            )}
            <p className="text-[.6rem]">{formattedDate}</p>
          </div>
        </div>
      </div>

      <div className="px-3 py-3 pb-4">
        <p className="text-[.72rem] break-words w-[16.5rem]">{message}</p>
      </div>

      {/* Ventana modal de opciones */}

      {isOpen && (
        <div className="absolute w-[10rem] rounded-[.2rem] right-8 top-3 bg-[#313131] text-[.8rem] p-2 flex flex-col gap-2 transition-all duration-300">
          {isOwner && (
            <p className={styles.optionsButton} onClick={() => onDelete()}>
              Eliminar
            </p>
          )}
          {isOwner ? (
            <p className={styles.optionsButton}>Editar</p>
          ) : (
            <p
              className={`${styles.optionsButton} !cursor-not-allowed hover:bg-transparent active:bg-transparent text-[#696969]`}
            >
              Editar
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default ChatWindow;
