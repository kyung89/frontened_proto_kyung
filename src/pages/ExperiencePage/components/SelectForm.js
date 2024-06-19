import React from "react";

export default function SelectForm() {
  return (
    <div>
      <table className="p-6 bg-white border border-gray-200 rounded-lg shadow">
        <tbody>
          <tr className="border border-gray-200">
            <td className="w-40 border border-gray-200">지역</td>
            <td>
              <select className="w-40">
                <option>지역1</option>
                <option>지역2</option>
              </select>
            </td>
          </tr>
          <tr className="border border-gray-200">
            <td className="w-40 border border-gray-200">수확시기</td>
            <td>
              <select className="w-40">
                <option>수확시기1</option>
                <option>수확시기2</option>
              </select>
            </td>
          </tr>
          <tr className="border border-gray-200">
            <td className="w-40 border border-gray-200">품종</td>
            <td>
              <select className="w-40">
                <option>품종1</option>
                <option>품종2</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
