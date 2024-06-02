import React from "react";
import SelectForm from "./components/SelectForm";
import SelectCard from "./components/SelectCard";

// 설계안 필요

export default function SelectPage() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="p-10">
        <SelectForm />
      </div>
      <div className="p-10 grid grid-cols-2 gap-2">
        <SelectCard />
        <SelectCard />
        <SelectCard />
        <SelectCard />
        <SelectCard />
        <SelectCard />
        <SelectCard />
        <SelectCard />
        <SelectCard />
        <SelectCard />
      </div>
    </div>
  );
}
