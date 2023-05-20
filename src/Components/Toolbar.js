import React from "react";
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
      <div className="flex items-center justify-between mx-4 px-4 py-2 rounded-full bg-[#EDF2FA]">
        {/* Left Container - Contains all the tools */}
        <div className="flex items-center justify-center gap-4">
          {/* Formatting Tools Container */}
          <div className="flex items-center justify-center gap-4 ">
            {/* Undo */}
            <div className="text-[1.2rem]">
              <BiUndo />
            </div>
            {/* Redo */}
            <div>
              <GrRedo />
            </div>
            {/* Print */}
            <div>
              <AiOutlinePrinter />
            </div>
            {/* Spell Check */}
            <div>
              <MdSpellcheck />
            </div>
            {/* Format Painter */}
            <div>
              <TfiPaintRoller />
            </div>
            {/* Percentage Container */}
            <div className="flex justify-center items-center gap-2">
              <p>100%</p>
              <AiFillCaretDown className="text-[0.7rem]" />
            </div>
          </div>
          {/* Styles Container */}
          <div className="flex items-center justify-center gap-4 border-[#C7C7C7] border-l-2 pl-4">
            <p>Normal text</p>
            <AiFillCaretDown className="text-[0.7rem]" />
          </div>
          {/* Font Container */}
          <div className="flex items-center gap-8 border-[#C7C7C7] border-l-2 pl-4">
            <p>Arial</p>
            <AiFillCaretDown className="text-[0.7rem]" />
          </div>
          {/* Font Size Container */}
          <div className="flex items-center justify-center gap-2 border-[#C7C7C7] border-l-2 pl-4">
            <p className="font-bold text-[0.875rem]">
              <AiOutlineMinus />
            </p>
            <div
              contentEditable="true"
              className=" border-black border-[0.02rem] px-[0.5rem] text-[0.875rem] text-center "
            >
              11
            </div>
            <p>
              <AiOutlinePlus />
            </p>
          </div>
          {/* Font Styles Container */}
          <div className="flex items-center justify-center gap-2 border-[#C7C7C7] border-l-2 pl-4">
            {/* Bold */}
            <div>
              <AiOutlineBold />
            </div>
            {/* Italic */}
            <div>
              <AiOutlineItalic />
            </div>
            {/* Underline */}
            <div>
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
            <div>
              <FiLink2 />
            </div>
            {/* Comment */}
            <div>
              <BiCommentAdd />
            </div>
            {/* Image */}
            <div>
              <BiImageAlt />
            </div>
          </div>
          {/* Indent Container */}
          <div className="flex items-center justify-center gap-4 border-[#C7C7C7] border-l-2 pl-4">
            {/* Text Alignment */}
            <div className="flex gap-2 items-center justify-center">
              <MdFormatAlignLeft />
              <AiFillCaretDown className="text-[0.7rem]" />
            </div>
            {/* Paragraph Spacing */}
            <div>
              <MdOutlineFormatLineSpacing />
            </div>
            {/* Checklist */}
            <div className="flex gap-2 items-center justify-center">
              <MdChecklist />
              <AiFillCaretDown className="text-[0.7rem]" />
            </div>
            {/* Bulleted List */}
            <div className="flex gap-2 items-center justify-center">
              <MdFormatListBulleted />
              <AiFillCaretDown className="text-[0.7rem]" />
            </div>
            {/* Numbered List */}
            <div className="flex gap-2 items-center justify-center">
              <MdFormatListNumbered />
              <AiFillCaretDown className="text-[0.7rem]" />
            </div>
            {/* Decrease Indent */}
            <div>
              <MdFormatIndentDecrease />
            </div>
            {/* Increase Indent */}
            <div>
              <MdFormatIndentIncrease />
            </div>
            {/* Clear Formatting */}
            <div>
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
