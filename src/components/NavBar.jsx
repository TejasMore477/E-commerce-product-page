import React from "react";
import cartIcon from "/src/assets/images/icon-cart.svg";
import menuIcon from "/src/assets/images/icon-menu.svg";
import logo from "/src/assets/images/logo.svg";
import avatar from "/src/assets/images/image-avatar.png";

function NavBar({ setSideBar, setCart, count }) {
  function text(){
    console.log("is clicked");
  }
  return (
    <div className="relative w-full px-6 py-2 flex items-center justify-between">
      <div className="flex items-center justify-start gap-3">
        <img
          onClick={(e) => {
            e.stopPropagation();
            setSideBar((prev) => !prev);
          }}
          className="h-[4.5vw] cursor-pointer"
          src={menuIcon}
          alt="menu"
        />
        <img className="h-[6vw] cursor-pointer" src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-start gap-3">
        <div
          onClick={(e) => {
            e.stopPropagation();
            setCart((prev) => !prev)
          }}
          className="relative"
        >
          <img
            className="size-[6vw] cursor-pointer"
            src={cartIcon}
            alt="cart"
          />
          <h2 className="absolute -top-1 right-0 bg-Orange text-[2.5vw] font-semibold px-1 rounded-full">
            {count}
          </h2>
        </div>
        <img className="size-[10vw] cursor-pointer" src={avatar} alt="avatar" />
      </div>
    </div>
  );
}

export default NavBar;
