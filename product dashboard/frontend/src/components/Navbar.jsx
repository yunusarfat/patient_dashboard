import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md border-t border-gray-200 px-2 py-1  flex justify-between items-center rounded-xl">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/TestLogo.svg" alt="Logo" className="h-8 w-32" />
      </div>

      {/* Nav Links */}
      <ul className="flex gap-6 text-gray-600 font-medium">
        <li className="flex items-center gap-1 cursor-pointer">
          <img src="/home.svg" alt="overview" className="h-5 w-5" />
          Overview
        </li>
        
        <li className="flex items-center gap-1 cursor-pointer px-2 bg-teal-300 rounded-2xl">
          <img src="/group.svg" alt="patients" className="h-5 w-5" />
          Patients
        </li>
        <li className="flex items-center gap-1 cursor-pointer">
          <img src="/Birth.svg" alt="schedule" className="h-5 w-5" />
          Schedule
        </li>
        <li className="flex items-center gap-1 cursor-pointer">
          <img src="/chat_bubble.svg" alt="message" className="h-5 w-5" />
          Message
        </li>
        <li className="flex items-center gap-1 cursor-pointer">
          <img src="/credit_card.svg" alt="transactions" className="h-5 w-5" />
          Transactions
        </li>
      </ul>

      {/* Profile */}
      <div className="flex items-center gap-2">
        <div className="text-right">
          <h4 className="font-semibold text-gray-700">Dr. Jose Simmons</h4>
          <p className="text-sm text-gray-500">General Practitioner</p>
        </div>
        <img
          src="/navphoto.png"
          alt="Doctor"
          className="h-10 w-10 rounded-full"
        />
        <img src="/settings.svg" alt="settings" className="h-5 w-5" />
        <img src="/more.svg" alt="more" className="h-5 w-5" />
      </div>
    </nav>
  );
};

export default Navbar;
