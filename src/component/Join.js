import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Join() {
  // Step 1: 사용자 이름과 비밀번호 입력
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameExists, setUsernameExists] = useState(false); // 계정이 이미 있는지 여부
  const [usernameCheckMessage, setUsernameCheckMessage] = useState(''); // 사용자 이름 중복 체크 메시지
  // const onFileChanges = (event) => console.log(event.target.files);

  // Step 2: 나머지 정보 및 역할(Role) 입력
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [role, setRole] = useState('');

  // Step 3: 프로필 사진 설정
  const [profileImage, setProfileImg] = useState(null); // 파일 객체 저장



  // 단계 관리
  const [step, setStep] = useState(1);

  // Step 1 폼 제출 핸들러
  const handleStep1Submit = async (e) => {
    e.preventDefault();

    try {
      // 클라이언트에서 서버로 사용자 이름 중복 체크 요청 보내기
      let urls = `http://localhost:8080/login/doubleCheck?username=${username}`
      const response = await axios.post(urls);
      console.log(urls)
      console.log("로그확인")
      console.log(response.status
      )
      if (response.status === 200) {
        setUsernameExists(false);
        setUsernameCheckMessage('사용 가능한 아이디입니다.');
        setStep(2); // 사용 가능한 경우 다음 단계로 이동
      } else {
        setUsernameCheckMessage('아이디 중복검사를 해주세요.');
      }
    } catch (error) {
      if (error.response.status === 409) {
        setUsernameExists(true);
        setUsernameCheckMessage('이미 사용중인 아이디입니다.');
      } else {
        console.error('Error checking username:', error);
        setUsernameCheckMessage('아이디 중복검사를 시행세요.');
      }
    }
  };
  // Step 2 폼 제출 핸들러
  // const handleStep2Submit = (e) => {
  //   e.preventDefault();
  //   setStep(3);
  // };

  // 파일 선택 핸들러
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfileImg(file);
  };
  // 전체 회원 가입 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('memberDto', new Blob([JSON.stringify({
      username,
      password,
      name,
      email,
      phone,
      address,
      role
    })], { type: "application/json" }));


    if (profileImage) {
      const blob = new Blob([profileImage], { type: profileImage.type });
      formData.append('profileImage', blob, profileImage.name);
    }
    // console.log('FormData contents:');
    // for (let pair of formData.entries()) {
    //   console.log(pair[0], pair[1]);
    // }

    try {
      const response = await axios.post('http://localhost:8080/login/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Registration successful:', response.data);
      setStep(4);
    } catch (error) {
      if (error.response) {
        // 서버로부터의 응답이 있을 경우
        console.error('Error registering:', error.response.data);
      } else if (error.request) {
        // 요청이 서버에 전달되지 않았을 경우
        console.error('Request failed:', error.request);
      } else {
        // 오류가 발생한 경우
        console.error('Error registering:', error.message);
      }
    }
  };
  //파일 타입알기-인코딩할때 필요


  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='w-11/12 max-w-lg px-10 py-8 mx-auto bg-white border rounded-lg shadow-2xl'>
        <div className='max-w-md mx-auto space-y-4'>
          <h2 className="text-2xl font-bold pb-5">SignUp</h2>

          {/* 첫 번째 단계 */}
          {(step === 1) && (
            <form onSubmit={handleStep1Submit}>
              <div className="mb-4">
                <label htmlFor="username" className="block mb-2 text-sm font-medium">username</label>
                <input
                  type="text"
                  id="username"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 hover:ring-green-500 hover:border-green-500 w-full py-2.5 px-4"
                  placeholder="hanifarm_"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {usernameCheckMessage && (
                <div className={`mb-4 ${usernameExists ? 'text-red-600' : 'text-green-600'}`}>
                  {usernameCheckMessage}
                </div>
              )}
              <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-sm font-medium">password</label>
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
                type="submit"
                className="text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
              >Next</button>
              <div className="mt-2 text-sm">
                Already have an account? <Link to="/login" className="underline cursor-pointer">Sign in</Link>
              </div>
            </form>
          )}

          {/* 두 번째 단계 */}
          {(step === 2) && (
            <form onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-sm font-medium">name</label>
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
                <label htmlFor="email" className="block mb-2 text-sm font-medium">email</label>
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
                <label htmlFor="phone" className="block mb-2 text-sm font-medium">phone</label>
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
                <label htmlFor="address" className="block mb-2 text-sm font-medium">address</label>
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
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">ROLE</label>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="ROLE_CUSTOMER"
                    name="role"
                    value="ROLE_CUSTOMER"
                    checked={role === 'ROLE_CUSTOMER'}
                    onChange={(e) => setRole(e.target.value)}
                    className="mr-2"
                  />
                  <label htmlFor="ROLE_CUSTOMER" className="mr-4 text-sm">CUSTOMER</label>
                  <input
                    type="radio"
                    id="ROLE_FARMER"
                    name="role"
                    value="ROLE_FARMER"
                    checked={role === 'ROLE_FARMER'}
                    onChange={(e) => setRole(e.target.value)}
                    className="mr-2"
                  />
                  <label htmlFor="ROLE_FARMER" className='text-sm'>FARMER</label>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
              >Next</button>
              <div className="mt-2 text-sm">
                Already have an account? <Link to="/login" className="underline cursor-pointer">Sign in</Link>
              </div>
            </form>
          )}

          {(step === 3) && (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="profileImage" className="block mb-2 text-sm font-medium">프로필 사진 설정</label>
                <input
                  type="file"
                  id="profileImage"
                  accept="image/png, image/jpeg, image/jpg"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 hover:ring-green-500 hover:border-green-500 w-full py-2.5 px-4"
                  onChange={handleFileChange}
                />
              </div>
              <button
                type="submit"
                className="text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
              >Register</button>
              <div className="mt-2 text-sm">
                Already have an account? <Link to="/login" className="underline cursor-pointer">Sign in</Link>
              </div>
            </form>
          )}
          {/* FetchUserInfo 컴포넌트를 통해 사용자 정보 가져오기 */}

          {/* 네 번째 단계 */}
          {(step === 4) && (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-5">Registration Complete</h2>
              <div className="mb-5">

              </div>
              <p className="text-lg mb-5">{username}님 가입을 축하합니다!</p>
              <Link to="/" className="text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5">
                홈으로 가기
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
