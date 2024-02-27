"use client";
import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div>
      <div className="flex items-center bg-[#2e374a] p-3 gap-2 rounded-md cursor-pointer">
        <MdSearch />
        <input
          type="text"
          placeholder={placeholder}
          className="outline-none border-none bg-transparent text-text-color placeholder:text-text-color"
        />
      </div>
    </div>
  );
};

export default Search;
