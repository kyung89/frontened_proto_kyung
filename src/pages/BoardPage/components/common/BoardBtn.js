import React from "react";

export default function BoardBtn({ btnTitle, handleClick }) {
  return (
    <button
      className="w-40 text-white bg-gray-400 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      onClick={() => handleClick("qna")}
    >
      {btnTitle}
    </button>
  );
}
