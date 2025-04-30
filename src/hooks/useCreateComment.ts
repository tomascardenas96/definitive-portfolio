import { Comment } from "@prisma/client";
import { Session } from "next-auth";
import React, { useState } from "react";
import { toast } from "sonner";

export const useCreateComment = (
  setMessages: React.Dispatch<React.SetStateAction<Comment[]>>,
  session: Session | null
) => {
  const [newComment, setNewComment] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!session) {
      toast.error("Inicia sesión para enviar un comentario");
      return;
    }

    setNewComment("");

    const createComment = async () => {
      const response = await fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify({ content: newComment }),
      });

      if (!response.ok) {
        throw new Error("Failed to create comment");
      }

      const data: Comment = await response.json();

      setMessages((prev: Comment[]) => [...prev, data as Comment]);

      return data;
    };

    toast.promise(createComment(), {
      loading: "Enviando comentario...",
      success: () => {
        return "Comentario enviado correctamente!";
      },
      error: () => {
        return "Error al enviar el comentario";
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() === "") {
      setNewComment("");
      return;
    }

    setNewComment(e.target.value);
  };

  return {
    newComment,
    setNewComment,
    handleSubmit,
    handleChange,
  };
};
