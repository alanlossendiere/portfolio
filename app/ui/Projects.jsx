"use client";

import Image from "next/image";
// import { CardsProjects } from "../components/dataToDisplay/CardsProjects";
import { Proyectos } from "../lib/data";

export const Projects = () => {
  return (
    <div className="bg-gray-50 w-full py-16 px-4">
      <div className="w-full mx-auto flex flex-col max-w-7xl gap-6">
        {/* Titulo y descripcion */}
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="rounded-xl bg-gray-200 flex px-5 py-1">
              <h2>Proyectos</h2>
            </div>
          </div>
        </div>

        {/* Proyectos realizados, lista */}

        {Proyectos.map((props, index) => (
          <div
            className="rounded-xl bg-gray shadow-md mx-auto flex w-full flex-col max-w-6xl dark:bg-gray-100 dark:shadow-2xl"
            key={index}
          >
            <div className="flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl">
              <a href={props.src} rel="noopener noreferrer">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(props.src, "_blank");
                  }}
                >
                  <Image
                    src={props.imgStatic}
                    alt={`Imagen de ${props.nombre}`}
                  />
                </a>
              </a>
            </div>
            <div className="flex flex-col gap-6 p-8">
              <p className="tex-lg font-semibold text-gray-900">
                {props.nombre}
              </p>
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
        ))}
      </div>
    </div>
  );
};
