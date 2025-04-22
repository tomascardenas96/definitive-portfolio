"use client";

// import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const styles = {
    card: "grid place-content-center",
    iconContainer: "grid place-content-center",
    title: "text-[.55rem] mt-1",
    iconActive: "",
    titleActive: "",
  };

  // const { data: session } = useSession();

  return (
    <nav className="flex h-[100%] rounded-t-2xl items-center justify-center bg-[#05080a] left-0 w-full border-t border-[#4747476f] max-w-[28.25rem] justify-self-center select-none xl:hidden">
      <ul className="w-[96%] h-[90%] grid grid-cols-5 max-w-[28.875rem]">
        <li className={styles.card}>
          <Link className={styles.iconContainer} href="/#presentation">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
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
          </Link>
        </li>

        <li className={styles.card}>
          <Link className={styles.iconContainer} href="/#stack">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-layout-template-icon lucide-layout-template"
            >
              <rect width="18" height="7" x="3" y="3" rx="1" />
              <rect width="9" height="7" x="3" y="14" rx="1" />
              <rect width="5" height="7" x="16" y="14" rx="1" />
            </svg>
          </Link>
          <p className={styles.title}>Stack</p>
        </li>

        <li className={styles.card}>
          <Link className={styles.iconContainer} href="/#testimonials">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-circle-icon lucide-message-circle"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
          </Link>
          <p className={styles.title}>Testimonios</p>
        </li>

        <li className={styles.card}>
          <Link className={styles.iconContainer} href="/#projects">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-briefcase-business-icon lucide-briefcase-business"
            >
              <path d="M12 12h.01" />
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              <path d="M22 13a18.15 18.15 0 0 1-20 0" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
          </Link>
          <p className={styles.title}>Proyectos</p>
        </li>

        <li className={styles.card}>
          <Link className={styles.iconContainer} href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-user-round-icon lucide-circle-user-round"
            >
              <path d="M18 20a6 6 0 0 0-12 0" />
              <circle cx="12" cy="10" r="4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </Link>
          <p className={styles.title}>Iniciar Sesion</p>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
