"use client";
import React, { useState } from "react";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.winter);

  function toggleTheme(){
    const currentTheme = theme === themes.winter ? themes.dracula : themes.winter;
    document.documentElement.setAttribute("data-theme", currentTheme);
    setTheme(currentTheme);
  }

  return (
    <button onClick={toggleTheme} className="btn btn-primary btn-sm ml-auto">
      {theme !== themes.winter ? (
        <BsSun className="h-4 w-4" />
      ) : (
        <BsMoon className="w-4 h-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
