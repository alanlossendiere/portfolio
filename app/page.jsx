import { Hero } from "./ui/Hero";
import { NavBar } from "./ui/NavBar";
import { Projects } from "./ui/Projects";
import { SkillsUi } from "./ui/SkillsUi";

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="flex-col w-full flex min-h-screen">
        <Hero />
        <SkillsUi />
        <Projects />
      </main>
    </>
  );
}
