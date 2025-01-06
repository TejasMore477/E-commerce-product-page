import React from "react";
import thumbnail from "/src/assets/images/image-product-1-thumbnail.jpg";
import trash from "/src/assets/images/icon-delete.svg";

function Cart({ count, setCount }) {
  const total = count * 125.0;
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute z-40 top-14 left-0 right-0 px-5 w-full"
    >
      <div className="bg-white w-full h-full py-3 px-4 rounded-lg shadow-2xl">
        <h2 className="text-[5vw] font-semibold">Cart</h2>
        {count === 0 ? (
          <div className="pt-4 w-full my-5 border-t-[1.5px] h-32">
            <h3 className="text-center text-[3.5vw] pt-6 font-semibold text-Dark_grayish_blue">
              Your Cart id Empty
            </h3>
          </div>
        ) : (
          <div>
            <div className="pt-4 w-full my-5 border-t-[1.5px] flex items-center justify-between gap-3 flex-shrink-0 flex-nowrap">
              <div className="flex items-center justify-start gap-3">
                <img
                  className="size-[13vw] rounded-lg"
                  src={thumbnail}
                  alt="product"
                />
                <div>
                  <p className="text-[3.5vw] font-semibold text-Grayish_blue">
                    Fall Limited Edition Sneakers{" "}
                  </p>
                  <p className="text-[3.5vw] font-semibold text-Grayish_blue">
                    $125.00 x <span>{count} </span>
                    <span className="text-[4vw] pl-1 text-black font-bold">
                      ${total.toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
              <img
                onClick={(e) => {
                  e.stopPropagation();
                  setCount(0);
                }}
                className="size-[4vw]"
                src={trash}
                alt="delete"
              />
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCount(0);
              }}
              className="bg-Orange w-full py-2 rounded-lg cursor-pointer font-semibold"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
