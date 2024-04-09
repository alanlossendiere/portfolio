// import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./lib/Provider";

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
      </body>
    </html>
  );
}