import React, { useState } from "react";
import plus from "/src/assets/images/icon-plus.svg";
import minus from "/src/assets/images/icon-minus.svg";
import cart from "/src/assets/images/icon-cart.svg";

function Counter({ count, setCount }) {
  const [n, setN] = useState(0);

  function handelInc() {
    return setN((prev) => prev + 1);
  }

  function handelDec() {
    return n > 0 && setN((prev) => prev - 1);
  }
  return (
    <div className="px-5 md:px-10 md:mt-5 sm:flex flex-col lg:flex-row items-center md:items-start lg:items-center lg:gap-5 md:pb-10">
      <div className="lg:w-[30%] md:w-[40%] sm:w-[50%] w-full flex items-center justify-between">
        <img onClick={handelDec} className="lg:w-[1vw] md:w-[1.9vw] sm:w-[2vw] w-[3vw] cursor-pointer" src={minus} alt="" />
        <h3 className="lg:text-[1.5vw] md:text-[1.8vw] sm:text-[3vw] text-[5vw] font-bold">{n}</h3>
        <img onClick={handelInc} className=" lg:w-[1vw] md:w-[1.9vw] sm:w-[2vw] w-[3vw] cursor-pointer" src={plus} alt="" />
      </div>
      <button
        type="button"
        onClick={() => setCount(n)}
        className="flex items-center justify-center gap-2 md:w-[40%] sm:w-[30%] w-full sm:mt-3 mt-6 cursor-pointer font-semibold bg-Orange rounded-lg py-3"
      >
        <img src={cart} className="lg:w-[1.3vw]" />
        <span>Add to cart</span>
      </button>
    </div>
  );
}

export default Counter;
