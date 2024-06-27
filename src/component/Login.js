import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";
import LoginForm from "./LoginForm";
import LoginCp from "./LoginCp";
import { isLogin, userDataState } from "./StAtom";

// Recoil의 데이터는 어플리케이션이 살아있는 동안은 살아있다.
// localstorage의 데이터는 명시적으로 삭제되지 않는 한 무기한으로 유지된다.

// Recoil에서 관리하는 데이터: isLogin(로그인여부), userDataState(로그인 사용자 데이터)
// localStorage에서 관리하는 데이터: token, userData(로그인 사용자 데이터)

// 로그인 사용자 데이터를 한곳에서 관리할지는 추후 생각해보자
// Recoil로 관리할 값과 localStorage에서 관리할 값을 구분하자

// 01. 회원정보관리: username 보다 userid 가 나았을지도. 기존에 name 이 있어 헷갈림[일단둔다]
// 02. 로그인창에도 username 보다 user ID 가 나을 것 같다[일단둔다]

export default function Login() {
  const [isLoginCheck, setIsLoginCheck] = useRecoilState(isLogin); // Recoil을 이용한 로그인 상태 관리
  const [userData, setUserData] = useRecoilState(userDataState); // Recoil을 이용한 사용자 정보 관리

  useEffect(() => {
    // 처음 페이지에 들어올 때 로컬 스토리지에서 사용자 데이터가 있는지 체크하고, 있으면 가져온다.

    // 같이 움직일 데이터:
    // 1. localStorage: userData, token
    // 2. Recoil: isLogin, userData
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      // 로컬 스토리지에 userData 정보가 있다. (userData, token 값 있음)
      // 로컬 스토리지의 값을 recoil 값들에 업데이트한다.

      setIsLoginCheck(true);
      setUserData(userData); // axios 로 가져올 필요없이 로그인한 사용자 정보가 있다.
    }
  }, []);

  // 서버에서 사용자 정보를 가져오는 함수: 로그인(토큰 겟 성공)의 경우에만 사용한다
  const fetchUserData = async (username) => {
    try {
      // LoginCp 에서 받은 token 정보로 사용자 정보를 가져온다
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("토큰이 없습니다. 사용자 정보를 가져올 수 없습니다.");
        return;
      }

      // 사용자 정보 가져오기
      const userInfoResponse = await axios
        .post(
          "http://localhost:8080/user/userInfo",
          { username },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(function (response) {
          // 성공 핸들링
          localStorage.setItem("userData", JSON.stringify(response.data));
          // Recoil 관리 값들
          setIsLoginCheck(true); // 사용자 정보를 가져와야만 비로소 진짜 로그인으로 처리
          setUserData(response.data);
        })
        .catch(function (error) {
          // 에러 핸들링
          console.log(error);
        })
        .finally(function () {
          // 항상 실행되는 영역
        });

      // localStorage의 token 값은 LoginCp에서 setItem 해주고 있음
      //localStorage.setItem("userData", JSON.stringify(userInfoResponse.data));
    } catch (error) {
      console.error("사용자 정보를 가져오는 중 오류 발생:", error);
    }
  };

  // 로그인 기능의 함수
  const handleLogin = (u) => {
    fetchUserData(u); // 로그인 성공(토큰 겟) 후 사용자 데이터 가져오기
  };

  const handleLogout = () => {
    // 로컬 스토리지의 데이터 삭제
    localStorage.removeItem("userData");
    localStorage.removeItem("token");

    // Recoil 관리 데이터 삭제
    setIsLoginCheck(false);
    setUserData(null);

    window.location.reload();
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
