import React, { useEffect, useState } from "react";

export default function GrowthForm() {
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    const sampleMsg = [
      { key: 1, date: "2024-06-01", msg: "열매가 맺혔습니다." },
      { key: 2, date: "2024-06-01", msg: "새싹이 났습니다." },
      { key: 3, date: "2024-06-01", msg: "꽃봉오리가 올라왔습니다." },
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
