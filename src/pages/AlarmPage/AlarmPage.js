import React from "react";
import AlarmCard from "./components/AlarmCard";

// 기본적인 예시 구현해놓으면 될듯
// 알람이 많을 때 높이는 고정되면서 스크롤 생기도록 구현
// 알람 삭제 기능? 적당히 쌓이면 자동으로 삭제되는 기능 필요할 듯

export default function AlarmPage() {
  return (
    <div className="w-full flex flex-col">
      <h1 className="p-10 text-xl font-bold">알람 페이지</h1>
      <div className="">
        <AlarmCard />
        <AlarmCard />
        <AlarmCard />
        <AlarmCard />
        <AlarmCard />
        <AlarmCard />
      </div>
    </div>
  );
}
