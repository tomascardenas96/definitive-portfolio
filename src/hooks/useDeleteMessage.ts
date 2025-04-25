"use client";

import { toast } from "sonner";

async function useDeleteMessage(): Promise<{
  handleDelete: (id: string) => void;
}> {
  const handleDelete = async (id: string) => {
    const deleteMessage = async () => {
      const response = await fetch(`api/comment/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error("Error al eliminar el mensaje");

      const data = await response.json();

      return data;
    };

    toast.promise(deleteMessage(), {
      loading: "Eliminando mensaje...",
      success: "Mensaje eliminado correctamente",
      error: "Error al eliminar el mensaje",
    });
  };

  return { handleDelete };
}

export default useDeleteMessage;
