import React, { useEffect, useRef, useState } from "react";

const Editor = ({ props }) => {
  const [documentContent, setDocumentContent] = useState("");
  const textareaRef = useRef(null);

  const handleInputChange = (e) => {
    e.preventDefault();
    setDocumentContent(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (textareaRef.current && !textareaRef.current.contains(event.target)) {
        textareaRef.current.focus();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`h-[70rem] flex justify-center items-center my-4
      }`}
    >
      <div className="w-[55rem] h-[70rem] bg-white  border-[#d2d4d9] border-2">
        <textarea
          value={documentContent}
          ref={textareaRef}
          autoFocus
          onChange={handleInputChange}
          className="w-full h-full px-32 py-24 text-xl resize-none outline-none"
        />
      </div>
    </div>
  );
};

export default Editor;
