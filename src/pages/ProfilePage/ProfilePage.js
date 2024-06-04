import React from "react";
import { useState } from "react";
import RequiredRed from "./components/RequiredRed";
import DaumPostcode from "react-daum-postcode";

// 기본적인 예시 구현해놓으면 될듯

export default function ProfilePage() {
  // 다음(카카오) 우편번호
  const completeHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-full flex flex-col p-5">
      <div className="flex flex-row justify-between">
        <div className="font-bold text-xl pb-5">기본정보</div>
        <div className="mr-0">
          <RequiredRed />
          필수입력사항
        </div>
      </div>
      <table className="border border-gray-300">
        <tr className="border border-gray-300">
          <td className="border border-gray-300 bg-slate-200 w-1/5 p-2">
            아이디
            <RequiredRed />
          </td>
          <td className="border border-gray-300 w-4/5 p-2">아이디 항목</td>
        </tr>

        <tr className="border border-gray-300">
          <td className="border border-gray-300 bg-slate-200 w-1/5 p-2">
            비밀번호
            <RequiredRed />
          </td>
          <td className="border border-gray-300 w-4/5 p-2">
            <input className="border border-gray-300" type="password" />
          </td>
        </tr>

        <tr className="border border-gray-300">
          <td className="border border-gray-300 bg-slate-200 w-1/5 p-2">
            비밀번호 확인
            <RequiredRed />
          </td>
          <td className="border border-gray-300 w-4/5 p-2">
            <input className="border border-gray-300" type="password" />
          </td>
        </tr>

        <tr className="border border-gray-300">
          <td className="border border-gray-300 bg-slate-200 w-1/5 p-2">
            비밀번호 확인 질문
            <RequiredRed />
          </td>
          <td className="border border-gray-300 w-4/5 p-2">
            <input className="border border-gray-300 w-96" type="text" />
          </td>
        </tr>

        <tr className="border border-gray-300">
          <td className="border border-gray-300 bg-slate-200 w-1/5 p-2">
            비밀번호 확인 답변
            <RequiredRed />
          </td>
          <td className="border border-gray-300 w-4/5 p-2">
            <input className="border border-gray-300 w-96" type="text" />
          </td>
        </tr>

        <tr className="border border-gray-300">
          <td className="border border-gray-300 bg-slate-200 w-1/5 p-2">
            이름
            <RequiredRed />
          </td>
          <td className="border border-gray-300 w-4/5 p-2">
            <input className="border border-gray-300" type="text" />
          </td>
        </tr>

        <tr className="border border-gray-300">
          <td className="border border-gray-300 bg-slate-200 w-1/5 p-2">
            주소
            <RequiredRed />
          </td>
          <td className="w-full p-2 flex flex-col">
            <div className="pb-2">
              <input className="border border-gray-300 w-16" type="text" />
              &nbsp;&nbsp;
              <button className="text-white bg-gray-500 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-1">
                우편번호
              </button>
            </div>
            <div className="pb-2">
              <input className="border border-gray-300 w-96" type="text" />
              &nbsp;<span className="text-sm text-gray-400">기본주소</span>
            </div>
            <div className="pb-2">
              <input className="border border-gray-300 w-96" type="text" />
              &nbsp;<span className="text-sm text-gray-400">나머지주소</span>
            </div>
          </td>
        </tr>

        <tr className="border border-gray-300">
          <td className="border border-gray-300 bg-slate-200 w-1/5 p-2">
            일반전화
          </td>
          <td className="border border-gray-300 w-4/5 p-2">
            <input className="border border-gray-300 w-16" type="text" />
            &nbsp;-&nbsp;
            <input className="border border-gray-300 w-16" type="text" />
            &nbsp;-&nbsp;
            <input className="border border-gray-300 w-16" type="text" />
          </td>
        </tr>

        <tr className="border border-gray-300">
          <td className="border border-gray-300 bg-slate-200 w-1/5 p-2">
            휴대전화
            <RequiredRed />
          </td>
          <td className="border border-gray-300 w-4/5 p-2">
            <input className="border border-gray-300 w-16" type="text" />
            &nbsp;-&nbsp;
            <input className="border border-gray-300 w-16" type="text" />
            &nbsp;-&nbsp;
            <input className="border border-gray-300 w-16" type="text" />
          </td>
        </tr>

        <tr className="border border-gray-300">
          <td className="border border-gray-300 bg-slate-200 w-1/5 p-2">
            이메일
            <RequiredRed />
          </td>
          <td className="border border-gray-300 w-4/5 p-2">
            <input className="border border-gray-300 w-96" type="text" />
          </td>
        </tr>
      </table>

      <div className="flex flex-row justify-between mx-auto">
        <div className="p-5">
          <button className="w-36 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            회원정보수정
          </button>
          <button className="w-36 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            취소
          </button>
        </div>
      </div>
      <div className="text-red-600 font-bold text-right underline">
        회원 탈퇴를 원하십니까?
      </div>
    </div>
  );
}
