import { Menu } from "lucide-react";

const Header = () => {
  return (
    <nav className="flex h-16 items-center pl-3 bg-gradient-to-b from-black/100 to-black/0 fixed w-full">
      <Menu className="w-7 h-7 text-[var(--font-color)]" />
    </nav>
  );
};

export default Header;
