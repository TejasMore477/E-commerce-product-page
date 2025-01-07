import React from "react";
import close from "/src/assets/images/icon-close.svg";

function SideBar({ setSideBar }) {
  return (
    <div className=" lg:hidden z-50 w-full h-full bg-black bg-opacity-65 absolute top-0 left-0">
      <div className="h-full sm:w-[30%] w-[60%] text-Black bg-White px-6 sm:px-10 py-4">
        <img
          onClick={() => setSideBar((prev) => !prev)}
          className="sm:size-[2vw] size-[4vw] mb-10"
          src={close}
          alt="close"
        />
        {["Collections", "Men", "Women", "About", "Contact"].map((ele, i) => (
          <h4
            key={i}
            className="sm:text-[2.5vw] text-[5vw] font-medium cursor-pointer hover:border-b-2 w-fit border-Orange mb-3"
          >
            {ele}
          </h4>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
