"use client"; 

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error capturado:", error);
  }, [error]);

  return (
    <div className="text-center p-8">
      <h1 className="text-2xl font-bold text-red-600">Algo salió mal</h1>
      <p className="my-4">{error.message || "Error desconocido"}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Reintentar
      </button>
    </div>
  );
}
