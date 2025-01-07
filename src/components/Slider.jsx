import React, { useState } from "react";
import image1 from "/src/assets/images/image-product-1.jpg";
import image2 from "/src/assets/images/image-product-2.jpg";
import image3 from "/src/assets/images/image-product-3.jpg";
import image4 from "/src/assets/images/image-product-4.jpg";
import prev from "/src/assets/images/icon-previous.svg";
import next from "/src/assets/images/icon-next.svg";

const images = [image1, image2, image3, image4];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [img, setImg ]  = useState(0);

  // Handler for next button
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    console.log("next:", currentIndex);
  };

  // Handler for previous button
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    console.log("prev:", currentIndex);
  };

  // Handler for changing images
  const handelClick = (index) => {
  setImg(index)
  }

  return (
    <div className=" lg:h-full lg:w-[50%] md:h-[70vh] sm:h-[50vh] h-[32vh] w-full relative flex lg:flex-col items-center lg:justify-center justify-start flex-shrink-0 flex-nowrap overflow-hidden">
      <div className="lg:hidden">
        {/* Image Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover object-top flex-shrink-0"
            />
          ))}
        </div>

        <div className="absolute w-full top-1/2 left-0 right-0 -translate-y-1/2 flex flex-row-reverse items-center justify-between px-[7%]">
          <button
            onClick={handlePrev}
            className={`px-[12px] grid place-content-center bg-white py-[10px] rounded-full ${""}`}
          >
            <img className="md:h-4 h-3" src={next} alt="next" />
          </button>
          <button
            onClick={handleNext}
            className={`px-[12px] grid place-content-center bg-white py-[10px] rounded-full ${""}`}
          >
            <img className="md:h-4 h-3" src={prev} alt="prev" />
          </button>
        </div>
      </div>

      <div className="lg:flex flex-col items-center justify-center gap-10 hidden">
        <img src={images[img]} className="xl:size-[30vw] size-[37vw] rounded-lg" />
        <div
          className="flex items-center justify-between gap-3"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
            onClick={()=>handelClick(index)}
              key={index}
              src={image}
              className={`xl:size-[6vw] size-[8vw] rounded-md object-cover object-top flex-shrink-0 cursor-pointer ${index === img && "shadow-Dark_grayish_blue shadow-lg"}`}
            />

          ))}
        </div>
      </div>

    </div>
  );
}

export default Slider;
