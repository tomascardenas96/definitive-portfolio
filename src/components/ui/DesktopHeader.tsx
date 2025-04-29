"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { CiLogin } from "react-icons/ci";

function DesktopHeader() {
  const { data: session } = useSession();

  return (
    <div className="w-[91%] justify-self-center flex justify-between items-center">
      <div>
        <h1 className="text-[.9rem] cursor-pointer px-8 header-font">
          Tomas Cardenas
        </h1>
      </div>

      {session ? (
        <div className="flex items-center gap-[1.1rem] px-[2rem]">
          <div className="flex items-center gap-[.35rem]">
            <Image
              src={session.user?.image || ""}
              alt="user-image"
              width={20}
              height={20}
              className="rounded-full shadow-md"
              style={{ objectFit: "cover" }}
            />
            <p className="text-[.65rem]">{session.user?.name}</p>
          </div>

          <span className="text-[.65rem]">|</span>

          <button
            onClick={() => signOut()}
            className="text-[.65rem] cursor-pointer flex items-center gap-[.4rem] hover:text-[#f17474] active:text-[#cd3636] transition-all duration-300"
          >
            <p className="">Salir</p>
            <CiLogin className="text-[.9rem]" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => signIn("google", { prompt: "select_account" })}
          className="text-[.8rem] cursor-pointer header-font flex items-center gap-2 px-[2rem]"
        >
          Iniciar Sesión
          <FcGoogle />
        </button>
      )}
    </div>
  );
}

export default DesktopHeader;
