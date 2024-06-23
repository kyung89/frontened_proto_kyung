import React, { useState } from "react";
import axios from "axios";

// tailwind 에 쓸만한 디자인이 많아서 선택해서 가져오면 될 것 같다
export default function CommentInput({ postId }) {
  const [comment, setComment] = useState("");

  const postComment = () => {
    const token = localStorage.getItem("token");
    axios
      .post(`http://localhost:8080/comment/${postId}`, null, {
        params: { comment: comment },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        // 성공 핸들링
        window.location.reload();
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      })
      .finally(function () {
        // 항상 실행되는 영역
      });
  };

  return (
    <div>
      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows="4"
            className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write a comment..."
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
          <button
            onClick={postComment}
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-800 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-green-900"
          >
            Post comment
          </button>
        </div>
      </div>
    </div>
  );
}
