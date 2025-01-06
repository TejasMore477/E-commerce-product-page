import React from "react";
import close from "/src/assets/images/icon-close.svg";

function SideBar({setSideBar}) {
  return (
    <div className="z-50 w-full h-full bg-black bg-opacity-65 absolute top-0 left-0">
      <div className="h-full w-[60%] text-Black bg-White px-6 py-4">
        <img onClick={() => setSideBar((prev) => !prev)} className="size-[4.5vw] mb-10" src={close} alt="close" />
        {[ "Collections", "Men", "Women", "About", "Contact"].map((ele,i)=>(
            <h4 key={i} className="text-[5.3vw] font-medium cursor-pointer hover:border-b-2 w-fit border-Orange mb-3">{ele}</h4>
        ))}
        
        
      </div>
    </div>
  );
}

export default SideBar;
