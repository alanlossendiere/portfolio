"use client";

import React from "react";
import { Switcher } from "./Switcher";

export const NavBar = () => {
  const logo = "<AL />";

  return (
    <nav className="w-100 bg-opacity-50 bg-gray sticky top-0 z-30 ">
      <div className="flex w-full items-center justify-between p-4 max-w-7xl mx-auto">
        <h1 className="font-[inter] text-2xl md:text-3xl font-bold text-gray-900">
          {logo}
        </h1>
        <div className="md:flex hidden items-center gap-6">
          <ul className="flex items-center list-none gap-3 text-gray-50">
            <li className="font-bold text-gray-900">Sobre mi</li>
            <li className="font-bold text-gray-900">Proyectos</li>
            <li className="font-bold text-gray-900">Contacto</li>
          </ul>
          <div className="h-6 w-0.5 bg-gray-900"></div>
          <Switcher />
          <button className="rounded-xl items-center justify-center font-medium bg-gray-900 active:bg-gray-800 hover:bg-gray-700 px-4 py-1.5 text-gray-50 transition-colors inline-flex">
            Descargar CV
          </button>
        </div>
      </div>
    </nav>
  );
};
