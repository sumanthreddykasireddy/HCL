import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import WellnessGoals from "../pages/WellnessGoals";
import Messages from "../pages/Messages";

import Header from "./Header";
import SideNav from "./SideNav";

export default function MainLayout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Header onMenuClick={handleDrawerToggle} />
      <SideNav mobileOpen={mobileOpen} onClose={handleDrawerToggle} />

      <div style={{ marginLeft: 240, padding: 24, marginTop: 80 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wellness" element={<WellnessGoals />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </div>
    </>
  );
}
