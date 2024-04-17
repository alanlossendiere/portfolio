// import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./lib/Provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Alan Lossendiere",
  description: "Portfolio Alan Lossendiere programador fullstack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Provider>{children}</Provider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
