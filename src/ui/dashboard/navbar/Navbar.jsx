"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="bg-bg-color-soft p-8 flex items-center justify-between rounded-lg">
      <div className="text-text-color-soft font-bold capitalize">
        {" "}
        {pathName.split("/").pop()}
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center bg-[#2e374a] p-2 gap-2 rounded-md cursor-pointer">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none border-none bg-transparent text-text-color placeholder:text-text-color"
          />
        </div>
        <MdNotifications size={20} />
        <MdOutlineChat size={20} />
        <MdPublic size={20} />
      </div>
    </div>
  );
};

export default Navbar;
