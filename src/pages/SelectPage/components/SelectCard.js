import React, { useEffect } from "react";

// {id: 3, name: '베베농가', address: '서울', crops: Array(4)}

export default function SelectCard({farm}) {


  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex flex-row">
      <div className="p-2 w-full">
        <table className="w-full">
          <tbody>
            <tr className="p-6 bg-white border border-gray-200 rounded-lg shadow">
              <td className="p-2 w-1/5 border border-gray-200 bg-slate-100">농장명</td>
              <td className="p-2 w-4/5 border border-gray-200">{farm.name}</td>
            </tr>
            <tr className="p-6 bg-white border border-gray-200 rounded-lg shadow">
              <td className="p-2 w-1/5 border border-gray-200 bg-slate-100">농장주소</td>
              <td className="p-2 w-4/5 border border-gray-200">{farm.address}</td>
            </tr>
            <tr className="p-6 bg-white border border-gray-200 rounded-lg shadow">
              <td className="p-2 w-1/5 border border-gray-200 bg-slate-100">주요 농작물</td>
              <td className="p-2 w-4/5 border border-gray-200">{farm.crops.join(", ")}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/**<div className="p-2 w-1/2 flex items-center justify-end">
        <img
          src="image/berry.jpg"
          alt=""
          className="h-24 float-right rounded"
        />
      </div>*/}
    </div>
  );
}
