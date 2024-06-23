import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function WriteNewPost() {
  const [sParams] = useSearchParams();
  const category = sParams.get("category");
  const no = sParams.get("no");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const userData = JSON.parse(localStorage.getItem("userData"));

  const navigator = useNavigate();

  const handleWriteCompleteBtn = async () => {
    const token = localStorage.getItem("token");
    await axios.post(
      `http://localhost:8080/post`,
      {
        title,
        content,
        category,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    navigator(`/board?category=${category}`);
  };

  const handleBackToPostsBtn = () => {
    navigator(`/board?category=${category}`);
  };

  return (
    <div className="grow w-full h-full p-6 bg-white">
      <div className="ml-2">{category}</div>
      <>
        <div className="w-full pl-6 p-3 m-2 bg-white border border-gray-200 rounded-lg shadow">
          <ul className="flex flex-row justify-center items-center">
            <li className="w-20 bg-slate-200 mr-2 text-xs">
              <span className="font-bold text-blue-800">글번호:</span>
              &nbsp;&nbsp;
              {no}
            </li>
            <li className="bg-slate-200 mr-2 flex-grow text-xs">
              <span className="font-bold text-blue-800">제목:</span>
              &nbsp;&nbsp;
              <input
                className="w-11/12 border border-slat-200"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </li>
            <li className="w-40 bg-slate-200 mr-2 text-xs">
              <span className="font-bold text-blue-800">작성자:</span>
              &nbsp;&nbsp;
              {userData.username}
            </li>
          </ul>
        </div>
        <div className="w-full min-h-96 p-6 m-2 bg-white border border-gray-200 rounded-lg shadow">
          <textarea
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-96"
            value={content}
          ></textarea>
        </div>
        <div className="flex items-center justify-center w-full h-20 p-6 m-2 bg-white border border-gray-200 rounded-lg shadow">
          {/** 나중에 버튼 component 는 따로 분리 */}
          <button
            onClick={handleWriteCompleteBtn}
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-800 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-green-900"
          >
            Write Complete
          </button>
          &nbsp;&nbsp;&nbsp; {/** 나중에 수정!!! */}
          <button
            onClick={handleBackToPostsBtn}
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-800 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-green-900"
          >
            Back To Posts
          </button>
        </div>
      </>
      <div className="h-5"></div>
    </div>
  );
}
