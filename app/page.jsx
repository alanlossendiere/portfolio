import { Hero } from "./ui/Hero";
import { NavBar } from "./ui/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="flex-col w-full flex min-h-screen">
      <Hero />
        <h1>main</h1>
      </main>
    </>
  );
}
