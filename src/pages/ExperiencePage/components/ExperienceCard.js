import React from "react";

export default function ExperienceCard() {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex flex-row">
      <div className="p-2 w-1/2">
        <table>
          <tbody>
            <tr className="p-6 bg-white border border-gray-200 rounded-lg shadow">
              <td className="p-2 w-40 border border-gray-200">지역</td>
              <td className="p-2 w-40 border border-gray-200">부산</td>
            </tr>
            <tr className="p-6 bg-white border border-gray-200 rounded-lg shadow">
              <td className="p-2 w-40 border border-gray-200">농가주인</td>
              <td className="p-2 w-40 border border-gray-200">김농부</td>
            </tr>
            <tr className="p-6 bg-white border border-gray-200 rounded-lg shadow">
              <td className="p-2 w-40 border border-gray-200">품종</td>
              <td className="p-2 w-40 border border-gray-200">포도</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-2 w-1/2 flex items-center justify-end">
        <img
          src="image/grape.jpg"
          alt=""
          className="h-24 float-right rounded"
        />
      </div>
    </div>
  );
}
