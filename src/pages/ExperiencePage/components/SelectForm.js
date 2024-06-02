import React from "react";

export default function SelectForm() {
  return (
    <div>
      <table>
        <tr>
          <td className="w-40 border border-black">지역</td>
          <td>
            <select className="w-40 border border-black">
              <option>지역1</option>
              <option>지역2</option>
            </select>
          </td>
        </tr>
        <tr>
          <td className="w-40 border border-black">수확시기</td>
          <td>
            <select className="w-40 border border-black">
              <option>수확시기1</option>
              <option>수확시기2</option>
            </select>
          </td>
        </tr>
        <tr>
          <td className="w-40 border border-black">품종</td>
          <td>
            <select className="w-40 border border-black">
              <option>품종1</option>
              <option>품종2</option>
            </select>
          </td>
        </tr>
      </table>
    </div>
  );
}
