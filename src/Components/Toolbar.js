import React from "react";
import BiUndo from "react-icons/bi";
import GrRedo from "react-icons/gr";
import AiOutlinePrinter from "react-icons/ai";
import MdSpellcheck from "react-icons/md";
import TfiPaintRoller from "react-icons/tfi";
import AiFillCaretDown from "react-icons/ai";
import AiOutlineBold from "react-icons/ai";
import AiOutlineItalic from "react-icons/ai";
import AiOutlineUnderline from "react-icons/ai";
import GiHighlighter from "react-icons/gi";
import FiLink2 from "react-icons/fi";
import BiCommentAdd from "react-icons/bi";
import BiImageAlt from "react-icons/bi";
import MdFormatAlignLeft from "react-icons/md";
// import MdFormatAlignRight from "react-icons/md";
// import GrTextAlignCenter from "react-icons/md";
// import MdFormatAlignJustify from "react-icons/md";
import MdOutlineFormatLineSpacing from "react-icons/md";
import MdChecklist from "react-icons/md";
import MdFormatListBulleted from "react-icons/md";
import MdFormatListNumbered from "react-icons/md";
import MdFormatIndentDecrease from "react-icons/md";
import MdFormatIndentIncrease from "react-icons/md";
import RiFormatClear from "react-icons/md";
import HiPencil from "react-icons/hi";
import RxCaretUp from "react-icons/rx";

const Toolbar = () => {
  return (
    // component wrapper
    <>
      {/* Toolbar Wrapper */}
      <div>
        {/* Left Container - Contains all the tools */}
        <div>
          {/* Formatting Tools Container */}
          <div>
            {/* Undo */}
            <div>
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
            <div>
              <p>100%</p>
              <AiFillCaretDown />
            </div>
          </div>
          {/* Styles Container */}
          <div>
            <p>Normal Text</p>
            <AiFillCaretDown />
          </div>
          {/* Font Container */}
          <div>
            <p>Arial</p>
            <AiFillCaretDown />
          </div>
          {/* Font Size Container */}
          <div>
            <p>-</p>
            <div contentEditable="true">11</div>
            <p>+</p>
          </div>
          {/* Font Styles Container */}
          <div>
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
            <div>A</div>
            {/* Highlighter */}
            <div>
              <GiHighlighter />
            </div>
          </div>
          {/* Insert Link/pic/comment container */}
          <div>
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
          <div>
            {/* Text Alignment */}
            <div>
              <MdFormatAlignLeft />
            </div>
            {/* Paragraph Spacing */}
            <div>
              <MdOutlineFormatLineSpacing />
            </div>
            {/* Checklist */}
            <div>
              <MdChecklist />
            </div>
            {/* Bulleted List */}
            <div>
              <MdFormatListBulleted />
            </div>
            {/* Numbered List */}
            <div>
              <MdFormatListNumbered />
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
        <div>
          {/* Editing Mode */}
          <div>
            <HiPencil />
            <p>Editing</p>
            <AiFillCaretDown />
          </div>
          {/* Hide Menu  */}
          <div>
            <RxCaretUp />
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
