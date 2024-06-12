import React from "react";

export default function TrendingGames({ list }) {
  return (
    <>
      <div className="mt-10">
        <h1 className="text-center text-3xl">Trending Games</h1>
        <div className="flex flex-row justify-center items-center flex-wrap gap-10 my-5">
          {list.map((item, id) => (
            <div
              className="border border-black dark:border-white rounded-md w-[200px] h-[270px] p-2  cursor-pointer hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem] hover:shadow-[.25rem_.25rem_0rem_#000000] dark:hover:shadow-[.25rem_.25rem_0rem_#FFFFFF] transition duration-200 ease-in-out transform"
              key={id}
            >
              <div className="w-full ">
                <img
                  src={item.background_image}
                  alt={item.name}
                  className="object-cover rounded-md w-full h-[115px]"
                />
              </div>
              <div className="flex justify-center items-center mt-3">
                <p className="text-[1rem]">
                  {item.name}{" "}
                  <span className="bg-[green] p-1 rounded-md">
                    {item.metacritic}
                  </span>
                </p>
              </div>
              <div className="flex flex-col">
                <p>
                  <span>🌟</span>
                  {item.rating}
                </p>
                <p>
                  <span>💬</span>
                  {item.reviews_count}
                </p>
                <p>
                  <span>🔥</span>
                  {item.suggestions_count}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
