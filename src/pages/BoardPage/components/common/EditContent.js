import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

// 삭제, 수정 버튼은 로그인한 사용자가 글 작성자와 일치하는 경우만 보여준다. 아니면 disabled 하던지
// 이 상태에서 상세글보기로 뒤로가기 하면 데이터가 날라감: 고쳐야 함!!!
// post 정보를 recoil에서 다루는 것을 고려하자

// 글을 수정하면 수정날짜가 반영되어야 한다

// 일단 기본적인 상세 글보기: 나중에 잘 나눠서 정리해야함. 로직 꼬이는 것 방지하고 유지보수 생각
export default function EditContent() {
  const [sParams] = useSearchParams();
  const postId = sParams.get("postid");
  const no = sParams.get("no");
  const [post, setPost] = useState(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigator = useNavigate();

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
  }, [postId]);

  useEffect(() => {
    if (!post) return;
    setTitle(post.title);
    setContent(post.content);
  }, [post]);

  // 글 수정 완료
  const handleEditCompleteBtn = async () => {
    // postId 사용
    if (
      window.confirm(
        "글을 수정하시겠습니까? 수정이 완료되면 수정사항이 적용된 글 상세보기로 이동합니다."
      )
    ) {
      console.log("수정!");

      const token = localStorage.getItem("token");
      const editComplete = await axios.put(
        `http://localhost:8080/post/${postId}`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (editComplete) {
        navigator(`/boarddetail?postid=${postId}`);
      }
    }
  };

  // 글 목록으로 돌아가기: 커뮤니티 글이면 커뮤니티 게시판으로
  const handleBackToPostsBtn = () => {
    navigator(`/board?type=${post.category}`);
  };

  return (
    <div className="grow w-full h-full p-6 bg-white">
      <div className="ml-2">커뮤니티 게시판</div>
      {post && (
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
            <textarea
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-96"
              value={content}
            ></textarea>
          </div>
          <div className="flex items-center justify-center w-full h-20 p-6 m-2 bg-white border border-gray-200 rounded-lg shadow">
            {/** 나중에 버튼 component 는 따로 분리 */}
            <button
              onClick={handleEditCompleteBtn}
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Edit Complete
            </button>
            &nbsp;&nbsp;&nbsp; {/** 나중에 수정!!! */}
            <button
              onClick={handleBackToPostsBtn}
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Back To Posts
            </button>
          </div>
        </>
      )}

      <div className="h-5"></div>
    </div>
  );
}
