import React, { useEffect, useState } from "react";
import SelectForm from "./components/SelectForm";
import SelectCard from "./components/SelectCard";
import axios from "axios";

// 설계안 필요

export default function SelectPage() {

  const [crops, setCrops] = useState([]);
  const [farms, setFarms] = useState([]);
  const [select, setSelect] = useState("");

  useEffect(() => {

    // 작물정보 불러오기
    axios
      .get(`http://localhost:8080/program/crops`)
      .then(function (response) {
        // 성공 핸들링
        setCrops(response.data);
        setSelect(response.data[0]);
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

    if(!select) return;
    getFarmInfo(select);
  },  [select]);

  const handleChangeSelect = (e) => {
    setSelect(e.target.value);
  }

  // 작물 선택에 따른 농장 정보 불러오기
  const getFarmInfo = (crop) => {
    axios
    .get(`http://localhost:8080/program/farms`, {params: {crop: select}})
    .then(function (response) {
      // 성공 핸들링
      setFarms(response.data);
    })
    .catch(function (error) {
      // 에러 핸들링
      console.log(error);
    })
    .finally(function () {
      // 항상 실행되는 영역
    });
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="p-10">
      <div>
      <table className="p-6 bg-white border border-gray-200 rounded-lg shadow">
        <tbody>
          <tr className="border border-gray-200">
            <td className="w-40 border border-gray-200">농작물</td>
            <td>
              <select className="w-40" onChange={handleChangeSelect} value={select}>
                {crops.map((crop) => (<option key={crop} value={crop}>{crop}</option>))}
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
      </div>
      <div className="p-10 grid grid-cols-2 gap-2">
        {farms.map((farm) => (<SelectCard farm={farm} />))}
      </div>
    </div>
  );
}

// {id: 3, name: '베베농가', address: '서울', crops: Array(4)}
// 순서대로 오는지 체크 필요