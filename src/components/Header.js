import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";
import { useRecoilState } from "recoil";
import { isLogin, userDataState } from "../component/StAtom.js";

// 설계안 필요

export default function Header() {
  const [isLoginCheck, setIsLoginCheck] = useRecoilState(isLogin); // Recoil을 이용한 로그인 상태 관리
  const [userData, setUserData] = useRecoilState(userDataState);

  const [login, setLogin] = useState(false);

  const navigator = useNavigate();

  //"./image/blankProfile.png"
  const [profileImg, setProfileImg] = useState("./image/blankProfile.png");

  useEffect(() => {
    const userData1 = JSON.parse(localStorage.getItem("userData"));

    if (userData1) {
      setLogin(true);
      const base64String = `data:image/jpeg;base64,${userData1.profileImage}`;
      setProfileImg(base64String);
    } else {
      setProfileImg("./image/blankProfile.png");
    }
  }, [isLoginCheck]);

  const handleLogout = () => {
    // 로컬 스토리지의 데이터 삭제
    localStorage.removeItem("userData");
    localStorage.removeItem("token");

    // Recoil 관리 데이터 삭제
    setIsLoginCheck(false);
    setUserData(null);

    setLogin(false);

    navigator("/login");
  };

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
        <Link to="/album">
          <div className="mx-5 p-2 rounded-md hover:text-white">앨범</div>
        </Link>
        <Link to="/mypage">
          <div className="mx-5 p-2 rounded-md hover:text-white">
            마이 페이지
          </div>
        </Link>

        <Link to="/profile">
          <div className="mx-5 p-2 rounded-md hover:text-white">프로필</div>
        </Link>

        <Link to="/alarm">
          <div className="mx-5 p-2 rounded-md hover:text-white mr-6">
            알람
            {/**<FaBell />*/}
          </div>
        </Link>

        <Link to="/join">
          <div className="mx-5 p-2 rounded-md hover:text-white">회원가입</div>
        </Link>

        {!login && (
          <Link to="/login">
            <div className="mx-5 p-2 rounded-md hover:text-white">로그인</div>
          </Link>
        )}

        {login && (
          <div
            className="mx-5 p-2 rounded-md hover:text-white"
            onClick={handleLogout}
          >
            로그아웃
          </div>
        )}

        {login && (
          <Link to="/profile">
            <img
              alt="프로필 이미지"
              src={profileImg}
              className="w-6 rounded-full object-cover"
            />
          </Link>
        )}
      </div>
    </header>
  );
}

//{/**<span className="absolute top-4 right-5 flex items-center justify-center h-2 w-2 rounded-full bg-red-600 text-white text-xs font-bold"></span>*/}
