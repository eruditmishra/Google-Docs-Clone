import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillCaretDown,
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineUnderline,
} from "react-icons/ai";
import { BiUndo, BiCommentAdd, BiImageAlt } from "react-icons/bi";
import { GrRedo } from "react-icons/gr";
import { AiOutlinePrinter } from "react-icons/ai";
import {
  MdSpellcheck,
  MdFormatAlignLeft,
  MdOutlineFormatLineSpacing,
  MdChecklist,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatIndentDecrease,
  MdFormatIndentIncrease,
} from "react-icons/md";
import { GiHighlighter } from "react-icons/gi";
import { FiLink2 } from "react-icons/fi";
import { RiFormatClear } from "react-icons/ri";
import { HiPencil } from "react-icons/hi";
import { RxCaretUp } from "react-icons/rx";
import { TfiPaintRoller } from "react-icons/tfi";

const Toolbar = () => {
  return (
    // component wrapper
    <>
      {/* Toolbar Wrapper */}
      <div className="flex items-center justify-between mx-4 my-2 px-4 py-2 rounded-full bg-[#EDF2FA] text-[0.875rem]">
        {/* Left Container - Contains all the tools */}
        <div className="flex items-center justify-center gap-4">
          {/* Formatting Tools Container */}
          <div className="flex items-center justify-center gap-4 ">
            {/* Undo */}
            <div className="text-[1.2rem] cursor-pointer">
              <BiUndo />
            </div>
            {/* Redo */}
            <div className="cursor-pointer">
              <GrRedo />
            </div>
            {/* Print */}
            <div className="cursor-pointer">
              <AiOutlinePrinter />
            </div>
            {/* Spell Check */}
            <div className="cursor-pointer">
              <MdSpellcheck />
            </div>
            {/* Format Painter */}
            <div className="cursor-pointer">
              <TfiPaintRoller />
            </div>
            {/* Percentage Container */}
            <div className="flex justify-center items-center gap-2 cursor-pointer">
              <p>100%</p>
              <AiFillCaretDown className="text-[0.7rem]" />
            </div>
          </div>
          {/* Styles Container */}
          <div className="flex items-center justify-center gap-4 border-[#C7C7C7] border-l-2 pl-4 cursor-pointer">
            <p>Normal text</p>
            <AiFillCaretDown className="text-[0.7rem]" />
          </div>
          {/* Font Container */}
          <div className="flex items-center gap-8 border-[#C7C7C7] border-l-2 pl-4 cursor-pointer">
            <p>Arial</p>
            <AiFillCaretDown className="text-[0.7rem]" />
          </div>
          {/* Font Size Container */}
          <div className="flex items-center justify-center gap-2 border-[#C7C7C7] border-l-2 pl-4 cursor-pointer">
            <p className="font-bold text-[0.875rem]">
              <AiOutlineMinus />
            </p>
            <div
              contentEditable="true"
              className=" border-black border-[0.02rem] px-[0.5rem] text-[0.875rem] text-center "
            >
              11
            </div>
            {/* <div className=" border-black border-[0.02rem] px-[0.5rem] text-[0.875rem] text-center ">
              <input
                type="number"
                onChange={handleFontSizeChange}
                value={fontSize}
              />
            </div> */}
            <p className="cursor-pointer">
              <AiOutlinePlus />
            </p>
          </div>
          {/* Font Styles Container */}
          <div className="flex items-center justify-center gap-2 border-[#C7C7C7] border-l-2 pl-4">
            {/* Bold */}
            <div className="cursor-pointer">
              <AiOutlineBold />
            </div>
            {/* Italic */}
            <div className="cursor-pointer">
              <AiOutlineItalic />
            </div>
            {/* Underline */}
            <div className="cursor-pointer">
              <AiOutlineUnderline />
            </div>
            {/* Text Color */}
            <div className="text-[1rem] border-b-4 border-black px-2">A</div>
            {/* Highlighter */}
            <div>
              <GiHighlighter />
            </div>
          </div>
          {/* Insert Link/pic/comment container */}
          <div className="flex items-center justify-center gap-4 border-[#C7C7C7] border-l-2 pl-4">
            {/* Link */}
            <div className="cursor-pointer">
              <FiLink2 />
            </div>
            {/* Comment */}
            <div className="cursor-pointer">
              <BiCommentAdd />
            </div>
            {/* Image */}
            <div className="cursor-pointer">
              <BiImageAlt />
            </div>
          </div>
          {/* Indent Container */}
          <div className="flex items-center justify-center gap-4 border-[#C7C7C7] border-l-2 pl-4">
            {/* Text Alignment */}
            <div className="flex gap-2 items-center justify-center cursor-pointer">
              <MdFormatAlignLeft />
              <AiFillCaretDown className="text-[0.7rem]" />
            </div>
            {/* Paragraph Spacing */}
            <div className="cursor-pointer">
              <MdOutlineFormatLineSpacing />
            </div>
            {/* Checklist */}
            <div className="flex gap-2 items-center justify-center cursor-pointer">
              <MdChecklist />
              <AiFillCaretDown className="text-[0.7rem]" />
            </div>
            {/* Bulleted List */}
            <div className="flex gap-2 items-center justify-center cursor-pointer">
              <MdFormatListBulleted />
              <AiFillCaretDown className="text-[0.7rem]" />
            </div>
            {/* Numbered List */}
            <div className="flex gap-2 items-center justify-center cursor-pointer">
              <MdFormatListNumbered />
              <AiFillCaretDown className="text-[0.7rem]" />
            </div>
            {/* Decrease Indent */}
            <div className="cursor-pointer">
              <MdFormatIndentDecrease />
            </div>
            {/* Increase Indent */}
            <div className="cursor-pointer">
              <MdFormatIndentIncrease />
            </div>
            {/* Clear Formatting */}
            <div className="cursor-pointer">
              <RiFormatClear />
            </div>
          </div>
        </div>
        {/* Right Container - Editing rights container */}
        <div className="flex  items-center justify-center gap-4 ">
          {/* Editing Mode */}
          <div className="flex  items-center justify-center gap-8">
            <div className="flex items-center justify-center gap-2">
              <HiPencil />
              <p className="text-[0.9rem]">Editing</p>
            </div>

            <AiFillCaretDown className="text-[0.7rem] " />
          </div>
          {/* Hide Menu  */}
          <div className="border-l-2 border-[#C7C7C7] pl-4">
            <RxCaretUp />
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
