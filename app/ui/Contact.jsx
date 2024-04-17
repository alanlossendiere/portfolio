import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

export const Contact = () => {
  return (
    <div className="w-full bg-gray py-16 md:py-20 2xl:py-24" id="Contacto">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
              <p className="text-sm font-medium">Contacto</p>
            </div>
          </div>
          <p className="text-lg md:text-xl text-center max-w-xl">
            En caso de querer contactarme para algun trabajo o proyecto.
            Estoy disponible 😎
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 md:gap-12">
          <div className="flex flex-col items-center md:gap-4">
            <div className="flex items-center gap-4 md:gap-5">
              <CiMail size={40} />
              <h2 className="text-lg text-gray-900 font-semibold md:text-4xl tracking-[-0.02em]">
                alanmxzone@hotmail.com
              </h2>
            </div>
            <div className="flex items-center gap-4 md:gap-5">
              <CiPhone size={40} />
              <h2 className="text-lg text-gray-900 font-semibold md:text-4xl tracking-[-0.02em]">
                +54 2255 416825
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2"></div>
        </div>
      </div>
    </div>
  );
};
