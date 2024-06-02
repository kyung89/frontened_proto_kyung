import React from "react";
import SelectForm from "./components/SelectForm";
import ExperienceCard from "./components/ExperienceCard";

// 설계안 필요

export default function ExperiencePage() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="p-10">
        <SelectForm />
      </div>
      <div className="p-10 grid grid-cols-2 gap-2">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
}
