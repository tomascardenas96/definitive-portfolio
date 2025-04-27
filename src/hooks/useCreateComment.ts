import { Comment } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export const useCreateComment = (
  setMessages: React.Dispatch<React.SetStateAction<Comment[]>>
) => {
  const [newComment, setNewComment] = useState<string>("");
  const [isLoadingCreate, setIsLoadingCreate] = useState<boolean>(false);
  const [errorCreate, setErrorCreate] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoadingCreate(true);
    try {
      const response = await fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify({ content: newComment }),
      });

      if (!response.ok) {
        throw new Error("Failed to create comment");
      }

      const data: Comment = await response.json();

      setNewComment("");
      setIsLoadingCreate(false);
      toast.success("Comentario enviado correctamente!");
      setMessages((prev: Comment[]) => [...prev, data as Comment]);

      return data;
    } catch (error) {
      console.error(error);
      toast.error("Error al enviar el comentario");
      setErrorCreate(error as string);
    } finally {
      setIsLoadingCreate(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  return {
    newComment,
    setNewComment,
    isLoadingCreate,
    errorCreate,
    handleSubmit,
    handleChange,
  };
};
