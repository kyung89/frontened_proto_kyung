import React from "react";

export default function AlarmCard() {
  return (
    <div className="p-5">
      <div className="w-full flex flex-row bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-100">
        <div className="p-5 w-1/12 border-r border-gray-400">
          <div className="items-center mb-1 font-bold">yesterday</div>
          <div className="items-center">
            <img src="image/alarmImg.jpg" alt="" className="rounded-lg" />
          </div>
        </div>
        <div className="border w-11/12">
          <div className="justify-center m-5">alarm message</div>
        </div>
      </div>
    </div>
  );
}
