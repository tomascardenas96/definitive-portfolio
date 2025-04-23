"use client";

import { signIn, signOut, useSession } from "next-auth/react";

function DesktopHeader() {
  const { data: session } = useSession();

  return (
    <div className="w-[91%] justify-self-center flex justify-between items-center">
      <div>
        <h1 className="text-[.9rem] cursor-pointer px-8 !font-unica">
          Tomas Cardenas
        </h1>
      </div>

      {session ? (
        <div className="flex items-center gap-4">
          <p>{session.user?.name}</p>
          <button onClick={() => signOut()} className="text-sm text-red-500">
            Cerrar sesión
          </button>
        </div>
      ) : (
        <button
          onClick={() => signIn("google", { prompt: "select_account" })}
          className="text-sm text-blue-500"
        >
          Iniciar sesión con Google
        </button>
      )}
    </div>
  );
}

export default DesktopHeader;
