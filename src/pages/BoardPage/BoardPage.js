import React from "react";
import { useState, useEffect } from "react";
import QnaPage from "./components/QnaPage/QnaPage";
import FaqPage from "./components/FaqPage/FaqPage";
import NoticePage from "./components/NoticePage/NoticePage";
import FreeBoardPage from "./components/FreeBoardPage/FreeBoardPage";
import MarketBoardPage from "./components/MarketBoardPage/MarketBoardPage";
import BoardBtn from "./components/common/BoardBtn";
import CommunityPage from "./components/CommunityPage/CommunityPage";

import { useSearchParams } from "react-router-dom";

// 게시판 껍데기 구현
// 세부기능 구현 필요: 상세보기, 글쓰기, 글삭제 등
// 세부기능 설계 자세히 필요

// 선택한 게시판 버튼 active 적용 필요
// 일단 커뮤니티 게시판 백엔드 연동 구현하고 다시 설계 체크해서 만들기 필요

export default function BoardPage() {
  const [sParams] = useSearchParams();
  const category = sParams.get("category");

  //console.log("category: ", category);
  //if (category !== "null") console.log("category is string null");
  //if (category !== null) console.log("category is null");

  const [board, setBoard] = useState(
    category !== null && category !== "null" ? category : "faq"
  );

  const selectBoard = (boardType) => {
    setBoard(boardType);
  };

  const preparingAlert = () => {
    alert("준비중인 서비스입니다.");
  };

  return (
    <div className="w-full">
      <div className="mt-5 flex justify-center">
        <BoardBtn
          btnTitle="FaQ"
          handleClick={() => {
            //preparingAlert();
            selectBoard("faq");
          }}
        />
        <BoardBtn
          btnTitle="QnA"
          handleClick={() => {
            //preparingAlert();
            selectBoard("qna");
          }}
        />
        <BoardBtn
          btnTitle="공지사항"
          handleClick={() => {
            //preparingAlert();
            selectBoard("notice");
          }}
        />
        <BoardBtn
          btnTitle="자유게시판"
          handleClick={() => {
            //preparingAlert();
            selectBoard("free");
          }}
        />
        <BoardBtn
          btnTitle="당근마켓"
          handleClick={() => {
            //preparingAlert();
            selectBoard("market");
          }}
        />
        <BoardBtn
          btnTitle="커뮤니티 게시판"
          handleClick={() => selectBoard("community")}
        />
      </div>
      <div className="w-full h-full justify-center items-center p-9">
        {board === "faq" && <FaqPage />}
        {board === "qna" && <QnaPage />}
        {board === "notice" && <NoticePage />}
        {board === "free" && <FreeBoardPage />}
        {board === "market" && <MarketBoardPage />}
        {board === "community" && <CommunityPage />}
      </div>
    </div>
  );
}
