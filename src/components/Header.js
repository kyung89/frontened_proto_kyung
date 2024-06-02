import React from "react";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";

// 설계안 필요

export default function Header() {
  return (
    <header className="flex justify-between items-center text-sm h-10 p-5 bg-green-900">
      <Link to="/">
        <div className="flex flex-row justify-center items-center hover:text-white">
          <RiPlantFill />
          <span className="pl-3">마이팜</span>
        </div>
      </Link>
      <div className="flex justify-end items-center">
        <Link to="/board">
          <div className="mx-5 p-2 rounded-md hover:text-white">게시판</div>
        </Link>
        <Link to="/experience">
          <div className="mx-5 p-2 rounded-md hover:text-white">체험서비스</div>
        </Link>

        <Link to="/select">
          <div className="mx-5 p-2 rounded-md hover:text-white">작물선택</div>
        </Link>
        <Link to="/settings">
          <div className="mx-5 p-2 rounded-md hover:text-white">설정</div>
        </Link>
        <Link to="/state">
          <div className="mx-5 p-2 rounded-md hover:text-white">상태관리</div>
        </Link>
        {/** 인규님 파트: 05. 커뮤니티 */}
        <Link to="/login">
          <div className="mx-5 p-2 rounded-md hover:text-white">커뮤니티</div>
        </Link>
        <Link to="/profile">
          <div className="mx-5 p-2 rounded-md hover:text-white">
            마이 페이지
          </div>
        </Link>
        {/** 인규님 파트: 02. 로그인 */}
        <Link to="/login">
          <div className="mx-5 p-2 rounded-md hover:text-white">로그인</div>
        </Link>
        {/** 인규님 파트: 06. 회원가입 */}
        <Link to="/register">
          <div className="mx-5 p-2 rounded-md hover:text-white">회원가입</div>
        </Link>
        <Link to="/alarm">
          <div className="rounded-md hover:text-white">
            <FaBell />
            <span class="absolute top-2 right-2 flex items-center justify-center h-4 w-4 rounded-full bg-red-600 text-white text-xs font-bold">
              3
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}
