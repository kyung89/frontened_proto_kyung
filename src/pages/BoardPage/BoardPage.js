import React from "react";
import { useState } from "react";
import QnaPage from "./components/QnaPage/QnaPage";
import FaqPage from "./components/FaqPage/FaqPage";
import NoticePage from "./components/NoticePage/NoticePage";
import FreeBoardPage from "./components/FreeBoardPage/FreeBoardPage";
import MarketBoardPage from "./components/MarketBoardPage/MarketBoardPage";
import BoardBtn from "./components/common/BoardBtn";
import CommunityPage from "./components/CommunityPage/CommunityPage";

// 게시판 껍데기 구현
// 세부기능 구현 필요: 상세보기, 글쓰기, 글삭제 등
// 세부기능 설계 자세히 필요

export default function BoardPage() {
  const [board, setBoard] = useState("faq");

  const selectBoard = (boardType) => {
    setBoard(boardType);
  };

  return (
    <div className="w-full">
      <div className="mt-5 flex justify-center">
        <BoardBtn btnTitle="FaQ" handleClick={() => selectBoard("faq")} />
        <BoardBtn btnTitle="QnA" handleClick={() => selectBoard("qna")} />
        <BoardBtn
          btnTitle="공지사항"
          handleClick={() => selectBoard("notice")}
        />
        <BoardBtn
          btnTitle="자유게시판"
          handleClick={() => selectBoard("free")}
        />
        <BoardBtn
          btnTitle="당근마켓"
          handleClick={() => selectBoard("market")}
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
