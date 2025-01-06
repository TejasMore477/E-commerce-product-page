import React from "react";
import cartIcon from "/src/assets/images/icon-cart.svg";
import menuIcon from "/src/assets/images/icon-menu.svg";
import logo from "/src/assets/images/logo.svg";
import avatar from "/src/assets/images/image-avatar.png";

function NavBar({ setSideBar }) {
  return (
    <div className="w-full px-6 py-3 flex items-center justify-between">
      <div className="flex items-center justify-start gap-3">
        <img
          onClick={() => setSideBar((prev) => !prev)}
          className="h-[4.5vw] cursor-pointer"
          src={menuIcon}
          alt="menu"
        />
        <img className="h-[6vw] cursor-pointer bg-red-9000" src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-start gap-3">
        <img className="size-[6vw] cursor-pointer" src={cartIcon} alt="cart" />
        <img className="size-[10vw] cursor-pointer" src={avatar} alt="avatar" />
      </div>
    </div>
  );
}

export default NavBar;
