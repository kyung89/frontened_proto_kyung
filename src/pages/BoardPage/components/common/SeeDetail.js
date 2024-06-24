import React, { useEffect, useState } from "react";
import CommentInput from "./item/CommentInput";

import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CommentList from "./item/CommentList";

// 삭제, 수정 버튼은 로그인한 사용자가 글 작성자와 일치하는 경우만 보여준다. 아니면 disabled 하던지

// 일단 기본적인 상세 글보기: 나중에 잘 나눠서 정리해야함. 로직 꼬이는 것 방지하고 유지보수 생각

// 게시판 일단 보이는 기능을 구현하되 postId 정보를 recoil 로 관리하는게 나을수도 있다.

export default function SeeDetail() {
  const [sParams] = useSearchParams();
  const postId = sParams.get("postid");
  const no = sParams.get("no");
  const category = sParams.get("category");
  const [post, setPost] = useState(null);
  const navigator = useNavigate();
  const [login, setLogin] = useState(false);
  const [countComment, setCountComment] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/posts/${postId}`)
      .then(function (response) {
        // 성공 핸들링
        setPost(response.data);

        //console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      })
      .finally(function () {
        // 항상 실행되는 영역
      });

    const userData1 = JSON.parse(localStorage.getItem("userData"));
    if (userData1) setLogin(true);

    //댓글 개수 가져오기
    axios
      .get(`http://localhost:8080/comments/post/${postId}`)
      .then(function (response) {
        // 성공 핸들링
        setCountComment(response.data.length);
        console.log("count", response.data.length);
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      })
      .finally(function () {
        // 항상 실행되는 영역
      });
  }, [postId]);

  // 작성자 체크
  const alertNotWriter = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData.username !== post.createdBy) {
      alert("작성자만이 수정, 삭제가 가능합니다.");
      return false;
    } else {
      return true;
    }
  };

  // 글 수정 기능: 수정 페이지로 이동
  const handleEditPostBtn = () => {
    if (alertNotWriter()) {
      // postId 사용
      navigator(`/boardedit?postid=${postId}&no=${no}&category=${category}`);
    }
  };

  // 글 삭제 기능: 삭제확인창 후 글 삭제, 삭제 이후 목록으로 이동(커뮤니티 글이면 커뮤니티 게시판으로)
  const handleDeleteBtn = async () => {
    if (alertNotWriter()) {
      // postId 사용
      if (
        window.confirm(
          "글을 삭제하시겠습니까? 삭제가 완료되면 게시글 목록으로 이동합니다."
        )
      ) {
        console.log("삭제!");

        const token = localStorage.getItem("token");
        const delComplete = await axios.delete(
          `http://localhost:8080/post/${postId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (delComplete) {
          navigator(`/board?category=${post.category}`);
        }
      }
    }
  };

  // 글 목록으로 돌아가기: 커뮤니티 글이면 커뮤니티 게시판으로
  const handleBackToPostsBtn = () => {
    navigator(`/board?category=${post.category}`);
  };

  return (
    <div className="grow w-full h-full p-6 bg-white">
      {post && (
        <>
          <div className="ml-2">{category}</div>
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
                {post.title}
              </li>
              <li className="w-40 bg-slate-200 mr-2 text-xs">
                <span className="font-bold text-blue-800">작성자:</span>
                &nbsp;&nbsp;
                {post.createdBy}
              </li>
              <li className="w-44 bg-slate-200 mr-2 text-xs">
                <span className="font-bold text-blue-800">작성날짜:</span>&nbsp;
                {post.postDate.substring(0, 10)}
              </li>
              <li className="w-44 bg-slate-200 mr-2 text-xs">
                <span className="font-bold text-blue-800">수정날짜:</span>&nbsp;
                {post.updateDate.substring(0, 10)}
              </li>
              <li className="w-20 bg-slate-200 text-xs">
                <span className="font-bold text-blue-800">조회수:</span>
                &nbsp;&nbsp;
                {post.viewCount}
              </li>
            </ul>
          </div>
          <div className="w-full min-h-96 p-6 m-2 bg-white border border-gray-200 rounded-lg shadow">
            {post.content}
          </div>
          <div className="flex items-center justify-center w-full h-20 p-6 m-2 bg-white border border-gray-200 rounded-lg shadow">
            {/** 나중에 버튼 component 는 따로 분리 */}
            {login && (
              <button
                onClick={handleEditPostBtn}
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-800 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-green-900"
              >
                Edit Post
              </button>
            )}
            &nbsp;&nbsp;&nbsp; {/** 나중에 수정!!! */}
            {login && (
              <button
                onClick={handleDeleteBtn}
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-800 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-green-900"
              >
                Delete Post
              </button>
            )}
            &nbsp;&nbsp;&nbsp; {/** 나중에 수정!!! */}
            <button
              onClick={handleBackToPostsBtn}
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-800 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-green-900"
            >
              Back To Posts
            </button>
          </div>

          <div className="w-full min-h-56 p-6 m-2 bg-white border border-gray-200 rounded-lg shadow">
            {login && <CommentInput postId={postId} />}
            <div className="grow">
              <CommentList postId={postId} />
            </div>
          </div>
          <div className="h-5"></div>
        </>
      )}
    </div>
  );
}
