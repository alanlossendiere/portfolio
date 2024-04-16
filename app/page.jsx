import { Hero } from "./ui/Hero";
import { NavBar } from "./ui/NavBar";
import { SkillsUi } from "./ui/SkillsUi";

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="flex-col w-full flex min-h-screen">
        <Hero />
        <SkillsUi />
      </main>
    </>
  );
}
