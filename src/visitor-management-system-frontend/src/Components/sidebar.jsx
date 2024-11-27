// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faUserCog,
  faClipboardList,
  faUserPlus,
  faChartBar,
  faCheck,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ adminName = "Admin Name" }) => {
  return (
    <div className="w-64 bg-black text-white min-h-screen p-4 flex flex-col">
      <div className="flex items-center mb-8">
        <img   
          src="https://via.placeholder.com/50"
          alt="Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-bold">{adminName}</h2>
          <p className="text-sm text-gray-400">Administrator</p>
        </div>
      </div>
      <nav className="space-y-4 flex-grow">
        
        <Link to="/registered-visitors" className="hover:text-orange-500 transition duration-300 flex items-center">
          <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
          Registered Visitors
        </Link>
        <Link to="/admin/check-in" className="hover:text-orange-500 transition duration-300 flex items-center">
          <FontAwesomeIcon icon={faCheck} className="mr-2" />
          Visitor Check-In
        </Link>
        <Link to="/admin/check-out" className="hover:text-orange-500 transition duration-300 flex items-center">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          Visitor Check-Out
        </Link>
        <Link to="/admin/user-management" className="hover:text-orange-500 transition duration-300 flex items-center">
          <FontAwesomeIcon icon={faUserCog} className="mr-2" />
          Manage Users
        </Link>
      </nav>
      <div className="mt-auto flex items-center cursor-pointer">
        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
        Sign Out
      </div>
    </div>
  );
};

export default Sidebar;