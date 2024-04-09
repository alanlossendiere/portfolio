"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export const Provider = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return;
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};
