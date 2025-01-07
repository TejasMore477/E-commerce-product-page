import React, { useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Cart from "./components/Cart";
import Slider from "./components/Slider";
import Details from "./components/Details";
import Counter from "./components/Counter";

function App() {
  const [sideBar, setSideBar] = useState(false);
  const [cart, setCart] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div
      onClick={() => setCart(false)}
      className=" w-full relative min-h-screen pb-5"
    >
      <NavBar setSideBar={setSideBar} setCart={setCart} count={count} />
      {sideBar && <SideBar setSideBar={setSideBar} />}
      {cart && <Cart count={count} setCount={setCount} />}
      <div className="lg:flex items-center justify-center h-[93vh] w-full px-10">
        <Slider />
        <div>
          <Details />
          <Counter count={count} setCount={setCount} />
        </div>
      </div>
      <div className=" w-full text-center font-light text-sm">
    Challenge by <a className="text-blue-700" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="" className="text-blue-700">Tejas More</a>.
  </div>
    </div>
  );
}

export default App;
