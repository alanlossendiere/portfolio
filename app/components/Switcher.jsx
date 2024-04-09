"use client";

import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Switcher = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  if (!mounted) {
    return (
      <div onClick={handleTheme}>
        <SunIcon />
      </div>
    );
  }

  return (
    <div onClick={handleTheme} className="cursor-pointer">
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </div>
  );

  {
    /* <div>
        the currente theme is: {theme}
        <button onClick={() => setTheme("light")}>Light Mode</button>
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      </div> */
  }
};
