import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import axios from "axios";

export default function CommentList({ postId }) {
  const [commentInfos, setCommentInfos] = useState([]);
  // 댓글 정보 가져오기
  useEffect(() => {
    axios
      .get(`http://localhost:8080/comments`)
      .then(function (response) {
        // 성공 핸들링
        console.log("comments", JSON.stringify(Object.keys(response.data)));
        setCommentInfos(
          response.data.map((item) => {
            return { ...item, member: { id: 6 } }; // 테스트용 임시
          })
        );
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      })
      .finally(function () {
        // 항상 실행되는 영역
      });
  }, []);

  useEffect(() => {
    console.log(commentInfos);
  }, [commentInfos]);

  return (
    <div>
      {commentInfos.map((commentInfo) => (
        <Comment commentInfo={commentInfo} key={commentInfo.id} />
      ))}
      {/* <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment /> */}
    </div>
  );
}
