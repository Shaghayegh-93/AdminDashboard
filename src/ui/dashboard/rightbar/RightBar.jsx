import React from "react";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
import Image from "next/image";

const RightBar = () => {
  return (
    <div className="fixed pr-5">
      <div className="bg-gradient-to-t from-[#182237] to-[#253352] gap-2  py-5 px-6 mb-5 rounded-xl flex flex-col text-left relative ">
        <Image
          className="absolute right-0 bottom-0 opacity-20"
          src="/astronaut.png"
          width={150}
          height={150}
        />

        <span className="font-medium text-sm text-text-color-soft">
          🔥 Available Now
        </span>
        <h3>How to use the new version of the admin dashboard?</h3>
        <span className="text-text-color-soft text-sm">
          Takes 4 mintues to learn
        </span>
        <p className="text-text-color-soft text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
          voluptatibus beatae consectetur blanditiis, iusto, disti
        </p>
        <button className="border-none p-3 text-left flex items-center justify-center gap-1 bg-[#5d57c9] w-max rounded-2xl">
          <MdPlayCircleFilled /> Watch
        </button>
      </div>

      <div className="bg-gradient-to-t from-[#182237] to-[#253352] gap-2 py-5 px-6 mb-5 rounded-xl flex flex-col text-left  ">
        <span className="font-medium text-sm text-text-color-soft">
          🚀 Coming Soon
        </span>
        <h3>
          {" "}
          New server actions are available, partial pre-rendering is coming up!
        </h3>
        <span className="text-text-color-soft text-sm">
          Boost your productivity
        </span>
        <p className="text-text-color-soft text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
          voluptatibus beatae consectetur blanditiis, iusto, disti
        </p>
        <button className="p-3 border-none text-center justify-center flex items-center gap-1 bg-[#5d57c9] w-max rounded-2xl">
          <MdReadMore /> Learn
        </button>
      </div>
    </div>
  );
};

export default RightBar;
