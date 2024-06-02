import React from "react";
import PhotoForm from "./components/PhotoForm";
import GrowthForm from "./components/GrowthForm";
import BugForm from "./components/BugForm";

// 설계안 필요

export default function StatePage() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="border border-black w-full h-1/2">
        <PhotoForm />
      </div>
      <div className="border border-black flex flex-row w-full h-1/2 p-10">
        <div className="border border-black w-1/2 p-5">
          <GrowthForm />
        </div>
        <div className="border border-black w-1/2 p-5">
          <BugForm />
        </div>
      </div>
    </div>
  );
}
