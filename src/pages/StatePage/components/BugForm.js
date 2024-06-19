import React, { useEffect, useState } from "react";

// 메시지가 많을 경우에 스크롤 생성 필요
// 적절하게 오래된 메시지가 삭제되는 기능이 필요함

export default function BugForm() {
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    const sampleMsg = [
      { key: 1, date: "2024-06-01", msg: "벌이 돌아다닙니다." },
      { key: 2, date: "2024-06-01", msg: "병충해가 의심됩니다." },
      { key: 3, date: "2024-06-01", msg: "파리가 날아다닙니다." },
    ];

    setMsgs(sampleMsg);
  }, []);

  return (
    <div className="border border-black w-full h-full">
      <ul>
        {msgs.map((item) => (
          <li className="border border-black" key={item.key}>
            <span className="text-red-600 pr-5">{item.date}</span>
            <span>{item.msg}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
