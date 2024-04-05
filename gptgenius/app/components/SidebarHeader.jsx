import React from "react";
import ThemeToggle from "./ThemeToggle";
import { SiOpenaigym } from "react-icons/si";

const SidebarHeader = () => {
  return (
    <div className="flex gap-4 items-center mb-4 px-4 justify-between">
      <SiOpenaigym className="h-10 w-10 text-primary" />
      <h2 className="text-xl font-extrabold text-primary">GPTGenius</h2>
      <ThemeToggle />
    </div>
  );
};

export default SidebarHeader;
