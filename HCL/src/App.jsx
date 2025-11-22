import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import WellnessGoals from "./pages/WellnessGoals";
// import Messages from "./pages/Messages";

function App() {
 return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;
