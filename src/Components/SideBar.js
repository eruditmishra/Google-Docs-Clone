import React from "react";
import calendarIcon from "../Assets/calendar-icon.png";
import keepIcon from "../Assets/keep-icon.png";
import contactsIcon from "../Assets/contacts-icon.png";
import mapsIcon from "../Assets/maps-icon.png";
import tasksIcon from "../Assets/tasks-icon.png";

import { AiOutlinePlus } from "react-icons/ai";

const SideBar = () => {
  return (
    <>
      {/* Sidebar Wrapper */}
      <div className="flex flex-col items-center px-4 h-full">
        {/* Icons Container */}
        <div className="flex flex-col gap-8 items-center border-[rgb(219, 220, 222)] border-b-2 pb-8">
          <div className="w-6">
            {/* Calendar Icon */}
            <img src={calendarIcon} alt="" />
          </div>
          <div className="w-6">
            {/* keep Icon */}
            <img src={keepIcon} alt="" />
          </div>
          <div className="w-6">
            {/* tasks Icon */}
            <img src={tasksIcon} alt="" />
          </div>
          <div className="w-6">
            {/* contacts Icon */}
            <img src={contactsIcon} alt="" />
          </div>
          <div className="w-6">
            {/* Maps Icon */}
            <img src={mapsIcon} alt="" />
          </div>
        </div>
        {/* Bottom Container - contains addons */}
        <div className="py-8 text-[1.25rem]">
          {/* Get Addons icon */}
          <div>
            <AiOutlinePlus />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
