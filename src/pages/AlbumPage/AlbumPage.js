import React from "react";
import ImgCard from "./components/ImgCard";

export default function AlbumPage() {
  return (
    <div className="grid grid-cols-1 w-10/12 h-auto p-6 m-6 bg-white border border-gray-200 rounded-lg shadow">
      <div className="bg-white border border-gray-200 rounded-lg w-[20.5rem] float-right mb-6">
        <select className="w-80 rounded-lg" name="fruit">
          <option value="바나나">바나나</option>
          <option value="사과">사과</option>
          <option value="파인애플" selected="selected">
            파인애플
          </option>
        </select>
      </div>
      <div className="bg-white rounded-lg h-full grid grid-cols-4 gap-4">
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
        <ImgCard />
      </div>
    </div>
  );
}
