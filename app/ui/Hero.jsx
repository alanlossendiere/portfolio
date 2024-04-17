// import { GrGithub } from "react-icons/gr"
import { MapPin } from "lucide-react";
import heroPhoto from "../../public/heroPhoto.jpg";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="w-full bg-gray-50 py-16 md:py-20 2xl:py-24">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row">
          {/* Imagen con fondo */}

          <div className="flex justify-center items-center md:order-last md:justify-end">
            <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
              <Image
                src={heroPhoto}
                alt="Foto de hero"
                priority
                className="absolute top-0 h-[280px] w-[240px] z-10 border-gray-100 border-8 max-md:left-5 md:h-[320px] md:w-[280px]"
              />
              <div className="absolute h-[280px] w-[280px] border-8 bg-gray-200 border-transparent max-md:top-5 md:h-[320px] md:w-[280px] md:right-0 md:bottom-0" />
            </div>
          </div>

          {/* Titulo y descripcion */}

          <div className="flex flex-col max-w-3xl jusify-center gap-12">
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-4xl">Hola, Soy Alan</h1>
              <p className="text-base text-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                dolorum nostrum perferendis deserunt repellendus soluta
                perspiciatis temporibus? Enim ut harum ab sequi quae et
                inventore placeat. Numquam libero quam voluptatibus.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <MapPin className="stroke-gray-600" />
                <p className="text-normal text-base">
                  Argentina, Buenos Aires, Villa Gesell
                </p>
              </div>
              <div className="flex gap-2">
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                  </span>
                </div>
                <p className="text-normal-text-base">
                  Disponible para trabajar
                </p>
              </div>
              <div className="flex gap-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
