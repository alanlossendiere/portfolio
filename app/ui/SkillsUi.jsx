
import { Skills } from "../lib/data";
import { SkillsData } from "../components/dataToDisplay/SkillsData";
export const SkillsUi = () => {

  return (
    <section className="w-100 bg-gray  py-16 px-4">
      <div className="flex mx-auto flex-col">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="rounded-xl bg-gray-200 flex px-5 py-1">
              <h2 className="text-normal">Skills</h2>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-y-4">
            {Skills.map((props, index) => (
              <SkillsData key={index} data={props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
