import React from "react";

export default function ExperienceCard() {
  return (
    <div className="border border-black flex flex-row">
      <div className="p-2 w-1/2">
        <table>
          <tr className="">
            <td className="p-2 w-40 border border-black">지역</td>
            <td className="p-2 w-40 border border-black">부산</td>
          </tr>
          <tr>
            <td className="p-2 w-40 border border-black">농가주인</td>
            <td className="p-2 w-40 border border-black">김농부</td>
          </tr>
          <tr>
            <td className="p-2 w-40 border border-black">품종</td>
            <td className="p-2 w-40 border border-black">포도</td>
          </tr>
        </table>
      </div>
      <div className="p-2 w-1/2 border border-black flex items-center justify-end">
        <img src="image/grape.jpg" alt="" className="h-24 float-right" />
      </div>
    </div>
  );
}
