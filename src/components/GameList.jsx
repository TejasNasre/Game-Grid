import React, { useEffect, useState } from "react";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

export default function GameList({ list }) {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentItemIndex, list]);

  const handleNext = () => {
    setCurrentItemIndex(
      currentItemIndex >= list.length - 1 ? 0 : currentItemIndex + 1
    );
  };

  return (
    <>
      {list.length > 0 && (
        <div className="relative p-4 md:p-10 flex justify-center items-center">
          <img
            src={list[currentItemIndex].background_image}
            alt={list[currentItemIndex].name}
            className="w-full md:h-[400px] object-cover bg-center rounded-md md:rounded-[3rem]"
          />
          <div className="absolute top-5 md:top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-end">
            <h1 className="text-black dark:text-white mt-5 md:text-2xl">
              {list[currentItemIndex].name}
            </h1>
          </div>
          <button
            onClick={() =>
              setCurrentItemIndex(
                currentItemIndex > 0 ? currentItemIndex - 1 : list.length - 1
              )
            }
            className="absolute top-[50%] left-0 bg-opacity-50 text-white px-4 py-2 text-xl"
          >
            <FcPrevious />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-[50%] right-0  bg-opacity-50 text-white px-4 py-2 text-xl"
          >
            <FcNext />
          </button>
        </div>
      )}
    </>
  );
}
