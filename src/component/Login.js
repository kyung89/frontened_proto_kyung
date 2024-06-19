import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from 'axios';
import LoginForm from "./LoginForm";
import Login_cp from "./Login_cp";
import { isLogin, username, profileImage } from "./StAtom";

export default function Login() {
    const [user, setUser] = useState(null); // 사용자 상태 초기화
    const [isLoginCheck, setIsLoginCheck] = useRecoilState(isLogin); // Recoil을 이용한 로그인 상태 관리
    const [isu, setIsu] = useRecoilState(username); // Recoil을 이용한 사용자 이름 관리
    const [userData, setUserData] = useState(null); // Axios로 가져온 사용자 데이터 상태
    const [profileImg, setProfileImg] = useRecoilState(profileImage);

    useEffect(() => {
        // 컴포넌트 마운트 시 로컬 스토리지에서 사용자 데이터 가져오기
        const userinfo = JSON.parse(localStorage.getItem('userData'));
        if (userinfo) {
            setUserData(userinfo);
            setProfileImg(userinfo.profileImage); // Recoil 상태에 프로필 이미지 저장
            
            // console.log(userinfo)
        }
    }, []);

    const fetchUserData = async (username) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('토큰이 없습니다. 사용자 정보를 가져올 수 없습니다.');
                return;
            }

            const userInfoResponse = await axios.post(
                'http://localhost:8080/user/userInfo',
                { username },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            
            setUserData(userInfoResponse.data); // Axios로 가져온 데이터로 상태 업데이트
            setProfileImg(userInfoResponse.data.profileImage); // Recoil 상태에 프로필 이미지 저장
            localStorage.setItem("userData", JSON.stringify(userInfoResponse.data));
            // console.log(JSON.stringify(userInfoResponse.data)); // 사용자 데이터 로깅
        } catch (error) {
            console.error('사용자 정보를 가져오는 중 오류 발생:', error);
        }
    };

    const handleLogin = (u) => {
        localStorage.setItem('user', u);
        setUser(u);
        setIsLoginCheck(true);
        setIsu(u);
        fetchUserData(u); // 로그인 성공 후 사용자 데이터 가져오기
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('userData');
        setUser(null);
        setIsLoginCheck(false);
        setIsu(null);
        setUserData(null);
    };

    return (
        <div>
            <div className='flex items-center justify-center min-h-screen'>
                {isLoginCheck ? <Login_cp user={user} handleLogout={handleLogout} userData={userData} /> : <LoginForm handleLogin={handleLogin} />}
            </div>
            {isLoginCheck && userData && (
                <div>
                    <p>{isu}</p>
              
                </div>
            )}
        </div>
    );
}
