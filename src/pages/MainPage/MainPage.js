import React from "react";
import IntroduceForm from "./components/IntroduceForm/IntroduceForm";
import RecoForecastForm from "./components/RecoForecastForm/RecoForecastForm";
import ExperienceForm from "./components/ExperienceForm/ExperienceForm";
import PublicForm from "./components/PublicForm/PublicForm";
import NoticeForm from "./components/NoticeForm/NoticeForm";
import FreeBoardForm from "./components/FreeBoardForm/FreeBoardForm";
import BoardForm from "./components/BoardForm/BoardForm";
import PhotoForm from "./components/PhotoForm/PhotoForm";
import ShopForm from "./components/ShopForm/ShopForm";
import CalendarForm from "./components/CalendarForm/CalendarForm";
import StreamingForm from "./components/StreamingForm/StreamingForm";
import ValueForm from "./components/ValueForm/ValueForm";

// 일단 왕훈님 디자인대로 구현하기: 의논해서 디자인을 확정지어야 함!

export default function MainPage() {
  return (
    <>
      <div className="w-full flex flex-col items-center pt-5">
        <section className="w-full h-80">
          {/* 사진 넘어가면서 뭔 가치를 만드는 어쩌고 그런 문구 / 우리프로그램을 한눈에 가시적으로 / cj 홈페이지 최상단 */}
          <IntroduceForm />
        </section>

        <section className="w-full h-32 flex flex-row m-5">
          <section className="w-1/2">
            {/* 이달의 추천작물 -> 추천요리: 들어가면 간단레시피/추천 작물 사진 시각화  */}
            {/* 간단한 날씨정보  */}
            <RecoForecastForm />
          </section>
          <section className="border border-black w-1/4">
            {/* 체험 서비스 신청(비회원, 회원) /예약 / 예약을 위해서 날짜를 선택하는 드롭다운 달력창 구현(색깔로간단하게 예악 가/불가 날짜 확인 */}
            <ExperienceForm />
          </section>
          <section className="border border-black w-1/4">
            {/* 작물 정보 바로가기? / 농가정보? /등등 퍼블릭 서비스 구현 (가장 위에) */}
            <PublicForm />
          </section>
        </section>
        <section className=" w-full flex flex-row mb-5">
          <section className="w-1/2">
            <section className="border border-gray-500 h-16 mb-1">
              {/* 공지사항 */}
              <NoticeForm />
            </section>
            <section className="border border-gray-500 h-16 mb-1">
              {/* 자유게시판 */}
              <FreeBoardForm />
            </section>
            <section className="border border-gray-500 h-16">
              {/* 자주묻는질문/QnA/서비스들 전반적인 세부정보? */}
              <BoardForm />
            </section>
          </section>
          <section className="w-1/2 flex flex-row">
            <section className="border border-black w-1/2">
              {/* 자랑하기/체험하기 등 사진 게시판 */}
              <PhotoForm />
            </section>
            <section className="border border-black w-1/2">
              {/* 당근마켓 */}
              <ShopForm />
            </section>
          </section>
        </section>
        <section className="w-full flex flex-row h-[285px] mb-5">
          <section className="w-1/2">
            {/* 달력 */}
            <CalendarForm />
          </section>
          <section className="border border-black w-1/2 h-[17.6rem]">
            {/* 스트리밍 및 앨범 예정 */}
            <StreamingForm />
          </section>
        </section>
        <section className="w-full h-fit mb-5">
          {/* 풀무원 홈페이지 회사소개 및 가치 참조 */}
          <ValueForm />
        </section>
      </div>
    </>
  );
}
