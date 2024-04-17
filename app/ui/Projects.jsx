"use client";

import { CardsProjects } from "../components/dataToDisplay/CardsProjects";
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

        {Proyectos.map((props) => (
          <CardsProjects key={props.nombre} {...props} />
        ))}
      </div>
    </div>
  );
};
