import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import { slideritems } from "../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [s, setS] = useState("0vw");

  const handleClick = (dir) => {
    if (dir === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      setS(slideIndex * -100 + "vw");
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      setS(slideIndex * -100 + "vw");
    }
  };

  return (
    <div className="hidden w-full h-screen md:flex  relative overflow-hidden">
      {/* arrow */}
      <div
        onClick={() => handleClick("left")}
        className="w-14 h-14 z-50 bg-[#fff7f7] rounded-full flex items-center justify-center absolute top-0 bottom-0 m-auto left-3 cursor-pointer opacity-50 hover:opacity-100 "
      >
        <ArrowLeftOutlined />
      </div>
      <div
        className={`h-full flex transition-all duration-[1s] ease-linear `}
        style={{ transform: `translateX(${s})` }}
      >
        {slideritems.map((item) => (
          <div key={item.id}>
            {/* slide container */}
            <div
              className={`flex items-center w-screen h-screen bg-[#${item.bg}]`}
            >
              <div className="flex-1 h-full  ">
                <img
                  className="h-[80%] ml-20 "
                  loading="lazy"
                  src="/assets/1.jpg"
                  alt=""
                />
              </div>
              {/* info container */}
              <div className="flex-1 p-12  ">
                <h1 className="text-7xl  "> {item.title}</h1>
                <p
                  className="my-12 text-xl font-medium "
                  style={{ letterSpacing: "3px" }}
                >
                  DONT COMPROMISE ON STYLE ! GET FLAT 30% OFF FOR NEW ARRIVALS.
                </p>
                <button className="p-3 text-xl bg-transparent cursor-pointer border-2 border-solid border-black shadow-lg  ">
                  SHOW NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={() => handleClick("right")}
        className="w-14 h-14 z-50 bg-[#fff7f7] rounded-full flex items-center justify-center absolute top-0 bottom-0 m-auto right-3 cursor-pointer opacity-50 hover:opacity-100"
      >
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
