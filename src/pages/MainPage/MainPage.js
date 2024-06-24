import React from "react";

// 폰트 변경

export default function MainPage() {
  const textStyle = {
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat w-[99.6%] h-screen flex flex-col items-center  relative">
      <video
        src="/video/farm.mp4"
        autoPlay
        loop
        muted
        className="object-cover w-full h-full absolute inset-0 z-0"
      />
      <div className="text-white text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold z-10 mb-5 absolute mt-52 text-shadow">
        My Farm
      </div>
      <p className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-dela z-10">
        {/**What are you waiting for?*/}
      </p>

      <div className="z-10 flex flex-row absolute bottom-10">
        <div className="p-5 z-10 border-8 border-white text-white w-96 h-48 rounded-3xl m-10 shadow-[rgba(0,0,0,0.5)_2px_2px_2px_2px]">
          <p className="text-2xl font-bold">실시간 동영상 스트리밍</p>
          <p className="mt-5">
            스트리밍을 통해 직접 작물을 키우는 느낌을 받을 수 있습니다.
          </p>
        </div>
        <div className="p-5 z-10 border-8 border-white text-white w-96 h-48 rounded-3xl m-10 shadow-[rgba(0,0,2,0.5)_2px_2px_2px_2px]">
          <p className="text-2xl font-bold">작물 재배 체험 서비스</p>
          <p className="mt-5">
            체험 서비스 신청을 통해 작물을 재배하는 체험이 가능합니다.
          </p>
        </div>
        <div className="p-5 z-10 border-8 border-white text-white w-96 h-48 rounded-3xl m-10 shadow-[rgba(0,0,2,0.5)_2px_2px_2px_2px]">
          <p className="text-2xl font-bold">힐링 팜 커뮤니티 서비스</p>
          <p className="mt-5">
            내 힐링 팜 작물을 자랑하고 상태를 공유할 수 있습니다.
          </p>
        </div>
        <div className="p-5 z-10 border-8 border-white text-white w-96 h-48 rounded-3xl m-10 shadow-[rgba(0,0,2,0.5)_2px_2px_2px_2px]">
          <p className="text-2xl font-bold">작물 상태 알람 서비스</p>
          <p className="mt-5">
            작물의 생육상태와 병충해 상태를 알림으로 받을 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
