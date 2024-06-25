import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { isLogin, userDataState } from "../../../../component/StAtom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PwdEdit() {

  const [isLoginCheck, setIsLoginCheck] = useRecoilState(isLogin); // Recoil을 이용한 로그인 상태 관리
  const [userData, setUserData] = useRecoilState(userDataState); // Recoil을 이용한 사용자 정보 관리

  const [password, setPassword] = useState("");

  const navigator = useNavigate();

  const editPwd = async () => {

    if(!window.confirm("비밀번호를 정말로 수정하시겠습니까?")) return;

    const params = new URLSearchParams();
    params.append('password', password);

    const token = localStorage.getItem("token");
    await axios
      .post("http://localhost:8080/user/editUserPass", params, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        // 성공 핸들링
        alert("비밀번호 수정이 완료되었습니다. 다시 로그인해주세요.");

        //로그아웃 처리
        const complete = handleLogout();
        if (complete) navigator("/login");
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);

        alert("비밀번호 수정에 실패하였습니다. ");
      })
      .finally(function () {
        // 항상 실행되는 영역
      });
  }

  const handleLogout = () => {
    // 로컬 스토리지의 데이터 삭제
    localStorage.removeItem("userData");
    localStorage.removeItem("token");

    // Recoil 관리 데이터 삭제
    setIsLoginCheck(false);
    setUserData(null);

    return "complete";
  };

  return (
    <>
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-11/12 max-w-lg px-10 py-8 mx-auto bg-white border rounded-lg shadow-2xl">
        <div className="max-w-md mx-auto space-y-4">
          <h2 className="text-2xl font-bold pb-5">비밀번호 수정</h2>
    <div className="mb-4">
      <label
        htmlFor="password"
        className="block mb-2 text-sm font-medium"
      >
        password
      </label>
      <input
        type="password"
        id="password"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 hover:ring-green-500 hover:border-green-500 w-full py-2.5 px-4"
        placeholder="*********"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <button
      onClick={editPwd}
      className="text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
    >
      Edit Pwd
    </button>
    </div>
    </div>
    </div>
    </>
  );
}
