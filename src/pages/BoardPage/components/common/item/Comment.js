import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import axios from "axios";

// 아이디 눌러서 쪽지 기능 구현해야함
export default function Comment({ commentInfo }) {
  const [editMode, setEditMode] = useState(false);
  const [comment, setComment] = useState(commentInfo.comment);
  const commentSave = commentInfo.comment;
  const [login, setLogin] = useState(false);
  // 버그가 있는지 좀더 테스트해봐야 함
  // 댓글을 정렬해서 보내준다면 댓글 내용이 바뀌는 버그가 없어질 것이라 예상됨
  // 댓글들을 불러올 때마다 순서가 바뀌고 있음.

  useEffect(() => {
    const userData1 = JSON.parse(localStorage.getItem("userData"));
    if (userData1) setLogin(true);
  }, []);

  //check user
  const checkUserSame = () => {
    const userData1 = JSON.parse(localStorage.getItem("userData"));
    const username = userData1.username;

    if (commentInfo.member === username) return true;
    else return false;
  };

  // 댓글 수정창 활성화
  const setEditModeTrue = () => {
    if (!checkUserSame()) {
      alert("댓글 작성자만이 해당 댓글을 수정할 수 있습니다.");
      return;
    }
    setEditMode(true);
  };

  // 댓글 수정창 비활성화
  const setEditModeFalse = () => {
    setComment(commentSave);
    setEditMode(false);
  };

  // 댓글 수정하기
  const editComment = async () => {
    if (window.confirm("해당 댓글을 수정하시겠습니까?")) {
      
      const commentId = commentInfo.id;

      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:8080/comment/${commentId}`, comment, {
        headers: {
          "Content-Type": "text/plain",
          Authorization: `Bearer ${token}`,
        },
      });
      window.location.reload();
    }
  };

  // 댓글 삭제 기능
  const deleteComment = async () => {
    if (!checkUserSame()) {
      alert("댓글 작성자만이 해당 댓글을 삭제할 수 있습니다.");
      return;
    }

    const commentId = commentInfo.id;

    if (window.confirm("해당 댓글을 삭제하시겠습니까?")) {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:8080/comment/${commentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-row mb-2 w-full h-full p-6 bg-white border border-gray-200 rounded-lg">
      <div className="w-full">
        <div className="flex flex-row justify-between mb-2">
          <div className="text-xs font-medium text-gray-800">
            {commentInfo.member}
          </div>
        </div>
        {!editMode && <p className="text-xs">{comment}</p>}
        {editMode && (
          <>
            <div>
              <input
                className="w-full text-xs"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-end">
              <div
                className="text-xs text-green-800 cursor-pointer hover:underline"
                onClick={editComment}
              >
                댓글수정하기
              </div>
              <div className="text-xs text-green-800">&nbsp;|&nbsp;</div>
              <div
                className="text-xs text-green-800 cursor-pointer hover:underline"
                onClick={setEditModeFalse}
              >
                댓글수정취소
              </div>
            </div>
          </>
        )}
      </div>
      {!editMode && login && (
        <div className="">
          <div className="mb-2">
            <FaRegEdit
              className="cursor-pointer hover:text-green-800"
              onClick={setEditModeTrue}
            />
          </div>
          <div>
            <FaRegTrashCan
              className="cursor-pointer hover:text-green-800"
              onClick={deleteComment}
            />
          </div>
        </div>
      )}
    </div>
  );
}
