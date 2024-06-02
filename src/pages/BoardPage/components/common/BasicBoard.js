import React, { useEffect } from "react";
import { useState } from "react";
import sampleData from "./sample.json";

// 기본 게시판
// 백엔드와 연동할 것을 고려해서 잘 짜야함!

export default function BasicBoard({ title }) {
  const [trs, setTrs] = useState([]);

  useEffect(() => {
    const trs = sampleData.map((item) => (
      <tr key={item.no} className="border-b-2 border-black h-10">
        <td className="w-[10%] text-center">{item.no}</td>
        <td className="w-[50%]">{item.subject}</td>
        <td className="w-[10%] text-center">{item.id}</td>
        <td className="w-[20%] text-center">{item.date}</td>
        <td className="w-[10%] text-center">{item.hit}</td>
      </tr>
    ));

    setTrs(trs);
  }, []);

  return (
    <div className="pt-3">
      <div className="p-5 text-lg font-bold">{title}</div>
      <div>
        <div className="w-full">
          <table className="w-full">
            <thead>
              <tr className="border-t-2 border-b-2 border-black w-full">
                <th className="w-[10%]">NO</th>
                <th className="w-[50%]">SUBJECT</th>
                <th className="w-[10%]">ID</th>
                <th className="w-[20%]">DATE</th>
                <th className="w-[10%]">HIT</th>
              </tr>
            </thead>
            <tbody>{trs}</tbody>
          </table>
        </div>
        <div className="flex justify-center p-4">
          <table>
            <tr>
              <td className="border border-black w-7 text-center">{"<"}</td>
              <td className="border border-black w-7 text-center">{"1"}</td>
              <td className="border border-black w-7 text-center">{"2"}</td>
              <td className="border border-black w-7 text-center">{"3"}</td>
              <td className="border border-black w-7 text-center">{">"}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
