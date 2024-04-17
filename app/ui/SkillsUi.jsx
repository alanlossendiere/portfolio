import { Skills } from "../lib/data";
import { SkillsData } from "../components/dataToDisplay/SkillsData";
export const SkillsUi = () => {
  return (
    <section className="w-full bg-gray py-16 px-4" id="Habilidades">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4">
        {/* Titulo y descripcion */}
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="rounded-xl bg-gray-200 flex px-5 py-1">
              <h2>Skills</h2>
            </div>
          </div>
          <p className="text-lg text-center">
            Frameworks usados durante los proyectos que estan publicados y otros
            en los que sigo trabajando.
          </p>
        </div>

        {/* Skills con logo y titulo */}
        <div className="grid grid-cols-3 gap-y-4">
          {Skills.map((props, index) => (
            <SkillsData {...props} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
