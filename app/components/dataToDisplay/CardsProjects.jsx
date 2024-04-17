import Image from "next/image";
import React from "react";

export const CardsProjects = (props) => {

    
  return (
    <div className="rounded-xl bg-gray shadow-md mx-auto flex w-full flex-col max-w-6xl dark:bg-gray-100 dark:shadow-2xl" key={props.nombre}>
      <div className="flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl">
        <a href={props.src} rel="noopener noreferrer">
          <a
            onClick={(e) => {
              e.preventDefault();
              window.open(props.src, "_blank");
            }}
          >
            <Image src={props.imgStatic} alt={`Imagen de ${props.nombre}`} />
          </a>
        </a>
      </div>
      <div className="flex flex-col gap-6 p-8">
        <p className="tex-lg font-semibold text-gray-900">{props.nombre}</p>
        <p>{props.descripcion}</p>
        <div className="flex flex-wrap gap-2">
          {props.Skills.map((skills) => (
            <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
              <p className="text-sm font-medium">{skills}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
