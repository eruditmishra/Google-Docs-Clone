import React from "react";
import docLogo from "../Assets/docs-icon.png";
import userIcon from "../Assets/user-icon.png";
import { BsChatRightText } from "react-icons/bs";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineLock } from "react-icons/md";

const Navbar = () => {
  return (
    // Component wrapper
    <>
      {/* Navbar Wrapper */}
      <div className=" flex items-center justify-between px-4 py-2">
        {/* left part of the navbar */}
        <div className=" flex gap-2 items-center justify-center">
          {/* google docs logo */}
          <div className="w-[2.35rem] h-[2.35rem]">
            <img src={docLogo} alt="" />
          </div>
          {/* Menu and document name container*/}
          <div className="flex flex-col justify-start gap-[0.4rem]">
            {/* Document Name */}
            <div
              contentEditable="true"
              className=" text-[1.125rem] leading-[1.375rem] text-[#444746]"
            >
              Untitled document
            </div>
            {/* Menu Container */}
            <div className="flex items-center justify-center gap-4 text-[0.875rem] leading-[0.73125rem] tracking-[0.0125rem] text-[#202124]">
              <div>File</div>
              <div>Edit</div>
              <div>View</div>
              <div>Insert</div>
              <div>Format</div>
              <div>Tools</div>
              <div>Extension</div>
              <div>Help</div>
            </div>
          </div>
        </div>
        {/* right part of the navbar */}
        <div className="flex gap-6 items-center justify-center">
          {/* Message icon */}
          <div className="text-[1.3rem] font-bold">
            <BsChatRightText />
          </div>
          {/* Meet Icon */}
          <div className="flex  gap-2 items-center justify-center">
            <div className="text-[1.6rem]">
              <HiOutlineVideoCamera />
            </div>
            <div className="text-[0.8rem]">
              <IoIosArrowDown />
            </div>
          </div>
          {/* Share buttton */}
          <div className="flex text-[0.9rem] leading-[1.375rem] tracking-[0.01875rem] items-center justify-center gap-2 bg-[#c2e7ff] px-4 py-2 rounded-full">
            <MdOutlineLock /> <p>Share</p>
          </div>
          {/* User dp/icon */}
          <div className="">
            <img src={userIcon} alt="" className="rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
