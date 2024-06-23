import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

export default function ImgCard() {
  const writeCommunityPost = () => {
    alert("커뮤니티에 글을 쓰는 기능");
  };

  const deleteImg = () => {
    alert("이미지를 삭제하는 기능");
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src="/image/grape.jpg" alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
          2024-06-23 오후 04:32
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          과실이 맺히기 시작함...
        </p>
        <div className="flex flex-row justify-end">
          <FaRegEdit
            onClick={writeCommunityPost}
            className="cursor-pointer hover:text-green-800"
          />{" "}
          &nbsp; &nbsp;
          <FaRegTrashCan
            onClick={deleteImg}
            className="cursor-pointer hover:text-green-800"
          />
        </div>
      </div>
    </div>
  );
}
