import React, { useState } from "react";

export const useCreateComment = () => {
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

      setNewComment("");
      setIsLoadingCreate(false);

      return await response.json();
    } catch (error) {
      console.error(error);
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
