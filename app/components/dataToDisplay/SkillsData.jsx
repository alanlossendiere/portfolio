"use client";

import Image from "next/image";
export const SkillsData = (props) => {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <Image src={props.logo} alt={`framework${props.framework}`} />
        <p>{props.framework}</p>
      </div>
    </>
  );
};
