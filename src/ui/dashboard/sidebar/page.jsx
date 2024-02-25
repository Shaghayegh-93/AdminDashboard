import React from "react";
import Image from "next/image";

const Sidebadr = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="w-1 h-1 relative rounded-full">
          <Image
            // fill
            // className=" rounded-full"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
        <div>text</div>
      </div>
      <div></div>
    </div>
  );
};

export default Sidebadr;
