import { Hero } from "./ui/Hero";
import { NavBar } from "./ui/NavBar";
import { Skills } from "./ui/SkillsUi";

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="flex-col w-full flex min-h-screen">
        <Hero />
        <Skills />
      </main>
    </>
  );
}
