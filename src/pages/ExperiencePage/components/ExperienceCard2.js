import React from 'react'
import { Link } from "react-router-dom";

//충청남도 보령시_농업농촌체험정보조회서비스

//addr = 주소
//townNm = 마을 이름
//(홈페이지 주소 없음)
//(전화번호 없음)
//prgrmNm1, prgrmNm2, prgrmNm3 = 주요 프로그램
//prgrmHr1, prgrmHr2, prgrmHr3 = 프로그램 소요시간 
//prgrmOperYmd1, prgrmOperYmd2, prgrmOperYmd3 = 프로그램 시기
//prgrmTrgt1, prgrmTrgt2, prgrmTrgt3 =  프로그램 대상

export default function ExperienceCard2({item}) {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex flex-row">
      <div className="p-2 w-full flex flex-row">
        <table className='w-5/6'>
          <tbody>
            <tr className="p-6 bg-white border border-gray-200 rounded-lg shadow">
              <td className="p-2 w-1/5 border border-gray-200">주소</td>
              <td className="p-2 w-4/5 border border-gray-200">{item.addr}</td>
            </tr>
            <tr className="p-6 bg-white border border-gray-200 rounded-lg shadow">
              <td className="p-2 w-1/5 border border-gray-200">마을명</td>
              <td className="p-2 w-4/5 border border-gray-200">{item.townNm}</td>
            </tr>
            <tr className="p-6 bg-white border border-gray-200 rounded-lg shadow">
              <td className="p-2 v border border-gray-200">주요 프로그램</td>
              <td className="p-2 w-4/5 border border-gray-200">{`${item.prgrmNm1}, ${item.prgrmNm2}, ${item.prgrmNm3}`}</td>
            </tr>
          </tbody>
        </table>
        <div className="pl-2 w-1/6 flex items-center justify-end">
            <img
            src={`image/exp2/${item.townNm}.PNG`}
            alt=""
            className="h-full float-right rounded object-fit"
            />
        </div>
      </div>
      
    </div>
  )
}
