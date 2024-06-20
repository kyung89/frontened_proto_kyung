import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";
import LoginForm from "./LoginForm";
import LoginCp from "./LoginCp";
import { isLogin, userDataState, tokenState } from "./StAtom";

// Recoil의 데이터는 어플리케이션이 살아있는 동안은 살아있다.
// localstorage의 데이터는 명시적으로 삭제되지 않는 한 무기한으로 유지된다.

export default function Login() {
  // user과 username 은 대체 뭔 차이인지 모르겠음: 둘다 사용자 정보에서 username 정보를 저장하고 있음

  // Recoil을 이용한 정보관리: 이건 나중에 다시 체크해봐야 함
  const [isLoginCheck, setIsLoginCheck] = useRecoilState(isLogin); // Recoil을 이용한 로그인 상태 관리
  const [userData, setUserData] = useRecoilState(userDataState); // Axios로 가져온 사용자 데이터 상태
  const token = useRecoilValue(tokenState);
  // Recoil로 관리할 값과 localStorage에서 관리할 값을 구분해야할 것 같다.

  useEffect(() => {
    // 처음 페이지에 들어올 때 로컬 스토리지에서 사용자 데이터가 있는지 체크하고, 있으면 가져온다.
    // 사용자 데이터가 있으면 로그인 상태이기도 하다. 둘이 같이 움직이게 체크해둬야 함

    // 어차피 localStorage 에서 관리할 거면 따로 Recoil에 저장해둘 필요가 있을까?
    // localStorage 에 있는 데이터가 살아있고 죽는 경우를 체크해둘 것

    // 같이 움직일 데이터:
    // 1. localStorage: username(없앨 예정), user(없앨 예정), userData, token
    // 2. Recoil: isLogin, username(없앨 예정), profileImage(없앨 예정), userDataState
    //const userData = JSON.parse(localStorage.getItem("userData"));
    if (isLoginCheck) {
      // 로컬 스토리지에 userData 정보가 있다.

      setUserData(userData); // axios 로 가져올 필요없이 로그인한 사용자 정보가 있다.

      // Recoil 관리값: Recoil에 대해 좀더 알아봐야 한다
      setIsLoginCheck(true);
    }
  }, []); // 페이지에 들어올 때 단 한번만 실행

  // 서버에서 사용자 정보를 가져오는 함수: 로그인의 경우에만 사용한다
  const fetchUserData = async (username) => {
    try {
      //const token = localStorage.getItem("token"); // 로그인할 때 로컬 스토리지에 저장하는 값 체크필요

      if (!token) {
        console.error("토큰이 없습니다. 사용자 정보를 가져올 수 없습니다.");
        return;
      }

      // 사용자 정보 가져오기
      const userInfoResponse = await axios.post(
        "http://localhost:8080/user/userInfo",
        { username },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUserData(userInfoResponse.data); // Axios로 가져온 데이터로 상태 업데이트
      //localStorage.setItem("userData", JSON.stringify(userInfoResponse.data));

      // Recoil 관리 값들
      setIsLoginCheck(true);

      // console.log(JSON.stringify(userInfoResponse.data)); // 사용자 데이터 로깅
    } catch (error) {
      console.error("사용자 정보를 가져오는 중 오류 발생:", error);
    }
  };

  // 로그인 기능의 함수
  const handleLogin = (u) => {
    //알아보기 어려워...서버로 로그인 정보 체크하는 부분이 다른 파일에 있음
    localStorage.setItem("user", u);
    setIsLoginCheck(true);
    fetchUserData(u); // 로그인 성공 후 사용자 데이터 가져오기
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userData");

    localStorage.removeItem("username"); //경림추가
    localStorage.removeItem("token"); //경림추가

    setIsLoginCheck(false);

    setUserData(null);
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        {/** 로그인 상태에서는 LoginCp, 로그인하지않은 상태에서는 LoginForm */}
        {isLoginCheck ? (
          <LoginCp handleLogout={handleLogout} />
        ) : (
          <LoginForm handleLogin={handleLogin} />
        )}
      </div>
    </div>
  );
}
