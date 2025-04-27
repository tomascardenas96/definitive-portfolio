"use client";

import { Comment } from "@prisma/client";
import { useEffect, useState } from "react";

function useGetMessages() {
  const [messages, setMessages] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/comment");
        const data = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }

        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
        setError(error as string);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return { messages, setMessages, isLoading, error };
}

export default useGetMessages;
