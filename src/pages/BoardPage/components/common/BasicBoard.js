import React, { useEffect } from "react";
import { useState } from "react";
//import sampleData from "./realSample.json";
import { useNavigate } from "react-router-dom";
import BoardBtn from "./BoardBtn";
import axios from "axios";

// 기본 게시판
// 백엔드와 연동할 것을 고려해서 잘 짜야함!

// 기본 posts JSON 구조
// {"id":1,
//  "title":"게시글 제목 1",
//  "content":"게시글 내용 1",
//  "createdBy":"twobeercat",
//  "viewCount":0,
//  "category":"커뮤니티",
//  "postDate":"2024-06-20T09:35:24.556+00:00",
//  "updateDate":"2024-06-20T09:35:24.556+00:00"
//  }

// 일단 화면 표시에 성공하고 순서 뒤집기

const getCategoryName = (category) => {
  switch (category) {
    case "faq":
      return "FaQ 게시판";
    case "qna":
      return "QnA 게시판";
    case "notice":
      return "공지사항 게시판";
    case "free":
      return "자유 게시판";
    case "market":
      return "당근마켓 게시판";
    case "communtiy":
      return "커뮤니티 게시판";
    default:
      return "";
  }
};

export default function BasicBoard({ category, title, posts }) {
  const [trs, setTrs] = useState([]);
  const navigator = useNavigate();
  const [maxNo, setMaxNo] = useState(1);
  const [login, setLogin] = useState(false);

  // 게시글 상세보기로 이동하는 함수
  const seePostDetail = (postId, no) => {
    navigator(
      `/boarddetail?postid=${postId}&no=${no}&category=${category}&ct=${getCategoryName(
        category
      )}`
    );
  };

  useEffect(() => {
    if (posts === null || posts === undefined) return;

    let no = 1;
    const numberedPosts = posts
      //.reverse()
      .filter((post) => post.category === category)
      .map((post) => ({ ...post, no: no++ }))
      .reverse();

    const trs = numberedPosts.map((item) => (
      <tr
        key={item.id}
        className="border border-gray-400 h-10 hover:bg-gray-100 rounded-lg cursor-pointer"
        onClick={() => seePostDetail(item.id, item.no)}
      >
        <td className="border border-gray-200 w-[7%] text-center">{item.no}</td>
        <td className="border border-gray-200 w-[41%]">&nbsp;{item.title}</td>
        <td className="border border-gray-200 w-[15%] text-center">
          {item.createdBy}
        </td>
        <td className="border border-gray-200 w-[15%] text-center">
          {item.postDate.substring(0, 10)}
        </td>
        <td className="border border-gray-200 w-[15%] text-center">
          {item.updateDate.substring(0, 10)}
        </td>
        <td className="border border-gray-200 w-[7%] text-center">
          {item.viewCount}
        </td>
      </tr>
    ));

    setTrs(trs);
    setMaxNo(no);

    const userData1 = JSON.parse(localStorage.getItem("userData"));
    if (userData1) setLogin(true);
  }, [posts]);

  const gotoNewPost = async () => {
    navigator(`/boardwrite?category=${category}&no=${maxNo}`);
  };

  return (
    <div className="pt-3">
      <div className="p-5 text-lg font-bold">{title}</div>
      <div>
        <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
          <table className="w-full rounded-lg shadow border border-gray-400 ">
            <thead>
              <tr className="w-full bg-gray-400 h-8">
                <th className="w-[7%] text-xs">글번호</th>
                <th className="w-[41%] text-xs">제목</th>
                <th className="w-[15%] text-xs">작성자</th>
                <th className="w-[15%] text-xs">작성일</th>
                <th className="w-[15%] text-xs">수정일</th>
                <th className="w-[7%] text-xs">조회수</th>
              </tr>
            </thead>
            <tbody>{trs}</tbody>
          </table>
        </div>
        {/** pagination 은 추후 구현할 것 */}
        {/**
        <div className="flex justify-center p-4">
          <table>
            <tbody>
              <tr>
                <td className="hover:bg-gray-100 bg-white border border-gray-400 rounded-lg shadow w-7 text-center">
                  {"<"}
                </td>
                <td className="hover:bg-gray-100 bg-white border border-gray-400 rounded-lg shadow w-7 text-center">
                  {"1"}
                </td>
                <td className="hover:bg-gray-100 bg-white border border-gray-400 rounded-lg shadow w-7 text-center">
                  {"2"}
                </td>
                <td className="hover:bg-gray-100 bg-white border border-gray-400 rounded-lg shadow w-7 text-center">
                  {"3"}
                </td>
                <td className="hover:bg-gray-100 bg-white border border-gray-400 rounded-lg shadow w-7 text-center">
                  {">"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        */}
      </div>
      <div className="flex justify-end m-6">
        {login && <BoardBtn btnTitle={"글쓰기"} handleClick={gotoNewPost} />}
      </div>
    </div>
  );
}
