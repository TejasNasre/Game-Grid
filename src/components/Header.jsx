import React from "react";
import { FaSearchengin } from "react-icons/fa6";
import { IoMoonOutline } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Logo from "../assets/images/Logo.png";

export default function Header() {
  const { dark, setDark } = useContext(ThemeContext);
  return (
    <>
      <div className="w-full flex items-center gap-10 px-10 py-5 border-b-2 border-black dark:border-white bg-[#F4F4F0] dark:bg-[#151515] dark:text-white">
        <div>
          <img src={Logo} alt="logo" width="100px" />
        </div>
        <div className="flex items-center gap-3 justify-center p-2 w-full h-[3rem] border-2 border-black rounded-full dark:border-white">
          <FaSearchengin className="h-full text-xl" />
          <input
            type="text"
            className="w-full bg-transparent outline-none text-[1.1rem] "
            placeholder="Search Game..."
          />
        </div>
        <div
          className="border-2 border-black rounded-full p-2 cursor-pointer dark:border-white"
          onClick={() => {
            setDark((prev) => !prev);
            localStorage.setItem("dark", !dark);
          }}
        >
          {dark ? <IoMoonOutline /> : <FaSun />}
        </div>
      </div>
    </>
  );
}
