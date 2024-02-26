import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";
const Card = () => {
  return (
    <div className="flex bg-bg-color-soft text-text-color gap-5 p-5 rounded-xl hover:bg-hover-color cursor-pointer w-full">
      <div>
        <MdSupervisedUserCircle size={24} />
      </div>
      <div className="flex flex-col gap-5 ">
        <p className="text-sm ">Total Users</p>
        <span className="font-medium text-2xl">10,928</span>
        <p className="text-sm font-light text-text-color-soft">
          <span className="text-green-500">12%</span> more than previous week
        </p>
      </div>
    </div>
  );
};

export default Card;
