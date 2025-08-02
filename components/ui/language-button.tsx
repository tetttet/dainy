"use client";

import React, { useState } from "react";
import { redirect } from "next/navigation";
import { GlobeIcon } from "lucide-react";

const LanguageButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageSelect = (lang: string) => {
    setIsOpen(false);
    const segments = window.location.pathname.split("/");
    segments[1] = lang;
    const newPath = segments.join("/") || "/";
    redirect(newPath);
  };

  return (
    <div className="relative inline-block mt-2 px-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full border border-gray-300 hover:border-blue-500 hover:bg-gray-100 transition"
        aria-label="Select language"
      >
        <GlobeIcon className="w-5 h-5 text-gray-700" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg border border-gray-200 z-10">
          <button
            onClick={() => handleLanguageSelect("en")}
            className="w-full px-2 py-2 flex items-center hover:bg-gray-100 transition text-sm"
          >
            🇬🇧 <span className="ml-2">EN</span>
          </button>
          <button
            onClick={() => handleLanguageSelect("ru")}
            className="w-full px-2 py-2 flex items-center hover:bg-gray-100 transition text-sm"
          >
            🇷🇺 <span className="ml-2">RU</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageButton;
