import React from "react";

export default function AlarmCard() {
  return (
    <div className="flex flex-row p-10 border border-black">
      <div className="p-5 border border-black w-1/5">
        <div className="items-center border border-black mb-1 font-bold">
          yesterday
        </div>
        <div className="items-center border border-black">
          <img src="image/alarmImg.jpg" alt="" />
        </div>
      </div>
      <div className="border border-black w-4/5">
        <div className="justify-center border border-black m-5">
          alarm message
        </div>
      </div>
    </div>
  );
}
