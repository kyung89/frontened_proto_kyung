import React from 'react'
import { Link } from "react-router-dom";

//경상북도 경주시_농촌교육장 체험마을 정보

//ADRES = 주소
//EXPRN_VILAGE_NM = 마을 이름
//HMPG_NM =  홈페이지 주소
//INQRY_TLPHON = 전화번호
//MAIN_PROGRM = 주요 프로그램

export default function ExperienceCard1({item}) {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex flex-row">
      <div className="p-2 w-full flex flex-row">
        <table className='w-5/6'>
          <tbody>
            <tr className="p-6 bg-white border border-gray-200 rounded-lg shadow">
              <td className="p-2 w-1/5 border border-gray-200">주소</td>
              <td className="p-2 w-4/5 border border-gray-200">{item.ADRES}</td>
            </tr>
            <tr className="p-6 bg-white border border-gray-200 rounded-lg shadow">
              <td className="p-2 w-1/5 border border-gray-200">마을명</td>
              <td className="p-2 w-4/5 border border-gray-200">{item.EXPRN_VILAGE_NM}</td>
            </tr>
            <tr className="p-6 bg-white border border-gray-200 rounded-lg shadow">
              <td className="p-2 w-1/5 border border-gray-200">홈페이지 주소</td>
              <td className="p-2 w-4/5 border border-gray-200 hover:underline hover:text-green-900 hover:font-bold"><Link to={item.HMPG_NM}>{item.HMPG_NM}</Link></td>
            </tr>
            <tr className="p-6 bg-white border border-gray-200 rounded-lg shadow">
              <td className="p-2 w-1/5 border border-gray-200">전화번호</td>
              <td className="p-2 w-4/5 border border-gray-200">{item.INQRY_TLPHON}</td>
            </tr>
            <tr className="p-6 bg-white border border-gray-200 rounded-lg shadow">
              <td className="p-2 v border border-gray-200">주요 프로그램</td>
              <td className="p-2 w-4/5 border border-gray-200">{item.MAIN_PROGRM}</td>
            </tr>
          </tbody>
        </table>
        <div className="pl-2 w-1/6 flex items-center justify-end">
            <img
            src={`image/exp1/${item.EXPRN_VILAGE_NM}.PNG`}
            alt=""
            className="h-full float-right rounded object-none"
            />
        </div>
      </div>
      
    </div>
  )
}
