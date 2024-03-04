// Sidebar.js
import React from "react";
import { Link } from "react-router-dom"; // You can replace this with your routing library
import {
  Home,
  Briefcase,
  Users,
  DollarSign,
  Clipboard,
  Activity,
  FileText,
  LogOut,
} from "lucide-react"; // Lucide icons

interface SidebarProps {
  loggedIn: boolean;
  username: string;
  avatar: string;
  mail: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  loggedIn,
  username,
  avatar,
  mail,
}) => {
  const sidebarOptions = [
    { label: "Dashboard", icon: Home, link: "/dashboard" },
    { label: "Jobs", icon: Briefcase, link: "/jobs" },
    { label: "Employee", icon: Users, link: "/employee" },
    { label: "Income", icon: DollarSign, link: "/income" },
  ];

  const reportsOptions = [
    { label: "Production", icon: Clipboard, link: "/production" },
    { label: "Transaction", icon: Activity, link: "/transaction" },
    { label: "Invoices", icon: FileText, link: "/invoices" },
  ];

  return (
    <div className="bg-black h-full w-64 flex flex-col">
      <div className="p-4">
        {/* Placeholder image for the company logo */}
        <img
          src="https://via.placeholder.com/150"
          alt="Company Logo"
          className="w-full mb-4"
        />
      </div>
      <nav className="flex-1">
        <div className="mb-4">
          {sidebarOptions.map((option, index) => (
            <Link
              key={index}
              to={option.link}
              className={`flex items-center py-2 px-4 text-gray-400 hover:text-gray-200 ${
                window.location.pathname === option.link
                  ? "bg-orange-500 text-gray-200"
                  : ""
              }`}
            >
              <option.icon size={20} className="mr-2" />
              {option.label}
            </Link>
          ))}
        </div>
        <div>
          <p className="text-gray-500 uppercase text-xs font-semibold mb-2 ml-4">
            Reports
          </p>
          {reportsOptions.map((option, index) => (
            <Link
              key={index}
              to={option.link}
              className={`flex items-center py-2 px-4 text-gray-400 hover:text-gray-200 ${
                window.location.pathname === option.link
                  ? "bg-orange-500 text-gray-200"
                  : ""
              }`}
            >
              <option.icon size={20} className="mr-2" />
              {option.label}
            </Link>
          ))}
        </div>
      </nav>
      <div className="p-4 flex items-center">
        <div className="mr-4">
          <img
            src={avatar}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
        <div>
          <p className="text-gray-500 text-sm">{username}</p>
          <p className="text-gray-500 text-sm">{mail}</p>
        </div>
        <button className="ml-auto text-gray-400 hover:text-gray-200">
          {loggedIn ? <LogOut size={20} /> : "Log In"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
