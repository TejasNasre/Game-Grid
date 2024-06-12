import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export default function GenereList({ setGenereId }) {
  const [list, setList] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const getGenresList = async () => {
      axios
        .get(
          `https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`
        )
        .then((res) => {
          // console.log(res.data.results);
          setList(res.data.results);
        });
    };
    getGenresList();
  }, [setGenereId]);

  return (
    <>
      <div className="p-5">
        <h1 className="text-2xl font-bold">Genres</h1>
        <div className="py-5 flex flex-col gap-2">
          {list.map((item, id) => (
            <div
              onClick={() => {
                setActive(id);
                setGenereId(item.id);
              }}
              key={id}
              className={`flex items-center gap-2 p-2 mb-2 cursor-pointer  hover:border hover:border-black hover:rounded-lg hover:bg-[#E4F5E6] dark:hover:border dark:hover:border-white dark:hover:rounded-lg dark:hover:bg-[#263238] ${
                active === id
                  ? "border border-black rounded-lg bg-[#E4F5E6] dark:border-white dark:rounded-lg dark:bg-[#263238]"
                  : "border border-transparent"
              }`}
            >
              <img
                src={item.image_background}
                alt={item.slug}
                className="h-[45px] w-[45px] object-cover rounded-lg"
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
