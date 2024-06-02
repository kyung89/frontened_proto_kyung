import React from "react";
import { useState } from "react";
import QnaPage from "./components/QnaPage/QnaPage";
import FaqPage from "./components/FaqPage/FaqPage";
import NoticePage from "./components/NoticePage/NoticePage";
import FreeBoardPage from "./components/FreeBoardPage/FreeBoardPage";
import MarketBoardPage from "./components/MarketBoardPage/MarketBoardPage";

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
        <button
          className="w-40 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={() => selectBoard("faq")}
        >
          FaQ
        </button>

        <button
          className="w-40 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={() => selectBoard("qna")}
        >
          QnA
        </button>

        <button
          className="w-40 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={() => selectBoard("notice")}
        >
          공지사항
        </button>
        <button
          className="w-40 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={() => selectBoard("free")}
        >
          자유게시판
        </button>
        <button
          className="w-40 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={() => selectBoard("market")}
        >
          당근마켓
        </button>
      </div>
      <div className="w-full h-full justify-center items-center p-9">
        {board === "faq" && <FaqPage />}
        {board === "qna" && <QnaPage />}
        {board === "notice" && <NoticePage />}
        {board === "free" && <FreeBoardPage />}
        {board === "market" && <MarketBoardPage />}
      </div>
    </div>
  );
}
