import React, { useEffect, useState } from "react";
import GenereList from "../components/GenereList";
import GameList from "../components/GameList";
import TrendingGames from "../components/TrendingGames";
import Loading from "../components/Loading";
import axios from "axios";

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getGamesList = async () => {
      setIsLoading(true);
      const res = await axios.get(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`
      );
      // console.log(res.data.results);
      setList(res.data.results);
      setIsLoading(false);
    };
    getGamesList();
  }, []);

  const getGameListById = (id) => {
    setIsLoading(true);
    axios
      .get(
        `https://api.rawg.io/api/games?key=${
          import.meta.env.VITE_API_KEY
        }&genres=${id}`
      )
      .then((res) => {
        // console.log(res.data.results);
        setList(res.data.results);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <>
      <div className="w-full h-auto bg-[#F4F4F0] dark:bg-[#151515] dark:text-white flex flex-row">
        <div className="w-[auto] hidden border-r-2 border-black dark:border-white md:block">
          <GenereList
            setGenereId={(setGenereId) => getGameListById(setGenereId)}
          />
        </div>
        <div className="w-full h-auto dark:bg-[#151515]">
          <GameList list={list} />
          <TrendingGames list={list} />
        </div>
      </div>
    </>
  );
}
