import React from "react";
import SidebarHeader from "./SidebarHeader";
import NavLinks from "./NavLinks";
import MemberProfile from "./MemberProfile";

const Sidebar = () => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-full px-4 py-12 w-80 bg-base-300">
      <SidebarHeader />
      <NavLinks />
      <MemberProfile />
    </div>
  );
};

export default Sidebar;
