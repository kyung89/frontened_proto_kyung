import React from "react";
import CommentInput from "./item/CommentInput";
import Comment from "./item/Comment";

// 일단 기본적인 상세 글보기: 나중에 잘 나눠서 정리해야함. 로직 꼬이는 것 방지하고 유지보수 생각
export default function SeeDetail() {
  return (
    <div className="grow w-full h-full p-6 bg-white">
      <div className="w-full pl-6 p-3 m-2 bg-white border border-gray-200 rounded-lg shadow">
        <ul className="flex flex-row">
          <li className="w-24 bg-slate-200 mr-2">글번호</li>
          <li className="bg-slate-200 mr-2 flex-grow">제목</li>
          <li className="w-48 bg-slate-200 mr-2">아이디</li>
          <li className="w-48 bg-slate-200 mr-2">날짜</li>
          <li className="w-24 bg-slate-200">조회수</li>
        </ul>
      </div>
      <div className="w-full min-h-96 p-6 m-2 bg-white border border-gray-200 rounded-lg shadow">
        글내용
      </div>
      <div className="flex items-center justify-center w-full h-20 p-6 m-2 bg-white border border-gray-200 rounded-lg shadow">
        {/** 나중에 버튼 component 는 따로 분리 */}
        <button className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
          Edit Post
        </button>
        <button className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
          Delete Post
        </button>
      </div>
      <div className="w-full min-h-56 p-6 m-2 bg-white border border-gray-200 rounded-lg shadow">
        <CommentInput />
        <div className="grow">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
      <div className="h-5"></div>
    </div>
  );
  
}
