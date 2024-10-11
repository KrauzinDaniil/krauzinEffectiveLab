import React, { useEffect, useState } from "react";
import Favourites from "../../components/Favourites/Favourites";
import { DisplayInterface } from "../../types/DisplayInterface";

const FavouritesRoute: React.FC = () => {
  const [toDisplay, setDisplay] = useState<DisplayInterface[]>([]);

  useEffect(() => {
    const display: DisplayInterface[] = [];
    localStorage.removeItem("loglevel");
    for (const key in localStorage) {
      const str = localStorage.getItem(key);
      if (str !== null) {
        display.push(JSON.parse(str));
      }
    }
    setDisplay(display);
  }, []);

  function changeLocalStorage(
    key: string,
    value: string,
    mode: string
  ): unknown {
    switch (mode) {
      case "add":
        localStorage.setItem(key, value);
        break;
      case "delete":
        localStorage.removeItem(key);
        break;
      case "check":
        return localStorage.getItem(key);
        break;
    }
    return null;
  }

  

  return (
    <div>
      <Favourites display={toDisplay} changeLocalStorage={changeLocalStorage} />
    </div>
  );
};

export default FavouritesRoute;
