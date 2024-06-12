import React, { useEffect } from "react";
import { useState } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const localDark = localStorage.getItem("dark");
    // console.log(localDark);
    setDark(localDark);
  },[])
  return (
    <>
      <ThemeContext.Provider value={{ dark, setDark }}>
        <div className={`${dark ? `dark` : `light`}`}>
          <Header />
          <Home />
        </div>
      </ThemeContext.Provider>
    </>
  );
}
