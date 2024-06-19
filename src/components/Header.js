import React from "react";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";

// 설계안 필요

export default function Header() {
  return (
    <header className="flex justify-between items-center text-sm h-10 p-5 bg-[#2E8B57] m-1">
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
        <Link to="/mypage">
          <div className="mx-5 p-2 rounded-md hover:text-white">
            마이 페이지
          </div>
        </Link>

        {/** 일단 테스트용으로 임시로 넣은 거 */}
        <Link to="/boarddetail">
          <div className="mx-5 p-2 rounded-md hover:text-white">
            상세 글보기
          </div>
        </Link>

        {/** 일단 테스트용으로 임시로 넣은 거 */}
        <Link to="/boardedit">
          <div className="mx-5 p-2 rounded-md hover:text-white">글 수정</div>
        </Link>

        {/** 일단 테스트용으로 임시로 넣은 거 */}
        <Link to="/profile">
          <div className="mx-5 p-2 rounded-md hover:text-white">
            프로필: 해둔것
          </div>
        </Link>

        {/** 인규님 파트: 02. 로그인 */}
        <Link to="/login">
          <div className="mx-5 p-2 rounded-md hover:text-white">로그인</div>
        </Link>
        {/** 인규님 파트: 06. 회원가입 */}
        <Link to="/join">
          <div className="mx-5 p-2 rounded-md hover:text-white">회원가입</div>
        </Link>
        <Link to="/alarm">
          <div className="rounded-md hover:text-white">
            <FaBell />
            <span className="absolute top-4 right-5 flex items-center justify-center h-2 w-2 rounded-full bg-red-600 text-white text-xs font-bold"></span>
          </div>
        </Link>
      </div>
    </header>
  );
}
