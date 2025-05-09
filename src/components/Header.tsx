"use client";

import { Session } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Header = ({ session }: { session: Session | null }) => {
  const styles = {
    card: "grid items-center text-center grid-rows-[max-content_1rem]",
    iconContainer: "grid place-content-center",
    title: "text-[.55rem] mt-1 leading-none",
    iconActive: "",
    titleActive: "",
  };

  return (
    <nav
      className="
        flex h-[100%] 
        rounded-t-2xl 
        items-center 
        justify-center 
        bg-[var(--background)] 
        dark:bg-[var(--background-dark)] 
        left-0 
        shadow-[-1_0_5px_10px_black]
        w-full 
        max-w-[28.25rem] 
        justify-self-center 
        select-none 
        xl:hidden 
        tall:bg-red-500
        "
    >
      <ul className="w-[96%] h-[90%] grid grid-cols-5 max-w-[28.875rem]">
        <Link className={styles.iconContainer} href="/#presentation">
          <li className={styles.card}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-gallery-vertical-icon lucide-gallery-vertical justify-self-center"
            >
              <path d="M3 2h18" />
              <rect width="18" height="12" x="3" y="6" rx="2" />
              <path d="M3 22h18" />
            </svg>
            <p className={styles.title}>Presentacion</p>
          </li>
        </Link>

        <Link className={styles.iconContainer} href="/#stack">
          <li className={styles.card}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-layout-template-icon lucide-layout-template justify-self-center"
            >
              <rect width="18" height="7" x="3" y="3" rx="1" />
              <rect width="9" height="7" x="3" y="14" rx="1" />
              <rect width="5" height="7" x="16" y="14" rx="1" />
            </svg>
            <p className={styles.title}>Stack</p>
          </li>
        </Link>

        <Link className={styles.iconContainer} href="/#testimonials">
          <li className={styles.card}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-circle-icon lucide-message-circle justify-self-center"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
            <p className={styles.title}>Testimonios</p>
          </li>
        </Link>

        <Link className={styles.iconContainer} href="/#projects">
          <li className={styles.card}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-briefcase-business-icon lucide-briefcase-business justify-self-center"
            >
              <path d="M12 12h.01" />
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              <path d="M22 13a18.15 18.15 0 0 1-20 0" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
            <p className={styles.title}>Proyectos</p>
          </li>
        </Link>

        {session ? (
          <div
            className={`${styles.iconContainer} pt-[.15rem]`}
            onClick={() => signOut()}
          >
            <li className={styles.card}>
              <Image
                src={session.user?.image || ""}
                alt="user"
                width={25}
                height={25}
                className="rounded-full justify-self-center border border-[#ffffff] shadow-md shadow-black/50"
              />
              <p className={`${styles.title}`}>Cerrar Sesion</p>
            </li>
          </div>
        ) : (
          <div
            className={`${styles.iconContainer} pt-[.15rem]`}
            onClick={() => signIn("google", { prompt: "select_account" })}
          >
            <li className={styles.card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-user-round-icon lucide-circle-user-round justify-self-center"
              >
                <path d="M18 20a6 6 0 0 0-12 0" />
                <circle cx="12" cy="10" r="4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <p className={styles.title}>Ingresar con Google</p>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Header;
