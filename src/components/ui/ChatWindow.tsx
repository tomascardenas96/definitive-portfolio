import useDeleteMessage from "@/hooks/useDeleteMessage";
import useUploadComment from "@/hooks/useUploadComment";
import { Comment } from "@prisma/client";
import { Session } from "next-auth";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { TfiBackLeft } from "react-icons/tfi";

function ChatWindow({
  name,
  message,
  isEven,
  id,
  image,
  createdAt,
  updatedAt,
  session,
  email,
  setMessages,
  setIsScrollIgnored,
}: {
  name: string;
  message: string;
  isEven: boolean;
  id: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  session: Session | null;
  email: string;
  setMessages: React.Dispatch<React.SetStateAction<Comment[]>>;
  setIsScrollIgnored: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const uploadInputRef = useRef<HTMLTextAreaElement>(null);

  const {
    handleEditMode,
    isEditMode,
    editMessageInput,
    handleChangeEditMessageInput,
    handleKeyDownEditMessage,
    isEdited,
  } = useUploadComment(message, setIsOpen, setMessages, setIsScrollIgnored);

  const { handleDelete } = useDeleteMessage(setMessages, setIsScrollIgnored);

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

  const isEditedComment = updatedAt !== createdAt;

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const onDelete = () => {
    if (id && handleDelete) {
      handleOpenModal();
      handleDelete(id);
    }
  };

  useEffect(() => {
    if (isEditMode && uploadInputRef.current) {
      const input = uploadInputRef.current;
      input.focus();

      const contentLength = input.value.length;
      input.setSelectionRange(contentLength, contentLength);
    }
  }, [isEditMode]);

  const styles = {
    optionsButton:
      "cursor-pointer hover:bg-[#414141] active:bg-[#696969] p-1 rounded-[.2rem] select-none transition-all duration-300",
    editModeText: "text-[#b7b7b7] flex items-center gap-[.2rem] text-[.55rem]",
  };

  return (
    <div
      className={`h-[max-content] w-[90%] grid grid-rows-[3.5rem_1fr] container-styles relative xs:w-4/5 xl:w-6/7 ${
        !isEven && "self-end"
      }`}
    >
      <div className="border-b border-b-[var(--container-border)] px-3 grid items-center">
        <div className="grid items-center h-[2.3rem] gap-1 grid-cols-[2.5rem_1fr_max-content]">
          <div className="size-9 rounded-[.4rem] grid place-items-center">
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
        {isEditMode ? (
          <form className="grid">
            <textarea
              value={editMessageInput}
              onChange={(e) => handleChangeEditMessageInput(e, uploadInputRef)}
              className="w-full h-auto overflow-hidden bg-[#313131] rounded-[.2rem] p-2 text-[.7rem] resize-none min-h-[3.1825rem] border border-[#414141] focus:outline-none"
              ref={uploadInputRef}
              onKeyDown={(e) => handleKeyDownEditMessage(e, id)}
              maxLength={255}
            />

            <div className="flex items-center justify-between mt-2 px-1">
              <div className="flex items-center gap-[.4rem]">
                <p className={styles.editModeText}>
                  Enter{" "}
                  <BsArrowReturnRight className="text-[.5rem] text-[#189f1a] shadow-sm" />
                </p>
                <span className="text-[#b7b7b7] text-[.5rem]">|</span>
                <p className={styles.editModeText}>
                  Esc <TfiBackLeft className="text-[.5rem] shadow-sm" />
                </p>
              </div>

              <p
                className={`${
                  styles.editModeText
                } transition-all duration-300 ${
                  editMessageInput.length === 255 && "text-[#ff5d5d] font-[500]"
                }`}
              >
                {editMessageInput.length}/255
              </p>
            </div>
          </form>
        ) : (
          <div className="relative">
            <p className="text-[.72rem] break-words w-full ">{message}</p>

            {(isEdited || isEditedComment) && (
              <div className="my-1 flex items-start justify-end pr-1">
                <p className="text-[.55rem] text-[#b7b7b7] absolute flex gap-[.2rem] items-center">
                  <MdModeEdit /> Editado{" "}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Ventana modal de opciones */}

      {isOpen && (
        <div className="absolute w-[10rem] rounded-[.2rem] right-9 top-2 bg-[#313131] text-[.8rem] p-2 flex flex-col gap-2 transition-all duration-300">
          {isOwner && (
            <p className={styles.optionsButton} onClick={() => onDelete()}>
              Eliminar
            </p>
          )}
          {isOwner ? (
            <p
              className={styles.optionsButton}
              onClick={() => handleEditMode()}
            >
              Editar
            </p>
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
