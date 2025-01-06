import React,{useState} from "react";
import image1 from "/src/assets/images/image-product-1.jpg";
import image2 from "/src/assets/images/image-product-2.jpg";
import image3 from "/src/assets/images/image-product-3.jpg";
import image4 from "/src/assets/images/image-product-4.jpg";
import prev from "/src/assets/images/icon-previous.svg";
import next from "/src/assets/images/icon-next.svg";

const images = [image1, image2, image3, image4];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Handler for next button
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    console.log("next:" ,currentIndex);
  };

  // Handler for previous button
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    console.log("prev:" ,currentIndex);
  };
  return (
    <div className="h-[32vh] w-full relative flex items-center justify-start flex-shrink-0 flex-nowrap bg-red-900 overflow-hidden">
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
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      <div className="fixed w-full top-[25%] left-0 right-0 -translate-y-1/2 flex flex-row-reverse items-center justify-between px-[7%]">
        <button
           onClick={handlePrev}
          className={`px-[12px] grid place-content-center bg-white py-[10px] rounded-full ${""}`}
        >
          <img className="h-3" src={next} alt="next" />
        </button>
        <button
           onClick={handleNext}
          className={`px-[12px] grid place-content-center bg-white py-[10px] rounded-full ${""}`}
        >
          <img className="h-3" src={prev} alt="prev" />
        </button>
      </div>
    </div>
  );
}

export default Slider;
