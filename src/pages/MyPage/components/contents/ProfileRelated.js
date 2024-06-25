import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLogin, userDataState } from "../../../../component/StAtom";
import axios from "axios";

export default function ProfileRelated() {
  const [isLoginCheck, setIsLoginCheck] = useRecoilState(isLogin); // Recoil을 이용한 로그인 상태 관리
  const [userData, setUserData] = useRecoilState(userDataState); // Recoil을 이용한 사용자 정보 관리

  // isLoginCheck에 따른 처리 필요. 일단 지금은 기능 동작하는 것 구현.

  // Step 1: 사용자 이름과 비밀번호 입력
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Step 2: 나머지 정보 및 역할(Role) 입력
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");

  // Step 3: 프로필 사진 설정
  const [profileImage, setProfileImg] = useState(null); // 파일 객체 저장

  const navigator = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    setUsername(userData.username);

    setName(userData.name);
    setEmail(userData.email);
    setPhone(userData.phone);
    setAddress(userData.address);
    setRole(userData.role); //가져오지 못함

    setProfileImg(userData.profileImage); //어떻게 처리할지 모르겠음
  }, []);

  // 회원정보 수정
  const EditProfile = async () => {
    // 일단 profileImg 는 빼고 구현해본다.

    const formData = {
      name,
      email,
      phone,
      address,
    };

    const token = localStorage.getItem("token");
    await axios
      .post("http://localhost:8080/user/editUserInfo", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        // 성공 핸들링
        alert("회원정보 수정이 완료되었습니다. 다시 로그인해주세요.");

        //로그아웃 처리
        const complete = handleLogout();
        if (complete) navigator("/login");
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);

        alert("회원정보 수정에 실패하였습니다. ");
      })
      .finally(function () {
        // 항상 실행되는 영역
      });
  };

  const handleLogout = () => {
    // 로컬 스토리지의 데이터 삭제
    localStorage.removeItem("userData");
    localStorage.removeItem("token");

    // Recoil 관리 데이터 삭제
    setIsLoginCheck(false);
    setUserData(null);

    return "complete";
  };

  // 파일 선택 핸들러
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfileImg(file);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white border rounded-lg shadow-2xl">
        <div className="max-w-md mx-auto space-y-4">
          <h2 className="text-2xl font-bold pb-5">회원 정보 수정</h2>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium"
            >
              username &nbsp;&nbsp;&nbsp;
              <span className="text-xs text-red-600">*username은 수정불가</span>
            </label>
            <input
              type="text"
              id="username"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 hover:ring-green-500 hover:border-green-500 w-full py-2.5 px-4"
              placeholder="hanifarm_"
              value={username}
              readOnly
            />
          </div>
          {/**<div className="mb-4">
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
            <div></div>
          </div>*/}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 hover:ring-green-500 hover:border-green-500 w-full py-2.5 px-4"
              placeholder="이름을 입력하세요"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 hover:ring-green-500 hover:border-green-500 w-full py-2.5 px-4"
              placeholder="farmhani@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">
              phone
            </label>
            <input
              type="text"
              id="phone"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 hover:ring-green-500 hover:border-green-500 w-full py-2.5 px-4"
              placeholder="010-0000-0000"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-2 text-sm font-medium">
              address
            </label>
            <input
              type="text"
              id="address"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 hover:ring-green-500 hover:border-green-500 w-full py-2.5 px-4"
              placeholder="부산광역시/OO구/OO동"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button
            onClick={EditProfile}
            className="mt-5 text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
          >
            Submit
          </button>
          <div className="mt-5 text-red-500 underline">
            <Link to="/resign">탈퇴를 원하십니까?</Link>
          </div>

          <div className="mt-5 text-red-500 underline">
            <Link to="/pwdedit">비밀번호 수정을 원하십니까?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
