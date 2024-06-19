import React from "react";
import { Routes, Route } from "react-router-dom";
import AlarmPage from "../pages/AlarmPage/AlarmPage";
import BoardPage from "../pages/BoardPage/BoardPage";
import ExperiencePage from "../pages/ExperiencePage/ExperiencePage";
import MainPage from "../pages/MainPage/MainPage";
import MyPage from "../pages/MyPage/MyPage";
import SelectPage from "../pages/SelectPage/SelectPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import StatePage from "../pages/StatePage/StatePage";

import RecommendPage from "../pages/MainPage/components/RecoForecastForm/pages/RecommendPage";

// 일단 테스트용으로 임시로 넣은 거: 게시판 세부화면 (상세글보기, 글수정화면)
import EditContent from "../pages/BoardPage/components/common/EditContent";
import SeeDetail from "../pages/BoardPage/components/common/SeeDetail";
import ProfilePage from "../pages/MyPage/temp/ProfilePage";

import Login from "../component/Login";
import Join from "../component/Join";

export default function Main() {
  return (
    <main className="grow flex flex-col items-center overflow-y-auto m-1">
      <Routes>
        <Route path="/alarm" element={<AlarmPage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/recommend" element={<RecommendPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/state" element={<StatePage />} />

        {/** 일단 테스트용으로 임시로 넣은 거 */}
        <Route path="/boarddetail" element={<SeeDetail />} />

        {/** 일단 테스트용으로 임시로 넣은 거 */}
        <Route path="/boardedit" element={<EditContent />} />

        {/** 일단 테스트용으로 임시로 넣은 거 */}
        <Route path="/profile" element={<ProfilePage />} />

        {/** 인규님 파트 프엔 통합 */}
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </main>
  );
}
