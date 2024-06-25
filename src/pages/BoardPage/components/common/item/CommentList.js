import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import axios from "axios";

export default function CommentList({ postId }) {
  const [commentInfos, setCommentInfos] = useState([]);
  // 댓글 정보 가져오기
  useEffect(() => {
    axios
      .get(`http://localhost:8080/comments/post/${postId}`)
      .then(function (response) {
        // 성공 핸들링

        let data = response.data;

        data.sort(function(a, b) {
          return b.id - a.id;
        });

        setCommentInfos(data);
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      })
      .finally(function () {
        // 항상 실행되는 영역
      });
  }, [postId]);

  return (
    <div>
      {commentInfos.map((commentInfo, index) => (
        <Comment key={index} commentInfo={commentInfo} />
      ))}
    </div>
  );
}
