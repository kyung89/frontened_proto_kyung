import React from "react";
import { Routes, Route } from "react-router-dom";
import AlarmPage from "../pages/AlarmPage/AlarmPage";
import BoardPage from "../pages/BoardPage/BoardPage";
import ExperiencePage from "../pages/ExperiencePage/ExperiencePage";
import MainPage from "../pages/MainPage/MainPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import SelectPage from "../pages/SelectPage/SelectPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import StatePage from "../pages/StatePage/StatePage";

import RecommendPage from "../pages/MainPage/components/RecoForecastForm/pages/RecommendPage";

export default function Main() {
  return (
    <main className="grow flex flex-col items-center overflow-y-auto m-1">
      <Routes>
        <Route path="/alarm" element={<AlarmPage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/recommend" element={<RecommendPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/state" element={<StatePage />} />
      </Routes>
    </main>
  );
}
