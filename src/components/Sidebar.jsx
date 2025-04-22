import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  CheckSquare,
  Airplay,
  Users,
  Folder,
  Clipboard,
  Settings,
  MessageSquare,
  LogOut,
} from "lucide-react"; // Icons
import img from "../assets/profile.png"; // Profile image

const menuItems = [
  { icon: <Home size={20} />, text: "Dashboard", to: "/" },
  { icon: <CheckSquare size={20} />, text: "Attendance", to: "/attendance" },
  { icon: <Clipboard size={20} />, text: "My Leaves", to: "/leaves" },
  { icon: <Users size={20} />, text: "My Team", to: "/team" },
  { icon: <Airplay size={20} />, text: "My Project", to: "/project" },
  { icon: <Folder size={20} />, text: "My Tasks", to: "/tasks" },
  { icon: <Settings size={20} />, text: "Settings", to: "/settings" },
  { icon: <MessageSquare size={20} />, text: "Chat", to: "/chat" },
  { icon: <LogOut size={20} />, text: "LogOut", to: "/logout" },
];

const SideNavBar = ({ isExpanded, setIsExpanded }) => {
  return (
    <div
      className={`h-screen bg-white text-black flex flex-col transition-all duration-300 
        ${isExpanded ? "w-64" : "w-16"} group hover:w-64 
        overflow-hidden`}
      style={{ height: "100vh" }} // Ensure sidebar height fills the screen
    >
      <div className="flex-1 overflow-y-auto">
        {" "}
        {/* Add scroll functionality here */}
        {/* Profile */}
        <div className="flex flex-col items-center mt-4">
          <figure className="flex flex-col items-center">
            <img src={img} className="w-16 h-16 rounded-full" alt="Employee" />
            <figcaption className="mt-2 text-sm font-semibold hidden group-hover:block">
              Employee
            </figcaption>
          </figure>
        </div>
        {/* Menu Items */}
        <nav className="mt-6 space-y-2 px-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="flex items-center p-3 rounded hover:bg-gray-300 transition-all text-black no-underline"
              style={{ textDecoration: "none" }}
            >
              <span>{item.icon}</span>
              <span
                className={`ml-4 text-sm ${
                  isExpanded ? "inline" : "hidden group-hover:inline"
                }`}
              >
                {item.text}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SideNavBar;
