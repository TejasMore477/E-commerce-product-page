import React from "react";
import cartIcon from "/src/assets/images/icon-cart.svg";
import menuIcon from "/src/assets/images/icon-menu.svg";
import logo from "/src/assets/images/logo.svg";
import avatar from "/src/assets/images/image-avatar.png";

function NavBar({ setSideBar, setCart, count }) {
  return (
    <div className="relative w-full sm:px-10 px-6 py-2 flex items-center justify-between">
      <div className="flex items-center justify-start gap-3">
        <img
          onClick={(e) => {
            e.stopPropagation();
            setSideBar((prev) => !prev);
          }}
          className="lg:hidden md:h-[1.7vw] sm:h-[2vw] h-[3.2vw] cursor-pointer"
          src={menuIcon}
          alt="menu"
        />
        <img
          className="lg:h-[1.4vw] md:h-[2vw] sm:h-[2.5vw] h-[3.7vw] cursor-pointer"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="lg:flex items-center justify-start gap-5 hidden">
      {["Collections", "Men", "Women", "About", "Contact"].map((ele, i) => (
          <h4
            key={i}
            className=" text-[1.2vw] text-Grayish_blue cursor-pointer hover:border-b-2 w-fit border-Orange"
          >
            {ele}
          </h4>
        ))}
      </div>
      <div className="flex items-center justify-start gap-3">
        <div
          onClick={(e) => {
            e.stopPropagation();
            setCart((prev) => !prev);
          }}
          className="relative"
        >
          <img
            className=" lg:size-[1.8vw] md:size-[2.5vw] sm:size-[3vw] size-[4vw] cursor-pointer"
            src={cartIcon}
            alt="cart"
          />
          <h2 className="absolute -top-1 right-0 bg-Orange lg:text-[0.7vw] md:text-[1vw]  sm:text-[1.3vw] text-[2vw] font-semibold px-1 rounded-full">
            {count}
          </h2>
        </div>
        <img
          className=" md:size-[3vw] sm:size-[4.5vw] size-[6.5vw] cursor-pointer"
          src={avatar}
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default NavBar;
