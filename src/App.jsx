import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";
import AttendancePage from "./components/AttendancePage";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [isExpanded, setIsExpanded] = useState(false); // State to control sidebar

  const toggleFullscreen = () => {
    // Logic for fullscreen toggle if needed
    console.log("Fullscreen toggled");
  };

  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Top Navbar */}
        <TopNavbar
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          toggleFullscreen={toggleFullscreen}
        />

        {/* Sidebar below Navbar */}
        <div className="flex">
          <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

          {/* Main Content Area */}
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/attendance" element={<AttendancePage />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
