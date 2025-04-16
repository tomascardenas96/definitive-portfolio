import { User } from "lucide-react";

function DesktopHeader() {
  return (
    <div className="w-[85%] justify-self-center flex justify-between items-center">
      <div>
        <h1 className="text-[.9rem]">Tomas Cardenas</h1>
      </div>

      <div className="flex gap-3 items-center">
        <p className="text-[.9rem]">Iniciar Sesion</p>
        <div className="h-full ">
          <User className="w-[1rem] h-[1rem] flex " />
        </div>
      </div>
    </div>
  );
}

export default DesktopHeader;
