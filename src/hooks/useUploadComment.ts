import { Comment } from "@prisma/client";
import React, { useState } from "react";
import { toast } from "sonner";

function useUploadComment(
  message: string,
  setIsOpen: (isOpen: boolean) => void,
  setMessages: React.Dispatch<React.SetStateAction<Comment[]>>,
  setIsScrollIgnored: React.Dispatch<React.SetStateAction<boolean>>
) {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editMessageInput, setEditMessageInput] = useState<string>("");
  const [isEdited, setIsEdited] = useState<boolean>(false);

  const handleUploadComment = async (id: string, comment: string) => {
    const uploadComment = async () => {
      const response = await fetch(`/api/comment/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: editMessageInput }),
      });

      if (!response.ok) throw new Error();

      return await response.json();
    };

    toast.promise(uploadComment(), {
      loading: "Editando comentario...",
      success: () => {
        setIsScrollIgnored(true);
        setMessages((prev: Comment[]) => {
          return prev.map((message: Comment) =>
            message.id === id
              ? { ...message, content: editMessageInput }
              : message
          );
        });
        return "Comentario editado correctamente";
      },
      error: "Error al editar comentario",
    });
  };

  const handleEditMode = () => {
    setIsOpen(false);
    setEditMessageInput(message);
    setIsEditMode((prev) => !prev);
  };

  const handleChangeEditMessageInput = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    textAreaRef: React.RefObject<HTMLTextAreaElement | null>
  ) => {
    const newValue = e.target.value;

    setEditMessageInput(newValue);
    adjustTextAreaHeight(textAreaRef);
  };

  const handleKeyDownEditMessage = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    id: string
  ) => {
    if (e.key === "Enter") {
      setIsEditMode(false);

      if (editMessageInput.length === 0) {
        toast.error("El comentario no puede estar vacío");
        return;
      }

      handleUploadComment(id, editMessageInput);
      setIsEdited(true);
    } else if (e.key === "Escape") {
      setIsEditMode(false);
    }
  };

  const adjustTextAreaHeight = (
    textAreaRef: React.RefObject<HTMLTextAreaElement | null>
  ) => {
    const textArea = textAreaRef.current;

    if (textArea) {
      textArea.style.height = "auto";
      textArea.style.height = textArea.scrollHeight + "px";
    }
  };

  return {
    handleEditMode,
    isEditMode,
    handleChangeEditMessageInput,
    editMessageInput,
    handleKeyDownEditMessage,
    isEdited,
  };
}

export default useUploadComment;
