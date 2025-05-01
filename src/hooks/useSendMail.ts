import { Session } from "next-auth";
import React, { useState } from "react";
import { toast } from "sonner";

export default function useSendMail(session: Session | null) {
  const [message, setMessage] = useState("");

  const handleSendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!session) {
      toast.error("Debes iniciar sesión para enviar un mensaje");
      return;
    }

    if (message.trim() === "") {
      toast.error("El mensaje no puede estar vacío");
      return;
    }

    const sendMail = async () => {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({ message }),
      });

      if (!response.ok) throw new Error();

      const data = await response.json();

      return data;
    };

    toast.promise(sendMail(), {
      loading: "Enviando mensaje...",
      success: () => {
        setMessage("");
        return "Mensaje enviado correctamente";
      },
      error: "Error al enviar mensaje",
    });
  };

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return { handleSendMail, handleChangeMessage, message };
}
