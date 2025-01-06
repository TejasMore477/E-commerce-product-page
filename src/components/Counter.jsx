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
    <div className="px-5">
      <div className=" w-full flex items-center justify-between">
        <img onClick={handelDec} src={minus} alt="" />
        <h3 className="text-[5.3vw] font-bold">{n}</h3>
        <img onClick={handelInc} src={plus} alt="" />
      </div>
      <button
        type="button"
        onClick={() => setCount(n)}
        className="flex items-center justify-center gap-2 w-full mt-6 cursor-pointer font-semibold bg-Orange rounded-lg py-3"
      >
        <img src={cart} className="" />
        <span>Add to cart</span>
      </button>
    </div>
  );
}

export default Counter;
