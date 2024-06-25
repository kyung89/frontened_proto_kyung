import React, { useEffect, useState } from "react";
import ExperienceCard from "./components/ExperienceCard";
import ExperienceList from "./components/ExperienceList";
import axios from "axios";
import { useFetcher } from "react-router-dom";

// 설계안 필요

export default function ExperiencePage() {

  const [items, setItems] = useState(null);
  const [select, setSelect] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChangeSelect = (e) => {
    setSelect(e.target.value);
  }

  useEffect(() => {
    //console.log("select", select);

    if(select === "1") {
      //경상북도 경주시_농촌교육장 체험마을 정보 
      console.log("경상북도 경주시_농촌교육장 체험마을 정보 ");
      setLoading(true);
      getData1();
    } else if(select === "2") {
      //충청남도 보령시_농업농촌체험정보조회서비스
      console.log("충청남도 보령시_농업농촌체험정보조회서비스");
      setLoading(true);
      getData2();
    } else {
      setItems([]);
    }
  }, [select]);

  //경상북도 경주시_농촌교육장 체험마을 정보 API 데이터 가져오기 
  const getData1 = () => {
    let url = "https://apis.data.go.kr/5050000/ruralEducationCenterVillageService/getRuralEducationCenterVillage";
    url += `?serviceKey=${process.env.REACT_APP_PUBLIC_DATA}`;
    url += `&pageNo=1`;
    url += `&numOfRows=10`;

    console.log(url);

    axios.get(url)
    .then(function (response) {
      // 성공 핸들링
      console.log("체험학습 데이터 불러오기: 경상");
      console.log(response.data.response.body.items.item);

      setItems(response.data.response.body.items.item);
    })
    .catch(function (error) {
      // 에러 핸들링
      console.log(error);
    })
    .finally(function () {
      // 항상 실행되는 영역
      setLoading(false);
    });;
  }

  //충청남도 보령시_농업농촌체험정보조회서비스 API 데이터 가져오기
  const getData2 = () => {
    let url = "https://apis.data.go.kr/4510000/GetBrAgrExpService/getBrAgrExpInfo";
    url += `?serviceKey=${process.env.REACT_APP_PUBLIC_DATA}`;
    url += `&pageIndex=5`;
    url += `&firstIndex=1`;
    url += `&dataType=JSON`;

    //console.log(url);

    axios.get(url)
    .then(function (response) {
      // 성공 핸들링
      console.log("체험학습 데이터 불러오기: 충청");
      console.log(response.data.response.body.items.item);

      setItems(response.data.response.body.items.item);
    })
    .catch(function (error) {
      // 에러 핸들링
      console.log(error);
    })
    .finally(function () {
      // 항상 실행되는 영역
      setLoading(false);
    });;
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="p-10">
        
      <div>
        <table className="w-[32rem] p-6 bg-white border border-gray-200 rounded-lg shadow">
          <tbody>
            <tr className="border border-gray-200">
              <td className="w-32 border border-gray-200">지역</td>
              <td>
                <select className="w-96" onChange={handleChangeSelect} value={select}>
                  <option value={0} className="text-center">------</option>
                  <option value={1}>경상북도 경주시_농촌교육장 체험마을 정보</option>
                  <option value={2}>충청남도 보령시_농업농촌체험정보조회서비스</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      </div>
      <div className="p-10">
        {(items && items.length > 0) && <ExperienceList items={items} select={select} loading={loading} />}
      </div>
    </div>
  );
}
